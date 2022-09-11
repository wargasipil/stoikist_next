import { Input, Modal, ModalBody, ModalContent, ModalOverlay, ModalHeader } from '@chakra-ui/react'
import { useQuery } from "@tanstack/react-query"
import { useState } from 'react';
import { getProductList, ProductItem, IVariation } from '../../client_api/product'
import useDebounce from '../../helpers/debounce';
import ProductSelectItem from "./ProductSelectItem"

interface Prop {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  // eslint-disable-next-line no-unused-vars
  onSelect?: (data: ProductItem, vari: IVariation) => unknown
}

export default function ProductSearchModal(prop: Prop) {
  const [ name, setName ] = useState<string>('')

  const debounceName = useDebounce<string>(name, 500)

  const { data } = useQuery(['product_search', {debounceName}], () => getProductList({
    name: debounceName,
    limit: 10,
    page: 1
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
          
          data.items.flatMap(product => product.variation.map(vari => {
            return <ProductSelectItem 
              onClick={() => {
                if(onSelect){
                  onSelect(product, vari)
                }
                onClose()

              }}
              key={vari.id} product={product} variation={vari} />
          }))

        }

        
      </ModalBody>
    </ModalContent>
  </Modal>
  )
}