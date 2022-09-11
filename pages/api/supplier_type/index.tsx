import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "../../../src/helpers/database"
import { CreateCategoryPayload } from "../../../payload/category"

interface SupplierType {
    id: number
    name: string
}

interface SupplierTypeRequest extends NextApiRequest {
    body: {
        name: string
    }
}

export default async function handler(req: SupplierTypeRequest, res: NextApiResponse) {
    const { method, body } = req

    switch (method) {
        case 'POST': {
            const data = await prisma.supplierType.create({
                data: body
            })

            return res.status(200).send(data)
        }
        case 'GET': {
            const suptypes = await prisma.supplierType.findMany()
            return res.status(200).send(suptypes)
        }
    }
}