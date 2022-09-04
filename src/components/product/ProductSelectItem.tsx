import { HStack, VStack, Text, Tag } from "@chakra-ui/react"
import { Product } from "@prisma/client"
import { HiDocument } from "react-icons/hi"
import { ProductItem, IVariation } from '../../client_api/product';

interface Prop {
  product: Product
  variation?: IVariation
  onClick?: () => unknown
}

export default function ProductSelectItem (prop: Prop) {
  const { product, variation, onClick } = prop
  const sku_id = variation?.sku.id
  const values = variation?.values

  return <HStack
    onClick={onClick}

    shadow="1sm"
    borderRadius="5"
    _hover={{
      bg: "gray.200",
    }}
    p="2"
    m="1">
      <HiDocument/>
      <VStack align="flex-start">
        
        <HStack>
          <Text fontSize="lg" fontWeight="400">
            { product.name }
          </Text>
          {
            values?.length &&
            values.map(item => {
              return <Tag key={item}>{item}</Tag>
            })
          }
          
        </HStack>

        <Text fontWeight="300">
          sku: { sku_id }
        </Text>
      </VStack>
  </HStack>

}