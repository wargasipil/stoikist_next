import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "../../../helpers/database"
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
        case 'POST':
            const data = await prisma.supplierType.create({
                data: body
            })

            res.status(200).send(data)
            break
        case 'GET':
            const suptypes = await prisma.supplierType.findMany()
            res.status(200).send(suptypes)
            break
    }
}