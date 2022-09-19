import { atom, selectorFamily, useSetRecoilState } from 'recoil';
import { IVariation, ProductItem } from "../client_api/product"
import { useCallback } from 'react';

export interface OrderProductItem {
  item: ProductItem
  vari: IVariation
  count: number
}

export const orderProductListState = atom<OrderProductItem[]>({
  key: 'orderProductListState',
  default: []
})

export const orderProductItemSelector = selectorFamily<OrderProductItem, number>({
  key: "orderProductItemState",
  get: (index) => ({get}) => {
    const items = get(orderProductListState)  
    return items[Number(index)]
  },
  set: (index) => ({set}, newValue) => {
    
    set(orderProductListState, items => {
      
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

export function useAddOrderProduct(){
    const setItems = useSetRecoilState(orderProductListState)
    const addItem = useCallback((data: ProductItem, vari: IVariation) => {
        setItems(items => {
            let changed = false

            const changes = items.map((item) => {
                if(item.vari.sku.id == vari.sku.id){
                    changed = true
                    return {
                        ...item,
                        count: item.count + 1
                    }
                }
                return item
            })

            if(changed){
                return changes
            }

            return [{
                item: data,
                vari,
                count: 1
            }, ...items]
        })
    }, [setItems])

    return addItem
}

export function useDeleteOrderProduct(){
    const setItems = useSetRecoilState(orderProductListState)

    const deleteItem = useCallback((index: number) => {
        setItems(items => {
            return items.filter((item, ind) => ind !== index)
        })
    }, [setItems])

    return deleteItem
}


export interface CustomerForm {
  name: string
  phone: string
  address: string
}

export const customerOrderState = atom<CustomerForm>({
  key: 'customerOrderState',
  default: {
    name: '',
    phone: '',
    address: ''
  }
})