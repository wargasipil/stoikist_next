import { Stack, Divider, FormControl, Input, FormLabel, InputGroup, Text, Textarea } from "@chakra-ui/react"
import { useRecoilState } from 'recoil'
import { CustomerForm, customerOrderState } from "../../states/CreateOrderState"
import { useCallback } from 'react';

// TODO: autocomplete

export function CustomerForm() {
  const [ customer, setCustomer ] = useRecoilState(customerOrderState)

  const setPartialCustomer = useCallback((data: Partial<CustomerForm>) => {
    setCustomer(olddata => {
      return {
        ...olddata,
        ...data,
      }
    })
  }, [setCustomer])

  return <Stack spacing="3">
    <Text fontWeight="700">Customer</Text>
    <Divider/>

    <FormControl>
      <FormLabel>Nama :</FormLabel>
      <InputGroup size="sm">
        <Input 
          value={customer.name}
          onChange={e => setPartialCustomer({name: e.target.value})}
          placeholder='nama customer' />
      </InputGroup>
    </FormControl>

    <FormControl>
      <FormLabel>phone :</FormLabel>
      <InputGroup size="sm">
        <Input 
          value={customer.phone}
          onChange={e => setPartialCustomer({phone: e.target.value})}
          placeholder='nomor telephone' />
      </InputGroup>
    </FormControl>

    <FormControl>
      <FormLabel>Full Address  :</FormLabel>
      <InputGroup size="sm">
        <Textarea placeholder='alamat lengkap'
          value={customer.address}
          onChange={e => setPartialCustomer({address: e.target.value})}
        ></Textarea>
      </InputGroup>
    </FormControl>
  </Stack>
  
}