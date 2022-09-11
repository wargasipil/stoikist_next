import { HStack, VStack, Tag, IconButton, Text } from "@chakra-ui/react"
import { AiOutlineDelete } from "react-icons/ai"
import { HiDocument } from "react-icons/hi"
import { IVariation, ProductItem } from '../../client_api/product'

export interface ReProductItemProp {
  item: ProductItem
  vari: IVariation
  onDelete?: () => unknown
}

export default function ReProductItem(prop: ReProductItemProp){
  const { item, vari, onDelete } = prop
  return <HStack
    p="1"
    m="2"
    boxShadow="1sm">
    <HiDocument/>
    <VStack align="flex-start">
      
      <HStack>
      <Text fontSize="lg">
        { item.name }
      </Text>

      {
        vari.values.map(item => {
          return <Tag key={item}>{ item }</Tag>
        })
      }
      </HStack>
  
      <Text>
        sku: {vari.sku.id}
      </Text>
  
  
    </VStack>
  
    <IconButton
      onClick={onDelete}
      size="sm"
      variant='ghost'
      colorScheme='red'
      aria-label='remove'
      icon={<AiOutlineDelete />}
    />
  
  </HStack>
  }