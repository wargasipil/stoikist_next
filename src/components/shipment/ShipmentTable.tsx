import { Tr, Td, Tag, Table, Thead, Th, Tbody, Skeleton, Tfoot, Flex, TagProps } from "@chakra-ui/react"
import { StatusShipment } from "@prisma/client"
import { useQuery } from "@tanstack/react-query"
import moment from "moment"
import { useRouter } from "next/router"
import { useRecoilValue, useRecoilState } from "recoil"
import { getListShipment } from "../../client_api/shipment"
import { listShipmentSelector, listShipmentState } from "../../states/ListShipmentState"
import MyPagination from "../MyPagination"
import ShipAction from "./ShipAction"

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

export default function ShipmentTable(){
  const router = useRouter()
  const [ items, setItems ] = useRecoilState(listShipmentState)

  const { data, isLoading } = useQuery(['listShipment'], () => {
    return getListShipment({
      page: 1,
      limit: 20
    })
  },
  {
    onSuccess: (data) => {
      setItems(data.items)
    }
  })


  return <Table variant='simple'
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
      items.flatMap((_, index) => {
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
}