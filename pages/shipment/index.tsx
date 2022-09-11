import { Box, Button, Flex, Heading, Progress, Table, Tag, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react"
import { useRouter } from "next/router"
import MyPagination from "../../src/components/MyPagination"
import Navbar from "../../src/components/Navbar"
import { useQuery } from '@tanstack/react-query'
import { getListShipment } from "../../src/client_api/shipment"


export default function Shipment () {
  const router = useRouter()

  const { data, isLoading } = useQuery(['listShipment'], () => {
    return getListShipment({
      page: 1,
      limit: 20
    })
  })

  return <Box>
    <Navbar />
    <Box pt="55">
      { isLoading &&
        <Progress size='xs' isIndeterminate />
      }

      <Heading p="6">Shipment</Heading>
      <Box p="6">
        
        <Button size="sm" colorScheme="teal" onClick={() => {
          router.push('/shipment/create')
        }}>Create Shipment</Button>
      </Box>

      <Table variant='simple'
          shadow="md"
          borderWidth="1px"
          w="full"
          
        >
          <Thead>
            <Tr>
              {/* <Th>#</Th> */}
              <Th>Status</Th>
              <Th>Resi</Th>
              <Th>Product Name</Th>
              <Th>Variation</Th>
              <Th>Sku Id</Th>
              <Th>Supplier Name</Th>
              <Th>Supplier Type</Th>
              <Th isNumeric>Count</Th>
              <Th isNumeric>Sub Total</Th>
              <Th isNumeric>Total</Th>
              <Th>created</Th>
            </Tr>
          </Thead>
          <Tbody>
            {
              data?.items.flatMap((restock, index) => {
                return restock.items.map((reItem, ind) => {
                  return <Tr key={[index, ind].join('-')}>
                    {/* <Td>c</Td> */}

                    { ind == 0 && 
                      <>
                      <Td> <Tag>{restock.shipment_status}</Tag> </Td>
                      <Td> {restock.resi} </Td>
                      </>
                      
                    }
                    { ind != 0 && 
                      <>
                      <Td></Td>
                      <Td></Td>
                      </>
                      
                    }
                    
                    <Td> {reItem.sku.product.name} </Td>
                    <Td> 
                      {
                        reItem.variation.values.map(name => {
                          return <Tag ml="3" key={name}>
                            {name}
                          </Tag>
                        })
                      }
                    </Td>
                    <Td>{reItem.sku_id} </Td>
                    <Td>{reItem.supplier.name}</Td>
                    <Td>{reItem.supplier.type.name}</Td>
                    <Td isNumeric>{reItem.count}</Td>

                    { ind == 0 && 
                      <>
                      <Td isNumeric> {restock.sub_total} </Td>
                      <Td isNumeric> {restock.total} </Td>
                      <Td>{ restock.created.toISOString() }</Td>
                      </>
                      
                    }
                    { ind != 0 &&
                      <>
                      
                      <Td></Td>
                      <Td></Td>
                      <Td></Td>
                      </> 
                      
                    }
      
                  </Tr>
                })

                
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
  </Box>

}