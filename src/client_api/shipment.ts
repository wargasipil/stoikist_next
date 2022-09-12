import axios from "axios"
import { PaginateRes } from "../models/response"
import { CreateShipmentPayload } from "../repos/ShipmentRepo"
import { ShipmentListItem, ShipmentQuery } from '../../pages/api/shipment/index'

export async function postShipment(payload: CreateShipmentPayload) {
  const res = await axios.post('/api/shipment/add', payload)
  return res.data
  
}

export async function completedShipment(id: number) {
  const res = await axios.put(`/api/shipment/${id}`)
  return res.data
  
}


export async function getListShipment(params: ShipmentQuery): Promise<PaginateRes<ShipmentListItem>> {
  const res = await axios.get('/api/shipment', {
    params
  })

  return res.data
}