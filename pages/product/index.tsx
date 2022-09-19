import { Box, Flex, Spinner, Table, Tbody, Tfoot, Th, Thead, Tr } from "@chakra-ui/react"
import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/router"
import MyPagination from "../../src/components/MyPagination"
import Navbar from "../../src/components/Navbar"
import ProductFilter from "../../src/components/product/ProductFilter"
import { PaginateRes } from '../../src/models/response'
import ConfirmModal from "../../src/components/ConfirmModal"
import ProductListItem from '../../src/components/product/ProductListItem'
import { getProductList, ProductItem } from "../../src/client_api/product"



export default function ProductPage () {
  const router = useRouter()
  
  const { query } = router
  
  const { data, isLoading } = useQuery<PaginateRes<ProductItem>>(['productList'], () => {
    let page = 1

    if(query.page){
      page = Number(query.page)
    }
    return getProductList({
      ...query,
      page,
      limit: 20
    })
  })
  
	return <Box>
		<Navbar />
    <Box pt="55">
      <ProductFilter />
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
              <Th>Harga</Th>
              <Th>Variation</Th>
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
                <td><Spinner m="4" /></td>
              </tr>
              
            }
            
            { !isLoading &&
              data?.items.flatMap((item) => {

                if(item.variation.length > 0){
                  const spleng = item.variation.length
                  const rows = item.variation.map( (vari, index) => {
                    if(index == 0){
                      return <ProductListItem key={vari.id} item={item} span={spleng}/>
                    }
                    return <ProductListItem key={vari.id} item={item} span={spleng} varmode={true}/>
                  })

                  return rows 
                }

                return <ProductListItem key={item.id} item={item} />
              })
            }
            
          </Tbody>
          <Tfoot>
            <Tr>
              <td>
                <Flex>
                  {
                    data &&
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
                  }
                </Flex>
              </td>
            </Tr>
          </Tfoot>
        </Table>
      
    
    </Box>
    <ConfirmModal />
  </Box>
}