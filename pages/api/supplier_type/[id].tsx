import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "../../../src/helpers/database"



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req
    const { id } = req.query

    switch (method) {
        case 'DELETE':
            await prisma.supplierType.deleteMany({
                where: {
                    id: Number(id),
                }
            })
            await prisma.category.delete({
                where: {
                    id: Number(id),
                }
            })
            break

        default:
            res.status(405).send({
                message: "method not allowed"
            })
            break
    }

    res.status(200).send({
        message: "success"
    })
}