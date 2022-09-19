import { Promo } from "@prisma/client"

export const priceFormatter = new Intl.NumberFormat()
export const getPromoString = (promo: Promo): string => {
  if(promo.type === 'FIXED'){
    return 'Rp. ' + priceFormatter.format(promo.value)
  } else {
    return promo.value + ' %'
  }
}