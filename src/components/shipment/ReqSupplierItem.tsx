
import { HStack, Tag, IconButton, Text } from "@chakra-ui/react"
import { AiOutlineShoppingCart, AiOutlineDelete } from "react-icons/ai"
import StockInput from "./StockInput"
import { createShipmentItemSelector } from '../../states/CreateShipment';
import { useRecoilState } from 'recoil';
import { useCallback } from 'react'

interface ReSupplierItemProp {
  index: number
}



export default function ReSupplierItem(prop: ReSupplierItemProp) {
  const [ item, setItem ] = useRecoilState(createShipmentItemSelector(prop.index))
  const supplier = item?.supplier  
  const setStock = useCallback((stock: number) => {
    setItem(item => {
      return {
        ...item,
        stock
      }
    })
  }, [setItem])


  const deleteSupplier = useCallback(() => {
    setItem(item => {
      return {
        ...item,
        supplier: undefined
      }
    })
  }, [setItem])

  if(!supplier){
    return null
  }

  const { stock } = item
  

  return <HStack>
    <AiOutlineShoppingCart />
    <HStack>
      <Text fontSize="lg">
        { supplier.name }
      </Text>
      <Tag>{ supplier.type.name }</Tag>
    </HStack>
    
    <StockInput
      value={stock}
      change={setStock}
    />

    <IconButton
      onClick={deleteSupplier}
      size="sm"
      variant='ghost'
      colorScheme='red'
      aria-label='remove'
      icon={<AiOutlineDelete />}
    />

  </HStack>
}
  