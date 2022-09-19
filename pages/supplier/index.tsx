import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Box, Button, IconButton, Link, Table, Tbody, Td, Th, Thead, Tr, useDisclosure, ButtonGroup } from '@chakra-ui/react';
import axios from "axios"
import useSWR from "swr"
import MyPagination from "../../src/components/MyPagination"
import Navbar from "../../src/components/Navbar"

import SupplierFilterList from "../../src/components/supplier/FilterList"
import { useRouter } from 'next/router'
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai"
import { MutableRefObject, useCallback, useRef, useState } from 'react'
import React from "react"
import { fetchSupplierList } from "../../src/client_api/supplier"


function SupplierLoading(){
  return <Box
>
  <Navbar />
  Loading
</Box>
}

export default function SupplierPage () {
  const router = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef() as MutableRefObject<HTMLButtonElement>
  
  const [ activeId, setActiveId ] = useState<number>(0) 
  const { data, mutate } = useSWR(['/api/supplier', router.query], fetchSupplierList)

  
  const openModel = useCallback((id: number) => {
    setActiveId(id)
    onOpen()
  }, [setActiveId, onOpen])

  const deleteRow = useCallback(async () => {
    onClose()
    await axios.delete(`/api/supplier/${activeId}`)
    mutate()
  }, [mutate, activeId, onClose])
  



  if(!data){
    return <SupplierLoading />
  }

  const { items } = data

  return <Box>
<Navbar />
<Box pt="55">
<SupplierFilterList />
  <Table variant='simple'
    shadow="md"
    borderWidth="1px"
    my={2}
    mx={2}
  >
    <Thead>
      <Tr>
        <Th>Name</Th>
        <Th>Type</Th>
        <Th isNumeric>Stock Ongoing</Th>
        <Th isNumeric>Stock Ready</Th>
        <Th>Note</Th>
        <Th>Action</Th>

      </Tr>
    </Thead>
    <Tbody>
      {
        items.map(item => {
          return <Tr key={item.id}>
            <Td>
              <Link href={item.link} target="_blank">
                {item.name}
              </Link>
            </Td>
            <Td>{item.type.name}</Td>
            <Td isNumeric>{item.ongoing_stock}</Td>
            <Td isNumeric>{item.ready_stock}</Td>
            <Td>{item.note}</Td>
            <Td align="right">
              <ButtonGroup size="sm" variant="ghost">
                <IconButton 
                  onClick={() => router.push(`/supplier/update/${item.id}`)}
                  aria-label='edit supplier' icon={<AiOutlineEdit />} />
                <IconButton
                  onClick={() => openModel(item.id)}
                  color="red" aria-label='delete supplier' icon={<AiOutlineDelete />} />
              </ButtonGroup>
              
            </Td>
          </Tr>

        })

      }
      
      
    </Tbody>
  </Table>
<MyPagination 
  pageChange={page => router.push(
    {
      query: {
        ...router.query,
        page
      }
    }
  )}
  {...data.pagination} />

<AlertDialog
  isOpen={isOpen}
  leastDestructiveRef={cancelRef}
  onClose={onClose}
>
  <AlertDialogOverlay>
    <AlertDialogContent>
      <AlertDialogHeader fontSize='lg' fontWeight='bold'>
        Delete Supplier
      </AlertDialogHeader>

      <AlertDialogBody>
        Apakah Yakin Delete Supplier
      </AlertDialogBody>

      <AlertDialogFooter>
        <Button size="sm" ref={cancelRef} onClick={onClose}>
          Cancel
        </Button>
        <Button size="sm" colorScheme='red' onClick={deleteRow} ml={3}>
          Delete
        </Button>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialogOverlay>
</AlertDialog>
</Box>
    </Box>
}