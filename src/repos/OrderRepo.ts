import { Prisma, OrderItem, Order } from "@prisma/client"
import { z } from "zod"
import { Result } from "../models/result"
import { PromoError, usingPromo } from "./PromoRepo"
import { getSku, SkuError } from "./SkuRepo"

export const validateOrderItem = z.object({
  sku_id: z.string(),
  count: z.number()
})

export type OrderItemPayload = z.infer<typeof validateOrderItem>

export const validateCreateOrder = z.object({
  promo_code: z.string().or(z.undefined()),
  customer_id: z.number(),
  items: z.array(validateOrderItem)
})

export type CreateOrderPayload = z.infer<typeof validateCreateOrder>

export interface StockError {
  code: 'STOCK_ERROR'
  msg: string
}

export interface OrderError {
  code: 'ORDER_ERROR',
  order_items?: (StockError | SkuError)[], 
  msg: string,
}



export async function createOrderItem(prisma: Prisma.TransactionClient, order_id: number,  payload: OrderItemPayload): Promise<Result<OrderItem, StockError | SkuError>> {

  const { sku_id, count } = payload

  const { data: sku, error } = await getSku(prisma, sku_id)
  if(sku === null) {
    return {
      error,
      data: null
    }
  }

  if(sku.ready_stock < count){
    return {
      error: {
        code: 'STOCK_ERROR',
        msg: `stock ${sku_id} kurang dari ${count}`
      },
      data: null
    }
  }

  const { variation_id, product_id } = sku

  const orderItem = await prisma.orderItem.create({
    data: {
      count,
      sku_id,
      order_id,
      product_id,
      variation_id,
      total: count * sku.variation.price
    }
  })

  // updating stock sku
  await prisma.sku.update({
    where: {
      id: sku_id
    },
    data: {
      ready_stock: {
        decrement: count
      }
    }
  })

  return {
    error: null,
    data: orderItem
  }
}

export async function createOrder(prisma: Prisma.TransactionClient, payload: CreateOrderPayload): Promise<Result<Order, OrderError | PromoError>>{
  const { items, customer_id } = payload
  
  // create address buyer


  // create order 
  const order = await prisma.order.create({
    data: {
      status: 'COMPLETED',
      customer_id
    }
  })

  const { id: order_id } = order

  const creates = items.map(item => createOrderItem(prisma, order_id, item))
  const results = await Promise.all(creates)

  const orderItemErrors = results.filter(res => res.error)
  
  if(orderItemErrors.length > 0){
    return {
      data: null,
      error: {
        code: 'ORDER_ERROR',
        order_items: orderItemErrors as any,
        msg: 'order items error'
      }
    }
  }


  // hitung subtotal, total dan promo
  const sub_total = results.reduce((total, item) => {
    const tot = item.data ? item.data.total: 0
    return total + tot
  }, 0)

  let total = sub_total
  let discount = 0
  let promo_id = undefined
  if(payload.promo_code){
    const resdiscount = await usingPromo(prisma, payload.promo_code, sub_total)
    if(resdiscount.error) {
      return {
        error: resdiscount.error,
        data: null
      }
    }

    if(resdiscount.data){
      discount = resdiscount.data.discount
      promo_id = resdiscount.data.promo_id
      total = total - discount
    }

    
  }

  // create invoice
  await createInvoice(prisma, {
    discount,
    order_id: order.id,
    promo_id,
    sub_total,
    total
  })


  return {
    data: order,
    error: null
  }
}

interface InvoiceCreatePayload {
  promo_id?: number
  order_id: number
  discount: number
  total: number
  sub_total: number
}

export async function createInvoice(prisma: Prisma.TransactionClient, payload: InvoiceCreatePayload) {
  await prisma.invoice.create({
    data: {
      invoice_status: 'UNPAID',
      ...payload
    }
  })
}