import { VStack, Heading, HStack, FormControl, FormLabel, Input, FormErrorMessage, Button, Link, Spacer, Flex, Box } from "@chakra-ui/react"
import { useRouter } from "next/router";
import { useState, useCallback } from 'react';
import { AiOutlinePlus, AiTwotoneFilter } from "react-icons/ai"
import { SupTypeSelect } from '../SupplierType'


export default function SupplierFilterList(){
  const router = useRouter()
  
  const { name: defaultName, type_id } = router.query
  
  const [ name, setName ] = useState<string>(defaultName as string)
  const [ tipe, setType ] = useState<number>(Number(type_id))

  const clickFilter = useCallback(() => {
    router.push({
      query: {
        name,
        type_id: tipe
      }
    })
  }, [router, tipe, name])

  return <Box
  shadow="md"
  borderWidth="1px"
  alignItems="start"
  padding={4}
  my={2}
  mx={2}
>
  <Heading size="sm">Filter</Heading>
  <Flex>
    <HStack>
      <FormControl size="sm">
        <FormLabel size="sm">Name :</FormLabel>
        <Input
          value={name}
          onChange={e => setName(e.target.value)}
          size="sm"
          placeholder="search name"
        />
        <FormErrorMessage>
        </FormErrorMessage>
      </FormControl>
      <FormControl size="sm">
        <FormLabel size="sm">Type :</FormLabel>
        <SupTypeSelect
          value={tipe}
          onChange={e => setType(Number(e.target.value))}
          withAll size="sm" />
        <FormErrorMessage>
        </FormErrorMessage>
      </FormControl>
    </HStack>
    <Button 
      onClick={clickFilter}
      leftIcon={<AiTwotoneFilter />} colorScheme='blue' variant='solid' size="sm" ml="4">
        Filter
    </Button>

    
    <Spacer />
    <Button
      onClick={() => router.push('/supplier/create')}
      leftIcon={<AiOutlinePlus />} colorScheme='green' variant='solid' size="sm" ml="4">
        Create Supplier
    </Button>
    
  </Flex>
</Box>
}