import { NextApiRequest, NextApiResponse } from "next"
import { z } from "zod"

import { prisma } from "../../../src/helpers/database"
import { validatePaginateQuery } from "../../../src/models/request"
import { PaginateRes } from '../../../src/models/response'
import { Restock, RestockItem, Sku, Supplier, SupplierType, Variation } from '@prisma/client'

const isQuery = z.object({
  ...validatePaginateQuery
})

export type ShipmentQuery = z.infer<typeof isQuery>

interface SkuItem extends Sku {
  product: {
    id: number
    name: string
  }
}

export interface ShipmentItem extends RestockItem {
  sku: SkuItem
  supplier: {
    type: SupplierType
  } & Supplier
  variation: Variation
}

export interface ShipmentListItem extends Restock {
  items: ShipmentItem[]
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
  const query = isQuery.parse(req.query)

  const total = await prisma.restock.count()

  const items = await prisma.restock.findMany({
    include: {
      items: {
        include: {
          sku: {
            include: {
              product: {
                select: {
                  id: true,
                  name: true
                }
              }
            }
          },
          variation: true,
          supplier: {
            include: {
              type: true
            }
          },
        }
      },
      
    },
    skip: (query.page - 1) * query.limit,
    take: query.limit
  })

  const response: PaginateRes<ShipmentListItem> = {
    items,
    pagination: {
      limit: query.limit,
      total: total,
      page: query.page
    }
  }
 
  res.status(200).send(response)
}