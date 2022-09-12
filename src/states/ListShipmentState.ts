import { atom, selectorFamily } from 'recoil';
import { ShipmentListItem } from '../../pages/api/shipment/index'


export const listShipmentState = atom<ShipmentListItem[]>({
  key: 'listShipmentState',
  default: []
})

export const listShipmentSelector = selectorFamily<ShipmentListItem, number>({
  key: "listShipmentSelector",
  get: (index) => ({get}) => {
    const items = get(listShipmentState)  
    return items[Number(index)]
  },
  set: (index) => ({set}, newValue) => {
    
    set(listShipmentState, items => {
      
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
