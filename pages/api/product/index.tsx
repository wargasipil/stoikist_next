import { Product, Prisma } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from '../../../helpers/database'
import { z } from 'zod'
import { validatePaginateQuery } from '../../../models/http/request'
import { PaginateRes } from '../../../models/http/response'


const validateOption = z.object({
  name: z.string(),
  options: z.array(z.string())
})

export type OptionCreatePayload = z.infer<typeof validateOption>

const validateVariation = z.object({
  names: z.array(z.string()),  
  values: z.array(z.string()),
  price: z.number(),
  is_default: z.boolean(),
  stock: z.number(),
  sku_id: z.string()
})

export type VariationCreatePayload = z.infer<typeof validateVariation>

const validateCreateProduct = z.object({
  rack_name: z.string(),
  marketing_status: z.string(),
  hscode: z.string(),
  weight: z.number(),
  name: z.string(),

  price: z.number(),
  stock: z.number(),
  sku_id: z.string(),

  options: z.array(validateOption),
  variations: z.array(validateVariation),
  categories: z.array(z.number())
})


export type ProductCreatePayload = z.infer<typeof validateCreateProduct>

async function createProduct(req: NextApiRequest): Promise<Product> {
  const { body } = req
  const payload = validateCreateProduct.parse(body)

  const categories = await prisma.category.findMany({
    where: {
      id: {
        in: payload.categories
      }
    }
  })

  const product = await prisma.product.create({
    data: {
      hscode: payload.hscode,
      marketing_status: payload.marketing_status,
      name: payload.name,
      rack_name: payload.rack_name,
      weight: payload.weight
    }
  })

  const cat_products = await prisma.categoryProduct.createMany({
    data: categories.map(categ => {
      return {
        product_id: product.id,
        cat_id: categ.id
      }
    })
  })

  if(payload.options.length == 0){
    const variation = await prisma.variation.create({
      data: {
        price: payload.price,
        product_id: product.id,
        names: [],
        values: [],
        is_default: true
      }
    })

    const sku = await prisma.sku.create({
      data: {
        id: payload.sku_id,
        stock: payload.stock,
        variation_id: variation.id,
        product_id: product.id
      }
    })

  } else {
    const options = await prisma.productOption.createMany({
      data: payload.options.map(option => {
        return {
          name: option.name,
          product_id: product.id,
          options: option.options
        }
      })
    })

    const tasks = payload.variations.map(vari => {
      return prisma.variation.create({
        data: {
          price: vari.price,
          product_id: product.id,
          names: vari.names,
          values: vari.values,
          is_default: false,
          sku: {
            create: {
              id: vari.sku_id,
              stock: vari.stock,
              product_id: product.id
            }
          }
        }
      })
    })

    const variations = await Promise.all(tasks)
  }

  return product
}


const validateQuery = z.object({
  name: z.string().or(z.undefined()),
  min_price: z.number().or(z.string().regex(/\d+/).transform(Number)).or(z.undefined()),
  max_price: z.number().or(z.string().regex(/\d+/).transform(Number)).or(z.undefined()),
  category: z.number().or(z.string().regex(/\d+/).transform(Number)).or(z.undefined()),
  min_stock: z.number().or(z.string().regex(/\d+/).transform(Number)).or(z.undefined()),
  max_stock: z.number().or(z.string().regex(/\d+/).transform(Number)).or(z.undefined()),
  ...validatePaginateQuery
})

export type ProductListQuery = z.infer<typeof validateQuery>

function createListQuery(query: ProductListQuery){
  const dbquery: Prisma.Enumerable<Prisma.ProductWhereInput> = []

  if(query.name){
    dbquery.push({
      name: {
        search: query.name
      }
    })
  }

  if(query.category){
    dbquery.push({
      categories: {
        some: {
          id: query.category
        }
      }
    })
  }

  if(query.min_price){
    dbquery.push({
      variation: {
        some: {
          price: {
            gte: query.min_price
          }
        }
      }
    })
  }

  if(query.max_price){
    dbquery.push({
      variation: {
        some: {
          price: {
            lte: query.max_price
          }
        }
      }
    })
  }

  if(query.min_stock){
    dbquery.push({
      sku: {
        some: {
          stock: {
            gte: query.min_stock
          }
        }
      }
    })
  }

  if(query.max_stock){
    dbquery.push({
      sku: {
        some: {
          stock: {
            lte: query.max_stock
          }
        }
      }
    })
  }

  return dbquery

}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, query: rawQuery } = req

  switch (method) {
    case 'POST':
      const product = await createProduct(req)

      res.status(200).send(product)
      break
    case 'GET':
      const query = validateQuery.parse(rawQuery)

      const dbquery = {
        where: {
          AND: createListQuery(query)
        }
      }

      const qcount = prisma.product.count(dbquery)

      const findQuery = {
        ...dbquery,
        include: {
          sku: true,
          categories: true,
          options: true,
          variation: true
        },
        skip: (query.page - 1) * query.limit,
        take: query.limit
      }

      const qprod = prisma.product.findMany(findQuery)

      const [ count, supplier] = await Promise.all([qcount, qprod])

      const resdata: PaginateRes<Product> = {
          items: supplier,
          pagination: {
              page: query.page,
              total: count,
              limit: query.limit
          }
      }

      res.status(200).send(resdata)

      break
  }
}