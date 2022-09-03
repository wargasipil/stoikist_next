import { NextApiRequest, NextApiResponse } from "next"
import { z } from "zod"
import { prisma } from "../../../helpers/database"

const stockItemPayload = z.object({      
  supplier_id: z.number(),
  sku_id: z.string(),
  variation_id: z.number(),
  count: z.number()
})

const addShipPayload = z.object({
  resi: z.string().or(z.undefined()),
  total: z.number(),
  sub_total: z.number(),
  items: z.array(stockItemPayload)

})


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req
  if(method !== 'POST'){
    return res.status(500).send({
      msg: "method not allowed"
    })
  }

  const payload = addShipPayload.parse(body)

  await prisma.$transaction(async (prisma) => {
    const { resi, total, sub_total, items } = payload
    
    const restock = await prisma.restock.create({
      data: {
        resi,
        total,
        sub_total,
        shipment_status: 'PROCESS'
      }
    })

    const {id: restock_id } = restock
    await prisma.restockItem.createMany({
      data: items.map( item => {
        return {
          restock_id,
          ...item
        }
      })
    })

  })

  return res.status(200).send({
    msg: 'ok'
  })
}