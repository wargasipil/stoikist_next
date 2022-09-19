import { Box, Button, ButtonGroup, Divider, Image, Grid, Heading, HStack, Text, Stack, VStack, Spacer, Flex, IconButton, Tag, RadioGroup, Radio, useDisclosure, NumberInput, CloseButton } from '@chakra-ui/react'
import { AiOutlineDelete } from 'react-icons/ai'
import Navbar from "../../src/components/Navbar"
import ProductSearchModal from '../../src/components/product/ProductSearchModal'
import StockInput from '../../src/components/shipment/StockInput'
import { useRecoilState } from 'recoil'
import { orderProductListState, useAddOrderProduct, useDeleteOrderProduct, orderProductItemSelector } from '../../src/states/CreateOrderState';
import { useMutation } from '@tanstack/react-query'
import { useAlert } from '../../src/components/AlertNotif'
import { useRouter } from 'next/router'
import { useState } from 'react';
import { OrderFrom, PaymentMethod, Promo } from '@prisma/client'
import { CustomerForm } from '../../src/components/order/CustomerForm'
import PromoSearchModal from '../../src/components/promo/PromoSearchModal'

// TODO: create order selesai

// TODO: promo code
// TODO: customer
// TODO: payment method
// TODO: summary

// TODO: autocomplete customer
// TODO: selecting promo
// TODO: print invoice


function OrderItemForm(prop: { index: number}) {
  const {index} = prop
  const [ orderItem, setOrderItem ] = useRecoilState(orderProductItemSelector(index))

  const deleteItem = useDeleteOrderProduct()

  const { item, count, vari } = orderItem

  return <HStack>
    <Image
      rounded="md"
      boxSize="70" 
      src={item.product_resource[0].resource.path}
      alt="product image" />
    
    <VStack
      alignItems="left"
      w="full"
    >
      <Text fontWeight="500">{ item.name }</Text>
      
      <Flex>
        <Text fontSize="14">Variasi: {
          vari.values.join(', ')
        }
        </Text>
        <Spacer />
        <Text fontSize="14">{ count }</Text>
        <Text fontSize="14">x Rp. { vari.price }</Text>
      </Flex>
      <Flex>
        <Text fontSize="14">sku</Text>
        <Text fontSize="14">: { vari.sku.id }</Text>
        <Spacer />
        <NumberInput
          value={count}
          onChange={count => {
            setOrderItem({
              ...orderItem,
              count: Number(count)
            })
          }}
        >
          <StockInput value={count} change={(c) =>{
            setOrderItem({
              ...orderItem,
              count: c
            })
          }}/>
        </NumberInput>
        
        <IconButton
          mx="2"
          icon={<AiOutlineDelete />}
          variant="ghost"
          colorScheme='red'
          size="sm"
          aria-label='delete'
          onClick={() => deleteItem(index)}
        />
        
      </Flex>
    </VStack>

  </HStack>
}


export default function OrderCreate(){
  const {isOpen, onClose, onOpen } = useDisclosure()
  const [ promo, setPromo ] = useState<Promo>()
  const {isOpen: prIsOpen, onClose: prOnClose, onOpen: prOnOpen } = useDisclosure()
  const [items, setItems] = useRecoilState(orderProductListState)
  const [ payment, setPayment ] = useState<PaymentMethod>('CASH')
  const [ orderfrom, setOrderfrom ] = useState<OrderFrom>('OFFLINE')

  const addItems = useAddOrderProduct()
  const setAlert = useAlert()
  const router = useRouter()

  const createOrderMutation = useMutation(['createOrderMutation'], async() => {
      setItems([])
    },
    {
      onSuccess: () => {
        setAlert('success', 'Success', 'Create Order Success')
      },
      onError: () => {
        setAlert('error', 'Gagal', 'Create Order Gagal')
      }
    }
  )

  return <Box>
    <Navbar />
    <Box pt="55">
      <Heading ml="6" my="6">
        Create Order
      </Heading>

      <Grid templateColumns="repeat(2, 1fr)">
        
        <Box p="6">
          <Stack spacing="3">
            <Flex>
              <Text fontWeight="700">Product</Text>
              <Spacer />
              <Button size="sm" colorScheme='teal' variant="outline"
                onClick={onOpen}
              >add product</Button>
            </Flex>
            
            <Divider/>
            {
              items.map((item, index) => {
                return <OrderItemForm key={index} {...item} index={index} />
              })

            }
          </Stack>      
        </Box>
        <Box
          p="6"
        > 
          <CustomerForm />
        </Box>
        
        <Box p="6">
          <Stack spacing="3">
            <Flex>
              <Text fontWeight="700">Promo Code</Text>
              <Spacer />
              <Button variant="outline" size="sm" colorScheme='teal' onClick={prOnOpen}>add promo</Button>
            </Flex>
            <Divider/>
            <Flex>
              { promo &&
                <>
                  <Tag colorScheme='purple'>{ promo.code }</Tag> <CloseButton size="sm" onClick={() => setPromo(undefined)}/>
                </>
                
              }
              
            </Flex>

            <Flex>
              <Text fontWeight="700">Order From</Text>
              <Spacer />
            </Flex>
            <Divider/>
            <Flex>
              <RadioGroup value={orderfrom} onChange={(e) => setOrderfrom(e as OrderFrom)}>
                <HStack>
                  <Radio value='OFFLINE'>Offline</Radio>
                  <Radio value='ONLINE'>Online</Radio>
                </HStack>
              </RadioGroup>
            </Flex>

            <Flex>
              <Text fontWeight="700">Payment Method</Text>
              <Spacer />
            </Flex>
            <Divider/>
            <Flex>
              <RadioGroup value={payment} onChange={(e) => setPayment(e as PaymentMethod)}>
                <HStack>
                  <Radio value='CASH'>Cash</Radio>
                  <Radio value='CREDIT'>Credit</Radio>
                </HStack>
              </RadioGroup>
            </Flex>
            


          </Stack>
        </Box>

        <Box p="6">
          <Box>
            <Stack
              rounded="lg"
              spacing="3"
            >
              <Text fontWeight="700">Summary</Text>
              <Divider/>
              <Grid templateColumns="repeat(2, 1fr)">
                
                <Text>Jumlah</Text>
                <Text>: 10</Text>
                
                <Text>Sub Total</Text>
                <Text>: Rp. 100.000</Text>
                <Text>Promo</Text>
                <Text>: - Rp. 190.000</Text>
                <Text>Total</Text>
                <Text fontWeight="600">: Rp. 190.000</Text>
              
              </Grid>
            </Stack>
          </Box>
          <ButtonGroup my="10" size="sm">
            <Button colorScheme='red' variant="outline"
              onClick={() => router.push('/order')}
            >back</Button>
            <Button colorScheme='blue' variant="outline"
              onClick={() => createOrderMutation.mutate()}
            >
              create order
            </Button>
            
          </ButtonGroup>
        </Box>
      </Grid>

    </Box>
    <ProductSearchModal
      isOpen={isOpen}
      onClose={onClose}
      onOpen={onOpen}
      onSelect={addItems}
    />
    <PromoSearchModal
      onOpen={prOnOpen}
      isOpen={prIsOpen}
      onClose={prOnClose}
      onSelect={setPromo}
    />
  </Box>
}
