import { Button, IconButton, Input, InputGroup, InputRightElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, SelectProps, useDisclosure } from "@chakra-ui/react"
import { atom, useRecoilState } from 'recoil';
import { useEffect, useState, useCallback } from 'react';
import { MdAdd, MdDelete } from "react-icons/md";

interface SupplierType {
  id: number
  name: string
}

async function deleteSupplierType(id: number) {
  const url = `/api/supplier_type/${id}`
    await fetch(url, {
        method: 'DELETE'
    })
}

async function getSupplierType(): Promise<SupplierType[]> {
  const res = await fetch('/api/supplier_type', {
    method: 'GET'
  })
  const sups = await res.json()
  return sups as SupplierType[]
}

async function createSupplierType(name: string){
  const res = await fetch('/api/supplier_type', {
    method: 'POST',
    body: JSON.stringify({name}),
    headers: {
        'content-type': 'application/json'
    }
  })

  const data = await res.json()
  return data 
}

const supplierTypeState = atom<SupplierType[]>({
  key: 'supplierTypeState',
  default: []
})

export function SupplierType(){
  const [ supType, setSupType ] = useRecoilState(supplierTypeState)
  const [ newSup, setNewSup ] = useState<string>('')
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    if(supType.length === 0){
      getSupplierType().then(datas => setSupType(datas))
    }
  }, [supType, setSupType])



  const addSup = useCallback(async () => {
    setNewSup('')
    const data = await createSupplierType(newSup)
    setSupType(subs => {
      return [...subs, data]
    })
  }, [newSup, setNewSup, setSupType])

  const deleteSup = useCallback(async (id: number) => {
    await deleteSupplierType(id)
    setSupType(items => items.filter(item => item.id !== id))
  }, [setSupType])

  return (
    <>
      <Button onClick={onOpen}>edit supplier type</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Supplier Type</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <InputGroup size="sm">
            <Input
              value={newSup}
              onChange={e => setNewSup(e.target.value)}
              placeholder='new supplier type' />
            <InputRightElement>
              <IconButton
                onClick={addSup}
                size="sm"
                variant="ghost"
                icon={<MdAdd />}
                aria-label='add category'/>
            </InputRightElement>
          </InputGroup>


            {
              supType.map(item => {
                return <div key={item.id}>
                    {item.name}
                    <IconButton
                      onClick={() => deleteSup(item.id)}
                      size="sm"
                      colorScheme="red"
                      variant="ghost"
                      icon={<MdDelete />}
                      aria-label='delete category'/>
                  </div>
              })
            }
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

interface SupTypeSelectProp extends SelectProps {
  withAll?: boolean
}

export function SupTypeSelect(prop: SupTypeSelectProp){

  const [ supType, setSupType ] = useRecoilState(supplierTypeState)
  useEffect(() => {
    if(supType.length === 0){
      getSupplierType().then(datas => setSupType(datas))
    }
  }, [supType, setSupType])

  return <Select {...prop}>
    {
    prop.withAll && <option value={0}>
      all
      </option>
    }
    {
      supType.map(item => {
        return <option key={item.id} value={item.id}>
          {item.name}
        </option>
      })
    }
  </Select>
}