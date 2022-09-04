import { Box, Button, Flex, HStack, IconButton, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Tag, Text, useDisclosure, useNumberInput, VStack } from '@chakra-ui/react'
import Navbar from "../src/components/Navbar"
import { HiDocument } from 'react-icons/hi'
import { AiOutlineArrowRight, AiOutlineDelete, AiOutlineShoppingCart } from 'react-icons/ai'
import { MdOutlineAddCircleOutline } from 'react-icons/md'
import { BsArrowRight } from 'react-icons/bs'
import ProductSearchModal from '../src/components/product/ProductSearchModal'

export function ReProductItem(){
  return <HStack
    p="1"
    m="2"
    boxShadow="1sm">
      <HiDocument/>
      <VStack align="flex-start">
        
        <HStack>
          <Text fontSize="lg">
            name gamis natural
          </Text>
          <Tag>merah</Tag>
          <Tag>xl</Tag>
        </HStack>

        <Text>
          sku: asdn79asd
        </Text>


      </VStack>

    <IconButton
      size="sm"
      variant='ghost'
      colorScheme='red'
      aria-label='remove'
      icon={<AiOutlineDelete />}
    />

  </HStack>
}




function StockInput() {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 9999999,
      precision: 0,
    })

  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()

  return (
    <HStack>
      <Button {...dec} size="sm">-</Button>
      <Input {...input} size="sm" />
      <Button {...inc} size="sm">+</Button>
    </HStack>
  )
}


export function ReSupplierItem(){
  return <HStack>
      <AiOutlineShoppingCart />
      <HStack>
        <Text fontSize="lg">
          Name Gamis Natural Suplier
        </Text>
        <Tag>bukalapak</Tag>
      </HStack>
      
      <StockInput />

      <IconButton
        size="sm"
        variant='ghost'
        colorScheme='red'
        aria-label='remove'
        icon={<AiOutlineDelete />}
      />

    </HStack>
}

interface MapProductItemProp {
  supplier?: boolean
}


function MapProductItem(prop: MapProductItemProp){

  const { supplier } = prop

  return <Box>
    <HStack>
      <ReProductItem />

      {
        !supplier &&
        <Button rightIcon={<AiOutlineArrowRight />} size="sm" colorScheme='teal' variant='outline'>
          Add Supplier
        </Button>
      }

      {
        supplier &&

        <BsArrowRight />
  
      }

      { supplier &&
      
        <ReSupplierItem />
      }    
      
    </HStack>
  </Box>
}







export default function Test() {
  
  const {isOpen, onClose, onOpen } = useDisclosure()

  return <Box>
    <Navbar></Navbar>
    <Box pt="55">

      <Box>
        <Input placeholder="Search Product" size="sm" />
        {
          [1,2,3].map(item => {
            return <ReProductItem key={item} />
          })
        }

        {
          [1,2].map(item => {
            return <ReProductItem key={item} />
          })
        }

        

      </Box>
      begin
      <MapProductItem />
      <MapProductItem supplier />
      end
      <ReSupplierItem />
      
      <Button onClick={onOpen}>Add Product</Button>
      <ProductSearchModal
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onClose}
      />
    </Box>
  </Box>
}