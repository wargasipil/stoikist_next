import { HStack, AlertDescription, Input, Button, InputGroup, IconButton, Stack, VStack, ChakraProvider, chakra, Box, FormControl, FormLabel, InputLeftAddon, GridItem, Heading, Flex, Spacer } from '@chakra-ui/react';
import Link from 'next/link';
import { AiOutlinePlus } from 'react-icons/ai';
import CategoryGroup from '../CategoryGroup';

export default function ProductFilter () {
  return <Box p="5">
    <Flex>
      <Heading size="sm" mb="4">
        Filter
      </Heading>
      <Spacer/>
      <Link href='/product/create'>
        <Button leftIcon={<AiOutlinePlus />} colorScheme='green' variant='solid' size="sm">
          Create
        </Button>
      </Link>
    </Flex>
  

  <Flex>
    <FormControl>
      <FormLabel
        fontSize="sm"
        fontWeight="md"
        color="gray.700"
        _dark={{
        color: "gray.50",
        }}
      >
        Search :
      </FormLabel>
      <InputGroup size="sm">
        <Input
          type="tel"
          placeholder="Search Product"
          focusBorderColor="brand.400"
          rounded="md"
        />
      </InputGroup>
    </FormControl>

    <FormControl ml="2">
      <FormLabel
        fontSize="sm"
        fontWeight="md"
        color="gray.700"
        _dark={{
        color: "gray.50",
        }}
      >
        Category :
      </FormLabel>

      <CategoryGroup 
        valueCat={[]}
        categoryChange={e => console.log(e)}
        
      />
    </FormControl>
  </Flex>

  <Flex mt="4">
    <FormControl>
      <FormLabel
        fontSize="sm"
        fontWeight="md"
        color="gray.700"
        _dark={{
        color: "gray.50",
        }}
      >
        Min Price :
      </FormLabel>
      <InputGroup size="sm">
        <Input
          type="tel"
          placeholder="min price"
          focusBorderColor="brand.400"
          rounded="md"
        />
      </InputGroup>
    </FormControl>

    <FormControl ml="2">
      <FormLabel
        fontSize="sm"
        fontWeight="md"
        color="gray.700"
        _dark={{
        color: "gray.50",
        }}
      >
        Max Price :
      </FormLabel>
      <InputGroup size="sm">
        <Input
          type="tel"
          placeholder="max price"
          focusBorderColor="brand.400"
          rounded="md"
        />
      </InputGroup>
    </FormControl>

    
    <FormControl ml="2">
      <FormLabel
        fontSize="sm"
        fontWeight="md"
        color="gray.700"
        _dark={{
        color: "gray.50",
        }}
      >
        Min Stock :
      </FormLabel>
      <InputGroup size="sm">
        <Input
          type="tel"
          placeholder="min stock"
          focusBorderColor="brand.400"
          rounded="md"
        />
      </InputGroup>
    </FormControl>

    <FormControl ml="2">
      <FormLabel
        fontSize="sm"
        fontWeight="md"
        color="gray.700"
        _dark={{
        color: "gray.50",
        }}
      >
        Max Stock :
      </FormLabel>
      <InputGroup size="sm">
        <Input
          type="tel"
          placeholder="max stock"
          focusBorderColor="brand.400"
          rounded="md"
        />
      </InputGroup>
    </FormControl>



  </Flex>
  
  <Button size="sm" mt="5">Filter</Button>
    
  </Box>
}