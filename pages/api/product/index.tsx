import { Product, Prisma } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from '../../../helpers/database'
import { z } from 'zod'


const validateSku = z.object({
  id: z.string(),
  stock: z.string(),
  variation_id: z.number()
})

const validateOption = z.object({
  name: z.string(),
  options: z.array(z.string())
})

export type OptionCreatePayload = z.infer<typeof validateOption>

const validateVariation = z.object({
  names: z.array(z.string()),  
  values: z.array(z.string()),
  price: z.number(),
  is_default: z.boolean(),
  stock: z.number(),
  sku_id: z.string()
})

export type VariationCreatePayload = z.infer<typeof validateVariation>

const validateCreateProduct = z.object({
  rack_name: z.string(),
  marketing_status: z.string(),
  hscode: z.string(),
  weight: z.number(),
  name: z.string(),

  price: z.number(),
  stock: z.number(),

  options: z.array(validateOption),
  variations: z.array(validateVariation),
  categories: z.array(z.number())
})


export type ProductCreatePayload = z.infer<typeof validateCreateProduct>

async function createProduct(req: NextApiRequest): Promise<Product> {
  const { body } = req
  const payload = validateCreateProduct.parse(body)

  const data = await prisma.product.create({
    data: payload
  })

  return data
}


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  switch (method) {
    case 'POST':
      const product = await createProduct(req)

      res.status(200).send(product)
      break
    case 'GET':
      break
  }
}