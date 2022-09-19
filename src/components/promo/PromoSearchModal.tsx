import { Modal, Text, ModalOverlay, ModalContent, ModalHeader, ModalBody, Input, HStack, VStack, Tag } from "@chakra-ui/react"
import { Promo } from "@prisma/client"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useState } from "react"
import { HiDocument } from "react-icons/hi"
import useDebounce from "../../helpers/debounce"
import { getPromoString } from '../../helpers/formatter';

interface Prop {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  // eslint-disable-next-line no-unused-vars
  onSelect: (promo: Promo) => unknown
}


interface ItemProp {
  promo: Promo
  onClick?: () => unknown
}

function PromoItem (prop: ItemProp) {
  const { promo, onClick } = prop
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
            { promo.code }
          </Text>
          <Tag>
            { getPromoString(promo) }
          </Tag>
          
        </HStack>

        <Text fontWeight="300">
          { promo.desc }
        </Text>
      </VStack>
  </HStack>
}


export default function PromoSearchModal(prop: Prop){
  const [ name, setName ] = useState<string>('')

  const debounceName = useDebounce<string>(name, 500)

  const { data } = useQuery(['promoSearch', {debounceName}], async (): Promise<Promo[]> => {
    const res = await axios.get('/api/promo', {
      params: {
        name: debounceName
      }
    })

    return res.data
  })

  const { isOpen, onClose, onSelect } = prop

  return <Modal isOpen={isOpen} onClose={onClose} size="xl" scrollBehavior="inside">
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>
        <Input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="search promo"
          />
      </ModalHeader>
      
      <ModalBody>
        
        {
          data &&
          
          data.map((promo, index) => {
            return <PromoItem key={index} promo={promo} onClick={() => {
              onSelect(promo)
              onClose()
            }}/> 
          })

        }

        
      </ModalBody>
    </ModalContent>
  </Modal>
}