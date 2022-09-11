import { Box, Button, HStack } from "@chakra-ui/react"
import { AiOutlineDelete, AiOutlineArrowRight } from "react-icons/ai"
import { BsArrowRight } from "react-icons/bs"
import ReProductItem, { ReProductItemProp } from "./ReProductItem"
import ReSupplierItem from "./ReqSupplierItem"
import { useRecoilValue } from 'recoil';
import { createShipmentItemSelector } from '../../states/create-shipment'


interface MapProductItemProp extends ReProductItemProp {
  index: number
  addSupplier?: () => unknown
}




export default function MapProductItem(prop: MapProductItemProp){
  const item = useRecoilValue(createShipmentItemSelector(prop.index))
  const supplier = item?.supplier
  const { addSupplier } = prop

  return <Box>
    <HStack>
      <ReProductItem
        {...prop}
      />

      {
        !supplier &&
        <Button 
          onClick={addSupplier}
          rightIcon={<AiOutlineArrowRight />} size="sm" colorScheme='teal' variant='outline'>
        Add Supplier
        </Button>
      }

      {
        supplier &&

        <BsArrowRight />

      }

      { supplier &&

        <ReSupplierItem
          index={prop.index}
        />
      }    

    </HStack>
  </Box>
}