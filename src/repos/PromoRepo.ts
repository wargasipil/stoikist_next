import { Prisma, Promo } from "@prisma/client"
import { z } from "zod"
import { Result } from "../models/result"

export interface PromoError {
  code: 'PROMO_ERROR'
  msg: string
}


export const validateCreatePromo = z.object({
  code: z.string(),
  name: z.string(),
  limit: z.number().or(z.undefined()),
  desc: z.string().or(z.undefined()),
  type: z.literal('PERCENT').or(z.literal('FIXED')),
  value: z.number(),
  start: z.number().or(z.undefined()),
  end: z.number().or(z.undefined())
})

export type CreatePromo = z.infer<typeof validateCreatePromo>

export async function createPromo(prisma: Prisma.TransactionClient, payload: CreatePromo): Promise<Result<Promo, PromoError>>{
  let promo = await prisma.promo.findUnique({
    where: {
      code: payload.code
    }
  })

  if(promo !== null){
    return {
      error: {
        code: 'PROMO_ERROR',
        msg: `promo ${payload.code} already exist`
      },
      data: null
    }
  }

  promo = await prisma.promo.create({
    data: {
      code: payload.code,
      type: payload.type,
      name: payload.name,
      value: payload.value,
      end: payload.end ? new Date(payload.end): undefined,
      start: payload.start ? new Date(payload.start): undefined

    }
  })

  return {
    error: null,
    data: promo
  }
}

export async function deletePromo(prisma: Prisma.TransactionClient, id: number){
  await prisma.promo.delete({
    where: {
      id
    }
  })
}

export async function checkExpiredPromo(){
  throw new Error('Not Implemented')
}

export async function addProductToPromo(){
  throw new Error('Not Implemented')
}

export async function getPromo(prisma: Prisma.TransactionClient, code: string){
  return await prisma.promo.findFirst({
    where: {
      code: code
    }
  })
}

export async function usingPromo(prisma: Prisma.TransactionClient, code: string, total: number): Promise<Result<{discount: number, promo_id: number}, PromoError>> {
  const promo = await getPromo(prisma, code)
  if(!promo){
    return {
      error: {
        code: 'PROMO_ERROR',
        msg: `promo ${code} not found`
      },
      data: null
    }
  }

  if(promo.limit){
    if((promo.used + 1) > promo.limit){
      return {
        data: null,
        error: {
          code: 'PROMO_ERROR',
          msg: `promo limit reached ${code}`
        }
      }
    }
  }

  await prisma.promo.update({
    where: {
      code,
    },
    data: {
      used: {
        increment: 1
      }
    }
  })

  const discount = calculatePromo(promo, total)
  const promo_id = promo.id

  return {
    data: {
      discount,
      promo_id
    },
    error: null
  }

}

export function calculatePromo(promo: Promo, total: number): number {
  
  
  let min_total = 0
  if(promo.type === 'FIXED'){
    min_total = promo.value
  }
  else {
    min_total = (total * (promo.value/100))
  }
  return min_total
}