import { Product, Prisma } from '@prisma/client'
import { z } from "zod"

type ErrCode = 'CREATE_ERROR'
export class ProductErr extends Error {
  code: ErrCode
  constructor(code: ErrCode, msg: string) {
    super(msg)
    this.code = code
    
  }
}

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


export const validateCreateProduct = z.object({
  image_ids: z.array(z.number()).min(1),
  rack_name: z.string().min(1),
  marketing_status: z.string(),
  hscode: z.string(),
  weight: z.number().min(1),
  name: z.string().min(1),

  price: z.number(),
  stock: z.number(),
  sku_id: z.string(),

  options: z.array(validateOption),
  variations: z.array(validateVariation),
  categories: z.array(z.number()).min(1)
})


export type ProductCreatePayload = z.infer<typeof validateCreateProduct>



export async function createProduct(prisma: Prisma.TransactionClient, payload: ProductCreatePayload): Promise<Product> {
  const resource_ids = payload.image_ids.map(image => {
    return {
      resource_id: image
    }
  })

  const categories = await prisma.category.findMany({
    where: {
      id: {
        in: payload.categories
      }
    }
  })
  
  const product = await prisma.product.create({
    data: {
      product_resource: {
        createMany: {
          data: resource_ids
        }
      },
      hscode: payload.hscode,
      marketing_status: payload.marketing_status,
      name: payload.name,
      rack_name: payload.rack_name,
      weight: payload.weight,
    }
  })

  

  await prisma.categoryProduct.createMany({
    data: categories.map(categ => {
      return {
        product_id: product.id,
        cat_id: categ.id
      }
    })
  })

  if(payload.options.length == 0){
    const variation = await prisma.variation.create({
      data: {
        price: payload.price,
        product_id: product.id,
        names: [],
        values: [],
        is_default: true
      }
    })

    await prisma.sku.create({
      data: {
        id: payload.sku_id,
        ready_stock: payload.stock,
        variation_id: variation.id,
        product_id: product.id
      }
    })

  } else {
    await prisma.productOption.createMany({
      data: payload.options.map(option => {
        return {
          name: option.name,
          product_id: product.id,
          options: option.options
        }
      })
    })

    const tasks = payload.variations.map(vari => {
      return prisma.variation.create({
        data: {
          price: vari.price,
          product_id: product.id,
          names: vari.names,
          values: vari.values,
          is_default: false,
          sku: {
            create: {
              id: vari.sku_id,
              ready_stock: vari.stock,
              product_id: product.id,
            }
          }
        }
      })
    })

    await Promise.all(tasks)
  }

  return product
}