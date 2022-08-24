import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Box, Button, IconButton, Link, Spacer, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, useDisclosure } from "@chakra-ui/react"
import axios from "axios"
import useSWR from "swr"
import MyPagination from "../../components/MyPagination"
import Navbar from "../../components/Navbar"
import { PaginateRes, SupplierListQuery } from '../api/supplier/index'
import { Supplier as Sup, SupplierType } from '@prisma/client'
import SupplierFilterList from "../../components/supplier/FilterList"
import { useRouter } from 'next/router'
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai"
import { MutableRefObject, useCallback, useRef, useState } from 'react';
import React from "react"

interface Supplier extends Sup {
  type: SupplierType
}

async function fetchSupplierList(url: string, params: SupplierListQuery): Promise<PaginateRes<Supplier>> {
  console.log(params)
  const res = await axios.get(url, {
    params,
  })

  return res.data

}

function SupplierLoading(){
  return <Box
  bg="#edf3f8"
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
    console.log(activeId, 'asdasd')
    onClose()
    await axios.delete(`/api/supplier/${activeId}`)
    mutate()
  }, [mutate, activeId, onClose])
  



  if(!data){
    return <SupplierLoading />
  }

  const { items } = data

  return <Box
        bg="#edf3f8"
    >
<Navbar />

<SupplierFilterList />
<TableContainer>
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
            <Td isNumeric>{item.stock_ongoing}</Td>
            <Td isNumeric>{item.stock_ready}</Td>
            <Td>{item.note}</Td>
            <Td align="right">
              <IconButton 
                onClick={() => router.push(`/supplier/update/${item.id}`)}
                size="sm" aria-label='edit supplier' icon={<AiOutlineEdit />} />
              <IconButton
                onClick={() => openModel(item.id)}
                color="red" size="sm" aria-label='delete supplier' icon={<AiOutlineDelete />} />
            </Td>
          </Tr>

        })

      }
      
      
    </Tbody>

    <TableCaption>
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
    </TableCaption>
  </Table>
</TableContainer>


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
}