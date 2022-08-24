import {Text, Box, SimpleGrid, GridItem, Heading, chakra, Stack, FormControl, FormLabel, InputGroup, InputLeftAddon, Input, Textarea, FormHelperText, Flex, Avatar, Icon, Button, VisuallyHidden, Divider, Select, Checkbox, RadioGroup, Radio, FormErrorMessage, Grid, Spacer } from "@chakra-ui/react"
import CategoryGroup from "../../components/CategoryGroup"
import Navbar from "../../components/Navbar"
import VariationFormCreate, { optionCreateState } from "../../components/product/VariationFormCreate"
import { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { AiFillFileAdd } from "react-icons/ai"


export default function ProductCreate(){
  const options = useRecoilValue(optionCreateState)

  const [ name, setName ] = useState<string>('')
  const [ hscode, setHscode ] = useState<string>('')
  const [ weight, setWeight ] = useState<number>(0)
  const [ price, setPrice ] = useState<number>(0)
  const [ stock, setStock ] = useState<number>(0)
  const [ rackName, setRackName ] = useState<string>('')

  const notHaveVariation = options.length == 0

  return <Box>
    <Navbar />
    <Heading ml="6" mt="3">Create Product</Heading>
    <Flex
      minWidth='max-content'
      mt="6"
    >
      <Box width="40%" ml="6">
        <FormControl ml="2">
          <FormLabel>
            Name :
          </FormLabel>
          <InputGroup size="sm">
            <Input
              value={name}
              onChange={e => setName(e.target.value)}
              size="sm"
              placeholder="rack name"
            />
          </InputGroup>
          <FormErrorMessage>
          </FormErrorMessage>
        </FormControl>

        
        
        <FormControl ml="2">
          <FormLabel>
            Marketing Status :
          </FormLabel>
          <InputGroup size="sm">
            <Input
              size="sm"
              placeholder="marketing status"
            />
          </InputGroup>
          <FormErrorMessage>
          </FormErrorMessage>
        </FormControl>
        <FormControl ml="2">
          <FormLabel>
            Hscode :
          </FormLabel>
          <InputGroup size="sm">
            <Input
              value={hscode}
              onChange={e => setHscode(e.target.value)}
              size="sm"
              placeholder="hscode"
            />
          </InputGroup>
          <FormErrorMessage>
          </FormErrorMessage>
        </FormControl>
        <FormControl ml="2">
          <FormLabel>
            Weight :
          </FormLabel>
          <InputGroup size="sm">
            <Input
              value={weight}
              onChange={e => setWeight(Number(e.target.value))}
              type="number"
              size="sm"
              placeholder="weight"
            />
          </InputGroup>
          <FormErrorMessage>
          </FormErrorMessage>
        </FormControl>

        { notHaveVariation &&
          <FormControl ml="2">
            <FormLabel>
              Price :
            </FormLabel>
            <InputGroup size="sm">
              <Input
                value={price}
                onChange={e => setPrice(Number(e.target.value))}
                type="number"
                size="sm"
                placeholder="price"
              />
            </InputGroup>
            <FormErrorMessage>
            </FormErrorMessage>
          </FormControl>
        }

        { notHaveVariation &&
          <FormControl ml="2">
            <FormLabel>
              Stock :
            </FormLabel>
            <InputGroup size="sm">
              <Input
                value={stock}
                onChange={e => setStock(Number(e.target.value))}
                type="number"
                size="sm"
                placeholder="stock"
              />
            </InputGroup>
            <FormErrorMessage>
            </FormErrorMessage>
          </FormControl>
        }


        
      </Box>
      <Box width="40%" ml="6">
        <FormControl ml="2">
          <FormLabel>
            Rack Name :
          </FormLabel>
          <InputGroup size="sm">
            <Input
              value={rackName}
              onChange={e => setRackName(e.target.value)}
              size="sm"
              placeholder="rack name"
            />
          </InputGroup>
          <FormErrorMessage>
          </FormErrorMessage>
        </FormControl>

        <FormControl ml="2">
          <FormLabel>Category :</FormLabel>
          <CategoryGroup 
            valueCat={[]}
            categoryChange={cat => console.log(cat)}
          />
        </FormControl>
        

        <FormControl ml="2">
          <FormLabel>Variasi :</FormLabel>
          <VariationFormCreate />
        </FormControl>

        
      
      </Box>
    </Flex>
    <Flex>
      <Button
        m="10"
        leftIcon={<AiFillFileAdd />} colorScheme='green'>Create</Button>

      <Spacer />
    </Flex>
  </Box>
}