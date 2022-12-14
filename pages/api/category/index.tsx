import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "../../../src/helpers/database"
import { CreateCategoryPayload } from "../../../payload/category"

interface Category {
    id: number
    name: string
    parent_id: number
}

interface CategoryRequest extends NextApiRequest {
    body: CreateCategoryPayload
}

export default async function handler(req: CategoryRequest, res: NextApiResponse) {
    const { method, body } = req

    switch (method) {
        case 'POST': {
            const data = await prisma.category.create({
                data: {
                    name: body.name,
                    parent_id: body.parent_id
                }
            })

            return res.status(200).send(data)
        }
        case 'GET': {
            const categories = await prisma.category.findMany()
            return res.status(200).send(categories)
        }
    }
}