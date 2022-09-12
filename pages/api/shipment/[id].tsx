import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "../../../src/helpers/database"
import { setShipmentCompleted } from "../../../src/repos/ShipmentRepo"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
  const { method } = req
  const { id } = req.query

  switch (method) {
    case 'PUT': {
      await prisma.$transaction(async prisma => {
        await setShipmentCompleted(prisma, Number(id))
      }, {
        maxWait: 60000,
        timeout: 60000
      })
      
      return res.status(200).send({
        'msg': 'success'
      })
    }
  }

}