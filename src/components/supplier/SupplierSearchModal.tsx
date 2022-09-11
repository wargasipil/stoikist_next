import { Input, Modal, ModalBody, ModalContent, ModalOverlay, ModalHeader, HStack, Tag, VStack, Text } from '@chakra-ui/react'
import { useQuery } from "@tanstack/react-query"
import { useState } from 'react'
import useDebounce from '../../helpers/debounce'
import { getSupplierList, SupplierListItem } from '../../client_api/supplier'
import { HiDocument } from 'react-icons/hi'

interface SupplierItemProp {
  supplier: SupplierListItem
  onClick?: (data: SupplierListItem) => unknown
}



function SupplierItem(prop: SupplierItemProp){
  const { onClick, supplier } = prop
  return <HStack
  onClick={() => {
    if(onClick){
      onClick(supplier)
    }
  }}

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
          { supplier.name }
        </Text>
        <Tag>{supplier.type.name }</Tag>
      </HStack>
    </VStack>
</HStack>
}


interface Prop {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  onSelect?: (data: SupplierListItem) => unknown
}

export default function SupplierSearchModal(prop: Prop) {
  const [ name, setName ] = useState<string>('')

  const debounceName = useDebounce<string>(name, 500)

  const { data } = useQuery(['supplier_search', {debounceName}], () => getSupplierList({
    limit: 20,
    page: 1,
    name: debounceName
  }))


  const { isOpen, onClose, onSelect } = prop

  return (
  <Modal isOpen={isOpen} onClose={onClose} size="xl" scrollBehavior="inside">
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>
        <Input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="search product"
          />
      </ModalHeader>
      
      <ModalBody>
        
        {
          data &&
          
          data.items.map(item => {
            return <SupplierItem
            supplier={item}
            onClick={data => {
              if(onSelect){
                onSelect(data)
              }
              
              onClose()
            }}  
            key={item.id}/>
          })

        }

        
      </ModalBody>
    </ModalContent>
  </Modal>
  )
}