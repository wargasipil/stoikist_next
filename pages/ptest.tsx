import { Box, Button, Flex, HStack, IconButton, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Tag, Text, useDisclosure, useNumberInput, VStack } from '@chakra-ui/react'
import Navbar from "../components/Navbar"
import { HiDocument } from 'react-icons/hi'
import { AiOutlineArrowRight, AiOutlineDelete, AiOutlineShoppingCart } from 'react-icons/ai'
import { MdOutlineAddCircleOutline } from 'react-icons/md'
import { BsArrowRight } from 'react-icons/bs'

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


function ProductSelectItem(){

  return <HStack
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
          <Text fontSize="lg" fontWeight="450">
            name gamis natural asdasa  asdasdas asdasdasd asdasd
          </Text>
          <Tag>merah</Tag>
          <Tag>xl</Tag>
        </HStack>

        <Text fontWeight="300">
          sku: asdn79asd
        </Text>
      </VStack>
  </HStack>
}



function BasicUsage() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen}>Add Product</Button>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          
          <ModalBody>
            <Input />
            <ProductSelectItem />
            <ProductSelectItem />
            <ProductSelectItem />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}






export default function Test() {
  

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

      <BasicUsage />
    </Box>
  </Box>
}