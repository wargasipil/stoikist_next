import { PrismaClient } from "@prisma/client"
import { type } from "os"
import { z } from "zod"

export const validateCustPayload = z.object({
  name: z.string(),
  phone: z.string(),
  address: z.string()
})

export const validateUpdateCustPaylload = z.object({
  name: z.string().or(z.undefined()),
  phone: z.string().or(z.undefined()),
  address: z.string().or(z.undefined()),
  last_order: z.date().or(z.undefined())
})

export type CustUpdatePayload = z.infer<typeof validateUpdateCustPaylload>
export type CustPayload = z.infer<typeof validateCustPayload>

export async function createCustomer(prisma: PrismaClient, payload: CustPayload){
  const customer = await prisma.customer.create({
    data: payload
  }) 

  return customer
}

export async function getCustomer(prisma: PrismaClient, id: number){
  const customer = await prisma.customer.findFirst({
    where: {
      id
    }
  })

  return customer
}

export async function updateCustomer(prisma: PrismaClient, id: number, payload: CustUpdatePayload){
  await prisma.customer.update({
    where: {
      id
    },
    data: payload
  })

  return await getCustomer(prisma, id)

}



export async function listCustomer(prisma: PrismaClient, name: string){
  const customers = await prisma.customer.findMany({
    where: {
      OR: [
        {
          name: {
            search: name
          }
        },
        {
          phone: {
            search: name
          }
        }
      ]
    }
  })

  return customers
}