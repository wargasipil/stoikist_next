import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Heading, Input, InputGroup, Progress, Spacer, useDisclosure } from "@chakra-ui/react"
import Navbar from "../../src/components/Navbar"
import ProductSearchModal from "../../src/components/product/ProductSearchModal"
import MapProductItem from "../../src/components/shipment/MapProductItem"
import { useState, useCallback } from 'react'
import { ProductItem, IVariation } from '../../src/client_api/product'
import SupplierSearchModal from "../../src/components/supplier/SupplierSearchModal"
import { SupplierListItem } from '../../src/client_api/supplier'
import { useRouter } from "next/router"
import { useAlert } from "../../src/components/AlertNotif"
import { postShipment } from "../../src/client_api/shipment"
import { StockItemPayload } from '../../src/repos/ShipmentRepo'
import { createShipmentItemSelector, createShipmentState } from '../../src/states/create-shipment'
import { useSetRecoilState, useRecoilState } from 'recoil'
import { useMutation } from "@tanstack/react-query"

export default function Shipment () {
  const router = useRouter()
  const {isOpen, onClose, onOpen } = useDisclosure()
  const {isOpen: sIsOpen, onClose: sOnClose, onOpen: sOnOpen } = useDisclosure()
  const [ index, setIndex ] = useState<number>(0)
  const setAlert = useAlert()

  const setItem = useSetRecoilState(createShipmentItemSelector(index))
  const [ items, setItems ] = useRecoilState(createShipmentState)

  const setSupplier = useCallback((data: SupplierListItem) => {
    setItem(item => {
      return {
        ...item,
        supplier: data
      }
    })
  }, [setItem])


  const openModalSupplier = useCallback((ind: number) => {
    sOnOpen()
    setIndex(ind)
  }, [sOnOpen, setIndex])

  const addItems = useCallback((item: ProductItem, vari: IVariation) => {
    setItems(values => {
      const sku_ids = values.map(value => value.vari.sku.id)
      if(sku_ids.includes(vari.sku.id)){
        return values
      }

      return [{
        item,
        vari,
        stock: 0
      }, ...values]
    })
  }, [setItems])

  const removeItems = useCallback((index: number) => {
    setItems(values => {
      return values.filter((v, ind) => index !== ind)
    })
  }, [setItems])

  const shipmentMutation = useMutation(() => {
    if(items.length == 0){
      setAlert("error", "Product kosong", "Tidak ada satupun Produk yang dipilih")
    }

    const dataItems: StockItemPayload[] = items.map((item): StockItemPayload => {

      return {
       count: item.stock,
       sku_id: item.vari.sku.id,
       supplier_id: item.supplier?.id || 0,
       variation_id: item.vari.id,

      } 
    })

    const cek = dataItems.map(item => item.supplier_id).includes(0)
    if (cek){
      setAlert('error', 'Tidak Lengkap', 'Supplier Item Tidak Lengkap')
    }

    const prom = postShipment({
      items: dataItems
    })
    
    prom.then(() =>{
      setItems([])
      router.push('/shipment')
      setAlert('success', 'Success', 'Create Shipment Baru')

    }).catch(() => {
      setAlert('error', 'Gagal Create', 'Gagal create Shipment Baru')
    })
    
    return prom
  })

  return <Box>
    <Navbar />
    <Box pt="55">
      {
        shipmentMutation.isLoading &&
        <Progress size='xs' isIndeterminate />
      }
      
      <Heading p="6" size="md">Create Shipment</Heading>
      <Box p="6">
        <Flex>
          <Button size="sm" colorScheme="teal" variant="outline" onClick={onOpen}>Add Product</Button>
          <Button ml="5" size="sm" colorScheme="teal" disabled={shipmentMutation.isLoading} onClick={() => shipmentMutation.mutate()}>create shipment</Button>
        </Flex>
        
        {
          items.map((data, ind) => {
            return <MapProductItem
              index={ind}
              key={ind}
              item={data.item}
              vari={data.vari}
              onDelete={() => removeItems(ind)}
              addSupplier={() => openModalSupplier(ind)}
              /> 
          })
        }

      </Box>

      <ProductSearchModal
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        onSelect={addItems}
      />
      <SupplierSearchModal
        isOpen={sIsOpen}
        onClose={sOnClose}
        onOpen={sOnOpen}
        onSelect={setSupplier}
      />

    </Box>
  </Box>

}