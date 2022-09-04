import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from '../../../src/helpers/database'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req
  const { id } = req.query

  switch (method) {
    case 'PUT':

      break
    case 'GET':
      const product = await prisma.product.findFirst({
        where: {
          id: Number(id)
        }
      })

      res.status(200).send(product)
      break
    
    case 'DELETE':
      await prisma.product.delete({
        where: {
          id: Number(id)
        }
      })
      break

  
  }
}