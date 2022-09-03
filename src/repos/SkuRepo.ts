import { Prisma, PrismaClient, Sku, Variation } from "@prisma/client"

export interface SkuError {
  code: 'SKU_ERROR'
  msg: string
}

export interface SkuData extends Sku {
  variation: Variation
}

export async function getSku(prisma: Prisma.TransactionClient, sku_id: string): Promise<{
  error: SkuError | null,
  data: SkuData | null
}> {
  const sku = await prisma.sku.findUnique({
    where: {
      id: sku_id
    },
    include: {
      variation: true
    }
  })

  if(!sku){
    return {
      error: {
        code: 'SKU_ERROR',
        msg: `sku ${sku_id} not found`
      },
      data: null
    }
  }

  return {
    error: null,
    data: sku
  }
}

export async function stockOngoingToReady(prisma: PrismaClient, sku_id: string, count: number) {
    await prisma.sku.update({
      where: {
        id: sku_id
      },
      data: {
        ongoing_stock: {
          decrement: count
        },
        ready_stock: {
          increment: count
        },
      }
    })
}


export async function updateOngoingStockSku(prisma: Prisma.TransactionClient, sku_id: string, count: number){
  await prisma.sku.update({
    where: {
      id: sku_id
    },
    data: {
      ongoing_stock: {
        increment: count
      }
    }
  })
}