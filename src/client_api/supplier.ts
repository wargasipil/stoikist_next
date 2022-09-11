import { SupplierType, Supplier } from '@prisma/client'
import axios from 'axios'
import { PaginateRes } from "../models/response"
import { SupplierListQuery } from '../../pages/api/supplier'

export interface SupplierListItem extends Supplier {
  type: SupplierType
}
  
export async function fetchSupplierList(url: string, params: SupplierListQuery): Promise<PaginateRes<SupplierListItem>> {
  const res = await axios.get(url, {
    params,
  })

  return res.data

}


export async function getSupplierList(params: SupplierListQuery): Promise<PaginateRes<SupplierListItem>> {
  const res = await axios.get('/api/supplier', {
    params,
  })

  return res.data

}

