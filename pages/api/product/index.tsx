import { Product, Prisma } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from '../../../src/helpers/database'
import { z } from 'zod'
import { validatePaginateQuery } from '../../../src/models/request'
import { PaginateRes } from '../../../src/models/response'


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


  const product = await prisma.product.create({
    data: {
      hscode: payload.hscode,
      marketing_status: payload.marketing_status,
      name: payload.name,
      rack_name: payload.rack_name,
      weight: payload.weight
    }
  })

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
          ready_stock: {
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
          ready_stock: {
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
    case 'POST': {
      const product = await createProduct(req)

      return res.status(200).send(product)
    }
    case 'GET': {
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
          categories: {
            select: {
              category: true
            }
          },
          options: true,
          variation: {
            select: {
              id: true,
              names: true,  
              values: true,
              price: true,
              is_default: true,
              sku: {
                select: {
                  id: true,
                  ready_stock: true,
                  last_restock: true
                }
              }
            }
          }
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

      return res.status(200).send(resdata)

    }
  }
}