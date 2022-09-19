import { Product, Prisma } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from '../../../src/helpers/database'
import { z } from 'zod'
import { validatePaginateQuery } from '../../../src/models/request'
import { PaginateRes } from '../../../src/models/response'
import { createProduct, validateCreateProduct } from '../../../src/repos/ProductRepo';

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
        contains: query.name,
        mode: 'insensitive'
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
  const { method, query: rawQuery, body } = req

  switch (method) {
    case 'POST': {
      try {
        const payload = validateCreateProduct.parse(body)
        
        const product = await prisma.$transaction(async prisma => {
          return await createProduct(prisma, payload)
          
        })
        return res.status(200).send(product)

      } catch (err) {
        if(err instanceof z.ZodError){
          return res.status(422).send(err)
        }
        return res.status(500).send({
          'details': "create product error"
        })
      }
      
    }
    case 'GET': {
      const query = validateQuery.parse(rawQuery)

      const dbquery = {
        where: {
          AND: createListQuery(query)
        }
      }

      const qcount = prisma.product.count(dbquery)

      const qprod = prisma.product.findMany({
        ...dbquery,
        orderBy: [
          {
            created: 'desc'
          }
        ],
        include: {
          sku: true,
          product_resource: {
            include: {
              resource: true
            }
          },
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
      })

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