import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "../../../src/helpers/database"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req
  const { id } = req.query

  switch (method) {
    case 'DELETE': {
      await prisma.promo.delete({
        where: {
          id: Number(id)
        }
      })
      return res.status(200).send({
        msg: 'success'
      })
    }
  }

}