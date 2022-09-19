import { NextApiRequest, NextApiResponse } from "next"
import { z } from "zod";
import { prisma } from "../../../src/helpers/database";
import { createPromo, validateCreatePromo } from '../../../src/repos/PromoRepo'

const isQuery = z.object({
  name: z.optional(z.string())
})

export type PromoQuery = z.infer<typeof isQuery>

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, body, query } = req

  switch(method) {
    case 'POST': {
      const payload = validateCreatePromo.safeParse(body)
      if(payload.success){
        await prisma.$transaction(prisma => createPromo(prisma, payload.data))
        return res.status(200).send({
          msg: 'success'
        })
      }

      return res.status(500).send(payload.error)
    }
    case 'GET': {
      const fixquery = isQuery.safeParse(query)
      if(!fixquery.success){
        return res.status(200).send(fixquery.error)
      }

      const promos = await prisma.promo.findMany({
        orderBy: [{
          start: 'desc'
        }],
        where: {
          code: {
            contains: fixquery.data.name
          }
        }
      })

      return res.status(200).send(promos)
    }

  }

}