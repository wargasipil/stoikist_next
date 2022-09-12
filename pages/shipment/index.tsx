import { Box, Button, Flex, Heading, Skeleton, Table, Tag, TagProps, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react"
import { useRouter } from "next/router"
import MyPagination from "../../src/components/MyPagination"
import Navbar from "../../src/components/Navbar"
import { useQuery } from '@tanstack/react-query'
import { getListShipment } from "../../src/client_api/shipment"
import moment from "moment"
import ShipAction from "../../src/components/shipment/ShipAction"
import { useRecoilState, useRecoilValue } from 'recoil';
import { listShipmentState, listShipmentSelector } from '../../src/states/ListShipmentState'
import { useEffect } from 'react'
import ConfirmModal from "../../src/components/ConfirmModal"
import { AlertNotif } from '../../src/components/AlertNotif';
import ProgresNavbar from "../../src/components/ProgresNavbar"
import { StatusShipment } from "@prisma/client"

function ShipmentTag(prop: TagProps){

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const status: StatusShipment = prop.children as any
  if(status === 'COMPLETED'){
    return <Tag {...prop} colorScheme="teal"/>  
  }

  return <Tag {...prop}/>
}

function ShipmentRow(prop: { index: number}) {
  const restock = useRecoilValue(listShipmentSelector(prop.index))



  return <>
  {
    restock.items.map((reItem, ind) => {
      return <Tr key={ind}>
      { ind == 0 && 
        <>
        <Td> <ShipmentTag>{restock.shipment_status}</ShipmentTag> </Td>
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
        <Td>{ moment(restock.created).format('DD MMMM YYYY, hh:mm') }</Td>
        <Td>
          <ShipAction
            index={prop.index}
          />
        </Td>
        </>
        
      }
      { ind != 0 &&
        <>
        
        <Td></Td>
        <Td></Td>
        <Td></Td>
        <Td></Td>
        </> 
        
      }
    
    
      
    
    </Tr>
    })
  }
  
  
  </>
}


export default function Shipment () {
  const router = useRouter()
  const [ items, setItems ] = useRecoilState(listShipmentState)

  const { data, isLoading } = useQuery(['listShipment'], () => {
    return getListShipment({
      page: 1,
      limit: 20
    })
  })

  useEffect(() => {
    if(data?.items !== undefined){
      setItems(data.items)
    }
    
  }, [setItems, data])

  return <Box>
    <Navbar />
    <Box pt="55">
      <ProgresNavbar />

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
              <Th>Act</Th>
            </Tr>
          </Thead>
          <Tbody>
            { isLoading &&
              [0, 1, 2].map(key => {
                return <Tr key={key}>
                  
                  <Td><Skeleton>hello</Skeleton></Td>
                  <Td><Skeleton>hello</Skeleton></Td>
                  <Td><Skeleton>hello</Skeleton></Td>
                  <Td><Skeleton>hello</Skeleton></Td>
                  <Td><Skeleton>hello</Skeleton></Td>
                  <Td><Skeleton>hello</Skeleton></Td>
                  <Td><Skeleton>hello</Skeleton></Td>
                  <Td><Skeleton>hello</Skeleton></Td>
                  <Td><Skeleton>hello</Skeleton></Td>
                  <Td><Skeleton>hello</Skeleton></Td>
                  <Td><Skeleton>hello</Skeleton></Td>
                  <Td>
                    <ShipAction
                      index={0}
                    />
                  </Td>
                </Tr>
              })
              
              
              
            }

            { !isLoading &&
              items.flatMap((restock, index) => {
                return <ShipmentRow
                  index={index}
                  key={index}
                />
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

    <ConfirmModal></ConfirmModal>
    <AlertNotif></AlertNotif>
    </Box>
  </Box>

}