import { NextApiRequest, NextApiResponse } from "next"
import { z } from "zod"
import { prisma } from "../../../src/helpers/database"
import { createShipment, createShipmentPayload } from '../../../src/repos/ShipmentRepo'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
  const { method, body } = req
  if(method !== 'POST'){
    return res.status(500).send({
      msg: "method not allowed"
    })
  }

  const payload = createShipmentPayload.parse(body)

  await prisma.$transaction(async (client) =>  {
    await createShipment(client, payload)
  }, {
    maxWait: 60000,
    timeout: 30000
  })

  return res.status(200).send({
    msg: 'ok'
  })
}