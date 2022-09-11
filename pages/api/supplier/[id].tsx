import { NextApiRequest, NextApiResponse } from "next"
import { Prisma } from '@prisma/client'
import { z } from "zod"
import { prisma } from "../../../src/helpers/database"

const validatePayload = z.object({
    type_id: z.number(),
    name: z.string().min(5),
    note: z.string(),
    link: z.string()
})


export type SupplierPayload = z.infer<typeof validatePayload>

async function update(req: NextApiRequest) {
    const { body } = req
    const { id } = req.query

    const payload = validatePayload.parse(body)

    await prisma.supplier.update({
        where: {
            id: Number(id)
        },
        data: payload
    })
}


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req
    const { id } = req.query
    
    switch (method) {
        case 'GET': {
            const data = await prisma.supplier.findFirst({
                where: {
                    id: Number(id)
                },
                include: {
                    type: true
                }
            })

            return res.status(200).send(data)
        }

        case 'DELETE': {
            await prisma.supplier.delete({
                where: {
                    id: Number(id)
                }
            })

            return res.status(200).send({
                message: "ok"
            })
            
        }
        case 'PUT': {
            await update(req)

            return res.status(200).send({
                message: "ok"
            })
            
        }
    }
}