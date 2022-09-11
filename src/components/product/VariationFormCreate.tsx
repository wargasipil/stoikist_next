import { Box, Flex, FormControl, FormErrorMessage, IconButton, Input, InputGroup, InputRightAddon, Tag, TagLabel, InputLeftAddon, Button, InputRightElement, TagRightIcon } from '@chakra-ui/react'
import { useState, useCallback, useEffect } from 'react'
import { AiOutlineCheck, AiOutlineClose, AiTwotoneDelete } from 'react-icons/ai'
import { GrAddCircle } from 'react-icons/gr'
import { atom, useRecoilState, useRecoilValue } from 'recoil'
import { OptionCreatePayload, VariationCreatePayload } from '../../../pages/api/product'


function allPossibleCases(arr: string[][]): string[][] {
  if(arr.length == 0){
    return []
  }

  if (arr.length == 1) {
    return arr[0].map(item => [item])
  } else {
    const first: string[] = arr[0]
    const allCasesOfRest = allPossibleCases(arr.slice(1))
    return first.flatMap( key => {
      return allCasesOfRest.map(keys => [key, ...keys])
    })
  }

}


export function OptionForm (prop: {
  // eslint-disable-next-line no-unused-vars
  onChange: (payload: OptionCreatePayload) => unknown
  onDelete: () => unknown
  value: OptionCreatePayload
}) {
  const { onChange, value, onDelete } = prop

  const [ name, setName ] = useState<string>(value.name)
  const [ options, setOptions ] = useState<string[]>(value.options)
  const [ optname, setOptname ] = useState<string>('')
  
  

  const change = useCallback(() => {
    onChange({
      name,
      options,
    })
  }, [onChange, name, options])

  const deleteOpti = useCallback((name: string) => {
    const newoptions = options.filter(opti => opti != name)

    setOptions(newoptions)

    onChange({
      name,
      options: newoptions,
    })
  }, [setOptions, options, onChange])

  const addOption = useCallback(() => {
    if(!optname){
      return
    }
    if(options.includes(optname)){
      return
    }
    
    const newoptions = [...options, optname]
    
    setOptions(newoptions)
    setOptname('')
    onChange({
      name,
      options: newoptions,
    })
  }, [setOptname, setOptions, optname, onChange, name, options])

  return <Box>
    <FormControl size="sm" mt="2">
    <InputGroup size="sm">
      <Input
        value={name}
        onBlur={change}
        onChange={e => setName(e.target.value)}
        size="sm"
        placeholder="variation name"
      />
      
      <FormErrorMessage>
      </FormErrorMessage>

      <InputRightElement>
        <IconButton
          onClick={onDelete}
          colorScheme='red'
          size="sm"
          variant="solid"
          aria-label="delete option"
          icon={<AiTwotoneDelete />}/>
      </InputRightElement>
    </InputGroup>
    </FormControl>

    <Flex>
      <FormControl width="250" mt="2">
        <InputGroup size="sm">
          <Input
            size="sm"
            value={optname}
            onChange={e => setOptname(e.target.value)}
            placeholder="variation option"
          />
          <FormErrorMessage>
          </FormErrorMessage>
          <InputRightAddon>
            <IconButton
              onClick={addOption}
              size="sm"
              variant="ghost"
              aria-label="add option"
              icon={<GrAddCircle />}/>
          </InputRightAddon>
        </InputGroup>
      </FormControl>
      

      <Box mt="2">
        {
          options.map(item => {
            return <Tag key={item} ml="2">
              <TagLabel>
                { item }
              </TagLabel>
              <TagRightIcon 
                onClick={() => deleteOpti(item)}
                as={AiOutlineClose} />
            </Tag>
          })
        }
        
      </Box>

    </Flex>
  </Box>
}

export function VariationItem (prop: {
  value: VariationCreatePayload
  // eslint-disable-next-line no-unused-vars
  onChange: (value: VariationCreatePayload) => unknown
}) {

  const { value, onChange } = prop

  return <Flex mt="2">
    <FormControl>
      <InputGroup size="sm">
        <InputLeftAddon>
          Price :
        </InputLeftAddon>
        <Input
          type="number"
          value={value.price}
          onChange={ e => onChange({...value, price: Number(e.target.value)})}
          size="sm"
          placeholder="price"
        />
      </InputGroup>
      <FormErrorMessage>
      </FormErrorMessage>
    </FormControl>

    <FormControl ml="2">
      <InputGroup size="sm">
        <InputLeftAddon>
          Stock :
        </InputLeftAddon>
        <Input
          value={value.stock}
          onChange={ e => onChange({...value, stock: Number(e.target.value)})}
          size="sm"
          placeholder="Stock"
        />
      </InputGroup>
      <FormErrorMessage>
      </FormErrorMessage>
    </FormControl>

    <FormControl ml="2">
      <InputGroup size="sm">
        <InputLeftAddon>
          Sku Id :
        </InputLeftAddon>
        <Input
          value={value.sku_id}
          onChange={ e => onChange({...value, sku_id: e.target.value})}
          size="sm"
          placeholder="Sku id"
        />
      </InputGroup>
      <FormErrorMessage>
      </FormErrorMessage>
    </FormControl>

    <FormControl ml="2">
      { value.values.join(', ') }
    </FormControl>
  </Flex>
}

export const variationState = atom<VariationCreatePayload[]>({
  key: 'variationState',
  default: []
})

export const optionCreateState = atom<OptionCreatePayload[]>({
  key: 'optionCreateState',
  default: []
})

export function VariationForm(){
  const [ stock, setStock ] = useState<number>(0)
  const [ price, setPrice ] = useState<number>(0)
  const [ variations, setVariations ] = useRecoilState(variationState)
  const options = useRecoilValue(optionCreateState)

  const changeVariation = (index: number, item: VariationCreatePayload) => {
    setVariations(varis => varis.map((vari, ind) => {
      if(index === ind){
        return item
      }
      return vari
    }))
  }

  const terapkanSemua = useCallback(() => {
    setVariations(varis => {
      return varis.map(vari => {
        return { ...vari, price, stock}
      })
    })
  }, [setVariations, price, stock])

  useEffect(() => {
    const names = options.map(opti => opti.name)
    const allOptions: string[][] = options.map(opti => opti.options)
    const variKeys = allPossibleCases(allOptions)
    const varis: VariationCreatePayload[] = variKeys.map(keys => {
      return {
        is_default: false,
        names,
        price: 0,
        stock: 0,
        sku_id: '',
        values: keys
      }
    })
    
    setVariations(varis)
  }, [options, setVariations])

  

  return <Box mt="4">
    { options.length > 0 &&

    <Flex>
      <FormControl>
        <InputGroup size="sm">
          <InputLeftAddon>
            Price :
          </InputLeftAddon>
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

      <FormControl ml="2">
        <InputGroup size="sm">
          <InputLeftAddon>
            Stock :
          </InputLeftAddon>
          <Input
            value={stock}
            onChange={e => setStock(Number(e.target.value))}
            type="number"
            size="sm"
            placeholder="Stock"
          />
        </InputGroup>
        <FormErrorMessage>
        </FormErrorMessage>
      </FormControl>
      <FormControl ml="2">
        <Button 
          onClick={terapkanSemua}
          leftIcon={<AiOutlineCheck />} colorScheme='green' size="sm">Terapkan Semua</Button>
      </FormControl>

    </Flex>

    }
    
    { variations.map((item, index) => {
      return <VariationItem
        onChange={value => changeVariation(index, value)}
        key={index} value={item} />
    })}

    
    

  </Box>
}


export default function VariationFormCreate() {
  const [options, setOptions] = useRecoilState(optionCreateState)
  
  const changeOpti = (index: number, item: OptionCreatePayload) => {
    setOptions(optis => optis.map((opti, ind) => {
      if(ind === index){
        return item
      }
      return opti
    }))
  }

  const addOpti = useCallback(() => {
    setOptions(optis => {
      if(optis.length >= 2){
        return optis
      }

      return [...optis, {
        name: '',
        options: []
      }]
    })
  }, [setOptions])

  return <Box>
    {
      options.map((item, index) => {
        return <OptionForm 
          key={index} 
          value={item} 
          onChange={(itemnew) => changeOpti(index, itemnew)}
          onDelete={() => setOptions(options.filter((opti, ind) => ind !== index))}  
        />
      })
    }
    { options.length < 2 &&
    
      <Button 
        onClick={addOpti}
        mt="2"
        leftIcon={<AiOutlineCheck />} colorScheme='green' size="sm">Tambah Option</Button>
    
    }


    <VariationForm />
    
  </Box>
}