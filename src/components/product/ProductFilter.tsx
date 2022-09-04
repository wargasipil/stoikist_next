import { Input, Button, InputGroup, Box, FormControl, FormLabel, Heading, Flex, Spacer } from '@chakra-ui/react'
import { Category } from '@prisma/client'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { ProductListQuery } from '../../../pages/api/product'
import CategoryGroup from '../CategoryGroup'

export default function ProductFilter () {
  const router = useRouter()

  const [name, setName] = useState<string>('')
  const [minPrice, setMinPrice] = useState<number>(0)
  const [maxPrice, setMaxPrice] = useState<number>(0)
  const [category, setCategory] = useState<Category[]>([])
  const [minStock, setMinStock] = useState<number>(0)
  const [maxStock, setMaxStock] = useState<number>(0)

  const filterProduct = useCallback(() => {
    const query: Omit<ProductListQuery, 'page' | 'limit'> = {
      name,
    }

    if(category.length > 0){
      query.category = category[category.length -1].id
    }
    
    if(minPrice > 0){
      query.min_price = minPrice
    }
    if(maxPrice > 0){
      query.max_price = maxPrice
    }

    if(minStock > 0){
      query.min_stock = minStock
    }
    if(maxStock > 0){
      query.max_stock = maxStock
    }

    router.push({
      query,
    })

  }, [router, name, minPrice, maxPrice, minStock, maxStock, category])

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
          value={name}
          onChange={e => setName(e.target.value)}
          type="text"
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
        valueCat={category}
        categoryChange={setCategory}
        
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
          value={minPrice}
          onChange={e => setMinPrice(Number(e.target.value))}
          type="number"
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
          value={maxPrice}
          onChange={e => setMaxPrice(Number(e.target.value))}
          type="number"
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
          value={minStock}
          onChange={e => setMinStock(Number(e.target.value))}
          type="number"
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
          value={maxStock}
          onChange={e => setMaxStock(Number(e.target.value))}
          type="number"
          placeholder="max stock"
          focusBorderColor="brand.400"
          rounded="md"
        />
      </InputGroup>
    </FormControl>



  </Flex>
  
  <Button
    onClick={filterProduct}
    size="sm" mt="5">Filter</Button>
    
  </Box>
}