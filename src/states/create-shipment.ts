import { atom, selectorFamily, useRecoilState } from 'recoil'
import { IVariation, ProductItem } from "../client_api/product"
import { SupplierListItem } from "../client_api/supplier"
import { useCallback } from 'react';

export interface CreateShipmentItem {
  item: ProductItem
  vari: IVariation
  stock: number
  supplier?: SupplierListItem
}

export const createShipmentState = atom<CreateShipmentItem[]>({
  key: 'createShipmentState',
  default: []
})

export const createShipmentItemSelector = selectorFamily<CreateShipmentItem, number>({
  key: "createShipmentItem",
  get: (index) => ({get}) => {
    const items = get(createShipmentState)  
    return items[Number(index)]
  },
  set: (index) => ({set}, newValue) => {
    
    set(createShipmentState, items => {
      
      return items.map((item, ind) => {
        if(ind == index){
          
          return {
            ...item,
            ...newValue
          }
        }
        return item
      })
    })
  }
})


interface StateHandler {
  clear: () => unknown
}


export function useCreateShipmentState(): StateHandler {
  const [ , setItems ] = useRecoilState(createShipmentState)
  
  const clear = useCallback(() => {
    setItems([])
  }, [setItems])

  return {
    clear
  }
}