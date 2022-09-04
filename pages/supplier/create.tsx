import { Box, Button, FormControl, FormHelperText, FormLabel, Heading, Input, Textarea } from "@chakra-ui/react"
import { AiOutlinePlus } from "react-icons/ai"
import Navbar from "../../src/components/Navbar"
import { SupTypeSelect } from "../../src/components/SupplierType"
import { useState, useCallback, useEffect } from 'react';
import { Supplier } from '@prisma/client'
import { SupplierPayload } from "../api/supplier/[id]"
import { useRouter } from "next/router"
import axios from "axios"

async function getSupplier(id: number): Promise<Supplier>{
  const res = await axios.get(`/api/supplier/${id}`)
  return res.data
}

async function updateSupplier(id: number, payload: SupplierPayload) {
  const res = await axios.put(`/api/supplier/${id}`, payload)
  return res.data
}

async function createSupplier(payload: SupplierPayload): Promise<Supplier>{
    const res = await fetch('/api/supplier', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'content-type': 'application/json'
        }
    })

    const data = await res.json()
    return data 

}

interface Prop {
  supplierId: number
}

export default function SupplierCreate(prop: Prop){
  const router = useRouter()
  const { supplierId } = prop

  const [ type_id, setType ] = useState<number>()
  const [ name, setName ] = useState<string>('')
  const [ note, setNote ] = useState<string>('')
  const [ link, setLink ] = useState<string>('')

  useEffect(() => {
    if(supplierId){
      getSupplier(supplierId).then(data => {
        setType(data.type_id)
        setName(data.name)
        setNote(data.note)
        setLink(data.link)
      })
    }
  }, [supplierId])


  const submit = useCallback(async ()=> {
    if(!type_id){
      alert("tidak lengkap")
    }

    if(supplierId){
      await updateSupplier(supplierId,
        {
          type_id: type_id as number,
          name,
          link,
          note
        }  
      )
    } else {
      
      await createSupplier({
        type_id: type_id as number,
        name,
        link,
        note
      })
    
    }

    

    router.push('/supplier')
  }, [type_id, supplierId, name, note, link, router])
  
  return <Box>
    
    <Navbar />
    <Box pt="55">
    <Heading mt="4" ml="4">
      Create Supplier
    </Heading>

    <Box p="4" width="50%">
      <FormControl size="sm">
        <FormLabel>Name</FormLabel>
        <Input 
          value={name}
          onChange={e => setName(e.target.value)}
          type='name' size="sm" />
      </FormControl>

      <FormControl size="sm" mt="3">
        <FormLabel>Link Supplier</FormLabel>
        <Input 
          value={link}
          onChange={e => setLink(e.target.value)}
          type='name' size="sm" />
      </FormControl>

      <FormControl size="sm" mt="3">
        <FormLabel>Type</FormLabel>
        <SupTypeSelect size='sm' 
          value={type_id}
          onChange={e => setType(Number(e.target.value))}
        />
      </FormControl>

      <FormControl size="sm" mt="3">
        <FormLabel>Note</FormLabel>
        <Textarea size='sm' 
          value={note}
          onChange={e => setNote(e.target.value)}
        />
      </FormControl>
      <Button
        mt="5"
        onClick={submit}
        leftIcon={<AiOutlinePlus />} colorScheme='green' variant='solid' size="sm">
        {supplierId ? 'Update': 'Create'}
      </Button>
      
    </Box>
    </Box>

    
  </Box>
}