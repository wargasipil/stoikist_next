import { Box, chakra, IconButton, Spinner, Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react"
import { Product } from "@prisma/client"
import { useQuery } from "@tanstack/react-query"
import axios from "axios";
import { useRouter } from "next/router";
import MyPagination from "../../components/MyPagination"
import Navbar from "../../components/Navbar"
import ProductFilter from "../../components/product/ProductFilter"
import { ProductListQuery } from '../api/product/index'
import { PaginateRes } from '../../models/http/response'
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai"

async function getProductList(params: ProductListQuery){
  const res = await axios.get('/api/product', {
    params,
  })

  return res.data
}


export default function ProductPage () {
  const router = useRouter()
  
  const { query } = router
  const page = query.page ? Number(query.page):1 
  
  const { data, isLoading } = useQuery<PaginateRes<Product>>(['productList'], () => getProductList({
    page,
    limit: 20
  }))
  
	return <Box>
		<Navbar />
    <Box pt="55">
      <ProductFilter />
      {/* <TableContainer mt="3"> */}
        <Table variant='simple'
          shadow="md"
          borderWidth="1px"
          w="full"
          
        >
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Rack Name</Th>
              <Th>Hscode</Th>
              <Th>Marketing Status</Th>
              <Th>Category</Th>
              <Th isNumeric>Stock Ready</Th>
              <Th isNumeric>Stock Ongoing</Th>
              <Th>Last Restock</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {
              isLoading &&
              <tr>
                <Spinner m="4" />
              </tr>
              
            }
            
            { !isLoading &&
              data?.items.map(item => {
                return <tr key={item.id}>
                  <chakra.td px="5" py="3">{item.name}</chakra.td>
                  <td>{item.rack_name}</td>
                  <td>{item.hscode}</td>
                  <td>{item.marketing_status}</td>
                  <td>category</td>
                  <td>
                    0
                  </td>
                  <td>0</td>
                  <td>1-1-2002</td>
                  <chakra.td pr="5" align="right">
                  <IconButton
                    size="sm" aria-label='edit supplier' icon={<AiOutlineEdit />} />
                  <IconButton
                    color="red" size="sm" aria-label='delete supplier' icon={<AiOutlineDelete />} />
                  </chakra.td>
                </tr>
              })
            }
            
          </Tbody>
        </Table>
      {/* </TableContainer>    */}

      <MyPagination
        {...data?.pagination}
        pageChange={page => router.push(
          {
            query: {
              ...router.query,
              page
            }
          }
        )}
      />
    </Box>
	</Box>
}