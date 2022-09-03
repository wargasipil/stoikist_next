import { Promo, DiscountType } from "@prisma/client"
import { z } from "zod"

async function getPromo(){

}


export const validateCreatePromo = z.object({
  code: z.string(),
  name: z.string(),
  desc: z.string().or(z.undefined()),
  type: z.literal('PERCENT').or(z.literal('FIXED')),
  value: z.number(),
  start: z.date().or(z.undefined()),
  end: z.date().or(z.undefined())
})

export 

async function createPromo(): Promise<Promo>{

}

async function deletePromo(){

}

async function checkExpiredPromo(){

}

async function addProductToPromo(){

}

