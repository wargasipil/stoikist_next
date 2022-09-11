import { Prisma } from "@prisma/client"


export async function updateOngoingStockSupplier(prisma: Prisma.TransactionClient, id: number, count: number) {
  await prisma.supplier.update({
    where: {
      id
    },
    data: {
      ongoing_stock: {
        increment: count
      }
    }
  })

}

export async function ongoingToReadyStockSupplier(prisma: Prisma.TransactionClient, id: number, count: number) {
  await prisma.supplier.update({
    where: {
      id
    },
    data: {
      ongoing_stock: {
        decrement: count
      },
      ready_stock: {
        increment: count
      }
    }
  })
}