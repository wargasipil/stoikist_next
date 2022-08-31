import { Category, Product } from "@prisma/client"
import axios from "axios"
import { PaginateRes } from "../../models/http/response"
import { ProductListQuery } from "../../pages/api/product"


export interface IVariation {
  id: number
  names: string[]  
  values: string[]
  price: number
  is_default: boolean
  sku: {
    id: string
    stock: number
    last_restock?: string
  }
}



export interface ProductItem extends Product {
  variation: IVariation[]
  categories: {
    category: Category
  }[]
}

export async function getProductList(params: ProductListQuery): Promise<PaginateRes<ProductItem>>{
  const res = await axios.get('/api/product', {
    params,
  })

  return res.data
}