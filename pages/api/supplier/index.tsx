import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "../../../helpers/database"
import { z } from "zod"
import { Prisma, Supplier } from "@prisma/client"
import { PaginateRes } from "../../../models/http/response"
import { validatePaginateQuery } from "../../../models/http/request"

export const isQuery = z.object({
    type_id: z.number().or(z.string().regex(/\d+/).transform(Number)).or(z.undefined()),
    name: z.string().or(z.undefined()),
    ...validatePaginateQuery
})

export const isSupplierPayload = z.object({
    type_id: z.number(),
    name: z.string().min(10),
    link: z.string(),
    note: z.string()
})

export type SupplierListQuery = z.infer<typeof isQuery>

function createSelectQuery(query: SupplierListQuery): Prisma.Enumerable<Prisma.SupplierWhereInput> {
    
    const dbquery: Prisma.Enumerable<Prisma.SupplierWhereInput> = []

    if(query.type_id){
        dbquery.push({
            type_id: query.type_id
        })
    }
    
    if(query.name){
        dbquery.push({
            name: {
                search: query.name
            }
        })
    }

    return dbquery
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method, body } = req

    switch (method) {
        case 'POST':
            const payload = isSupplierPayload.parse(body)
            const data = await prisma.supplier.create({
                data: payload
            })

            res.status(200).send(data)
            break
        case 'GET':
            const query = isQuery.parse(req.query)


            const dbquery = {
                where: {
                    AND: createSelectQuery(query)
                }
            }

            const qcount = prisma.supplier.count(dbquery)

            const findQuery = {
                ...dbquery,
                include: {
                    type: true
                },
                skip: (query.page - 1) * query.limit,
                take: query.limit
            }
            const qsupp = prisma.supplier.findMany(findQuery)
            
            const [ count, supplier] = await Promise.all([qcount, qsupp])

            const resdata: PaginateRes<Supplier> = {
                items: supplier,
                pagination: {
                    page: query.page,
                    total: count,
                    limit: query.limit
                }
            }

            res.status(200).send(resdata)
            break
    }
}