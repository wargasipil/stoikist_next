import { Box, Button, Flex, HStack, IconButton, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Tag, Text, useDisclosure, useNumberInput, VStack } from '@chakra-ui/react'
import Navbar from "../src/components/Navbar"
import ProductSearchModal from '../src/components/product/ProductSearchModal'
import MapProductItem from '../src/components/shipment/MapProductItem'
import ReProductItem from '../src/components/shipment/ReProductItem'
import ReSupplierItem from '../src/components/shipment/ReqSupplierItem'


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