import { Text, HStack, Box, Input, VStack, FormControl, FormLabel, InputGroup, FormErrorMessage, Flex, Stack, Select, NumberInput, NumberInputField, Textarea, Button } from "@chakra-ui/react"
import { DiscountType } from "@prisma/client"
import axios from "axios"
import { useState } from "react"
import { CreatePromo } from "../../repos/PromoRepo"
import DatePicker from "../DatePicker"
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useAlert } from '../AlertNotif';

// code            String          @unique
// desc            String?
// limit           Int?
// used            Int             @default(0)
// type            DiscountType
// value           Int
// start           DateTime?
// end             DateTime?

export async function createPromo(data: CreatePromo){
  await axios.post('/api/promo', data)
}

export function PromoForm(){
  const [code, setCode ] = useState<string>('')
  const [desc, setDesc ] = useState<string>('')
  const [limit, setLimit ] = useState<number>()
  const [ discType, setDiscType ] = useState<DiscountType>('FIXED')
  const [ value, setValue ] = useState<number>(0)
  const [ startDate, setStartDate ] = useState<Date>(new Date(Date.now() - (60 * 60 * 24 * 7 * 1000)))
  const [ endDate, setEndDate ] = useState<Date>(new Date(Date.now()))
  const setAlert = useAlert()
  const client = useQueryClient()


  const createMutation = useMutation(['createPromo'], async () => {
    return await createPromo({
      code,
      name: '',
      type: discType,
      value,
      limit,
      desc,
      end: endDate.getTime(),
      start: startDate.getTime()
    })
  }, {
    onSuccess: () => {
      setAlert('success', 'Succes', 'create promo berhasil')
      client.invalidateQueries(['promoList'])
      setCode('')
      setDesc('')
      setLimit(undefined)
      setValue(0)

    },
    onError: () => {
      setAlert('error', 'Error', 'create promo gagal')
    }
  })

  return <Box p="10">
  <HStack spacing="4">
    <VStack w="full">

      <FormControl isRequired isInvalid={code.length === 0}>
        <FormLabel>Promo Code: </FormLabel>
        <InputGroup size="sm">
          <Input
            value={code}
            onChange={(e) => setCode(e.target.value.toUpperCase())}
          />
        </InputGroup>
        <FormErrorMessage>
          {/* TODO: ada api check unique promo */}
          Promo Code Harus Diisi
        </FormErrorMessage>
      </FormControl>

      <FormControl mx="5" isInvalid={startDate >= endDate}>
        <FormLabel>Valid Date :</FormLabel>
        <Flex>
          <DatePicker
            onChange={setStartDate}
            selectedDate={startDate}
          />
          <Text mx="2"> to </Text>
          <DatePicker
            onChange={setEndDate}
            selectedDate={endDate}
          />
        </Flex>
        <FormErrorMessage>
          end date harus lebih besar dari start date
        </FormErrorMessage>
      </FormControl>

      
    </VStack>

    <VStack w="full">
      <Stack direction="row" w="full">
        <FormControl isRequired isInvalid={value === 0}>
          <FormLabel>Diskon: </FormLabel>
          <InputGroup size="sm">
            <Select
              value={discType}
              onChange={(e) => setDiscType(e.target.value as DiscountType)}
              size="sm">
              <option value='PERCENT'>Percent</option>
              <option value='FIXED'>Rupiah</option>
            </Select>
            <NumberInput
              value={value}
              onChange={(e) => setValue(Number(e))}
              w="full" size="sm">
              <NumberInputField></NumberInputField>
            </NumberInput>
            
          </InputGroup>
          <FormErrorMessage>
            Diskon Kosong
          </FormErrorMessage>
        </FormControl>

        <FormControl>
          <FormLabel>Limit Promo: </FormLabel>
          <NumberInput
            value={limit}
            onChange={e => setLimit(e === '' ? undefined: Number(e))}
            size="sm">
            <NumberInputField />
          </NumberInput>
        </FormControl>

      </Stack>
      <FormControl>
        <FormLabel>Desc :</FormLabel>
        <Textarea size="sm" value={desc} onChange={e => setDesc(e.target.value)}></Textarea>
      </FormControl>
    </VStack>
      
    {/* TODO: support use limit atau tidak */}
  </HStack>

  <Button onClick={() => createMutation.mutate()} size="sm" colorScheme='teal' isLoading={createMutation.isLoading}>Create Promo</Button>
</Box>
}