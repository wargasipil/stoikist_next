import { Prisma, PrismaClient, Restock, RestockItem } from "@prisma/client"
import { z } from "zod"
import { stockOngoingToReady, updateOngoingStockSku } from "./SkuRepo"
import { updateOngoingStockSupplier } from "./SupplierRepo"

interface RestockShipment extends Restock {
  items: RestockItem[]
}

export async function getShipment(prisma: PrismaClient, id: number): Promise<RestockShipment> {
  const restock = await prisma.restock.findFirst({
    where: {
      id
    },

    select: {
      id: true,
      shipment_status: true,
      items: {
        select: {
          supplier_id: true,
          sku_id: true,
          variation_id: true,
          count: true
        }
      },
      resi: true,
      sub_total: true,
      total: true,
      created: true   
    }
  })
  
  // kodingan gebleg
  return restock as any 
}


export async function setShipmentCompleted(prisma: PrismaClient, id: number){
  const restock = await getShipment(prisma, id)

  // set restock to completed
  await prisma.restock.update({
    where: {
      id
    },

    data: {
      shipment_status: 'COMPLETED'
    }
  })

  const restocks = restock.items.map(item => {
    return stockOngoingToReady(prisma, item.sku_id, item.count)
  })

  await Promise.all(restocks)

  // update supplier shipment
  // update shipment count
}


export const stockItemPayload = z.object({      
  supplier_id: z.number(),
  sku_id: z.string(),
  variation_id: z.number(),
  count: z.number()
})

export const createShipmentPayload = z.object({
  resi: z.string().or(z.undefined()),
  total: z.number(),
  sub_total: z.number(),
  items: z.array(stockItemPayload)

})

export type StockItemPayload = z.infer<typeof stockItemPayload>

export type CreateShipmentPayload = z.infer<typeof createShipmentPayload>

async function createShipment(prisma: Prisma.TransactionClient, payload: CreateShipmentPayload){
  const { items, resi, total, sub_total } = payload
  
  // creating shipment data
  await prisma.restock.create({
    data: {
      resi, 
      total, 
      sub_total,
      shipment_status: 'PROCESS'
    }
  })

  const tasks  = items.map(async (item) => {
    // update stock ongoing sku
    await updateOngoingStockSku(prisma, item.sku_id, item.count)
    // update stock ongoing supplier
    await updateOngoingStockSupplier(prisma, item.supplier_id, item.count)
  })

  await Promise.all(tasks)

}