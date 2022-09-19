import {Box,  Heading, FormControl, FormLabel, InputGroup, Input, Flex, Button, FormErrorMessage, Spacer, InputRightAddon } from "@chakra-ui/react"
import CategoryGroup from "../../src/components/CategoryGroup"
import Navbar from "../../src/components/Navbar"
import VariationFormCreate, { optionCreateState, variationState } from "../../src/components/product/VariationFormCreate"
import { useState, useCallback } from 'react'
import { useRecoilValue } from 'recoil'
import { AiFillFileAdd } from "react-icons/ai"
import { Category, Product } from "@prisma/client"
import axios from "axios"
import { useRouter } from "next/router"
import { useAlert } from "../../src/components/AlertNotif"
import ImageUploader from "../../src/components/product/ImageUploader"
import { useImageUploader } from '../../src/components/product/ImageUploader';
import { ProductCreatePayload } from "../../src/repos/ProductRepo"

async function createProduct(payload: ProductCreatePayload): Promise<Product> {
  const res = await axios.post('/api/product', payload)

  return res.data
}

// FIXME: product rackname perlu dibenahi 
// FIXME: data product
// FIXME: default variation belum bisa
// FIXME: form input g enak
// FIXME: error upload image keliru

// FIXME: Category kosong

export default function ProductCreate(){
  const options = useRecoilValue(optionCreateState)
  const variations = useRecoilValue(variationState)
  
  const [ name, setName ] = useState<string>('')
  const [ hscode, setHscode ] = useState<string>('')
  const [ weight, setWeight ] = useState<number>(0)
  const [ price, setPrice ] = useState<number>(0)
  const [ stock, setStock ] = useState<number>(0)
  const [ rackName, setRackName ] = useState<string>('')
  const [ category, setCategory ] = useState<Category[]>([])
  const [ marketStatus, setMarketStatus ] = useState<string>('')
  const [ sku_id, setSku ] = useState<string>('')

  const notHaveVariation = options.length == 0

  const router = useRouter()
  const setAlert = useAlert()
  const { uploadMutate } = useImageUploader()


  const addProduct = useCallback(async () => {
    const image_ids = await uploadMutate.mutateAsync()

    const categories = category.map(categ => categ.id)
    try {
      await createProduct({
        image_ids,
        categories,
        hscode,
        marketing_status: marketStatus,
        name,
        options,
        price,
        rack_name: rackName,
        stock,
        variations,
        weight,
        sku_id
      })
  
      await router.push('/product')
      setAlert('success', 'Success', 'Create Prduct Sukses..')
    } catch (e) {
      setAlert('error', 'Error', 'Create Product Gagal..')
    }
    

  }, [router, sku_id, category, hscode, marketStatus, name, options, price, rackName, weight, variations, stock, uploadMutate, setAlert])


  return <Box>
    <Navbar />
    
    <Box pt="55">
      <Heading ml="6" mt="3">Create Product</Heading>
      
    <Flex
      minWidth='max-content'
      mt="6"
    >
      <Box width="40%" ml="6">
        <FormControl ml="2" my="3" isRequired isInvalid={name.length ? false: true}>
          <FormLabel>
            Name :
          </FormLabel>
          <InputGroup size="sm">
            <Input
              value={name}
              onChange={e => setName(e.target.value)}
              size="sm"
              placeholder="name"
            />
          </InputGroup>
          <FormErrorMessage>
            Name Harus Diisi
          </FormErrorMessage>
        </FormControl>

        
        
        <FormControl ml="2" my="3">
          <FormLabel>
            Marketing Status :
          </FormLabel>
          <InputGroup size="sm">
            <Input
              value={marketStatus}
              onChange={(e) => setMarketStatus(e.target.value)}
              size="sm"
              placeholder="marketing status"
            />
          </InputGroup>
          <FormErrorMessage>
          </FormErrorMessage>
        </FormControl>


        <FormControl ml="2" my="3">
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
        
        <FormControl ml="2" my="3" isRequired isInvalid={weight > 0 ? false: true}>
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
            <InputRightAddon>Gram</InputRightAddon>
          </InputGroup>
          <FormErrorMessage>
            Berat Harus Diisi
          </FormErrorMessage>
        </FormControl>

        { notHaveVariation &&
          <FormControl ml="2" my="3" isRequired isInvalid={price > 0 ? false: true}>
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
              Harga Harus Diisi.
            </FormErrorMessage>
          </FormControl>
        }

        { notHaveVariation &&
          <FormControl ml="2" my="3" isRequired isInvalid={stock > 0 ? false: true}>
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
              Stock Harus Diisi
            </FormErrorMessage>
          </FormControl>
        }

        { notHaveVariation &&
          <FormControl ml="2" my="3" isRequired isInvalid={sku_id.length > 0 ? false: true}>
            <FormLabel>
              Sku :
            </FormLabel>
            <InputGroup size="sm">
              <Input
                value={sku_id}
                onChange={e => setSku(e.target.value)}
                size="sm"
                placeholder="sku id"
              />
            </InputGroup>
            <FormErrorMessage>
              Sku Harus Diisi
            </FormErrorMessage>
          </FormControl>
        }


        
      </Box>
      <Box width="40%" ml="6">
      
        <ImageUploader />

        <FormControl ml="2" my="3">
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
            valueCat={category}
            categoryChange={setCategory}
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
        onClick={addProduct}
        m="10"
        leftIcon={<AiFillFileAdd />} colorScheme='green'>Create</Button>

      <Spacer />
    </Flex>
    </Box>
    
  </Box>
}