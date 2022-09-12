import { Box, chakra, Flex, IconButton, Spinner, Table, Tbody, Tfoot, Th, Thead, Tr } from "@chakra-ui/react"
import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/router"
import MyPagination from "../../src/components/MyPagination"
import Navbar from "../../src/components/Navbar"
import ProductFilter from "../../src/components/product/ProductFilter"
import { PaginateRes } from '../../src/models/response'
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai"
import { ProductItem, IVariation, getProductList } from "../../src/client_api/product"


interface ProductTrProp { 
  item: ProductItem
  span?: number
  varmode?: boolean
  varindex?: number
}

function ProductTr(prop: ProductTrProp){
  const { item, varindex, span, varmode } = prop
  let vari: IVariation 
  if(varindex){
    vari = item.variation[varindex] 
  } else {
    vari = item.variation[0]
  }

  if(varmode){
    return <chakra.tr>
      <td>
        Rp. { vari?.price }
      </td>
      <td>
        { vari.values.join(", ") }
      </td>
      <td>
        { vari.sku.stock }
      </td>
      <td>0</td>
      <td>
        { vari?.sku.last_restock }
      </td>
    </chakra.tr>
  }

  return <chakra.tr>
  <chakra.td px="5" py="3" rowSpan={span}>{item.name}</chakra.td>
  <td rowSpan={span}>{item.rack_name}</td>
  <td rowSpan={span}>{item.hscode}</td>
  <td rowSpan={span}>{item.marketing_status}</td>
  <td rowSpan={span}>
    {
      item.categories.map(item => {
        return item.category.name
      }).join(' > ')
    }
  </td>

  <td>
    Rp. { vari?.price }
  </td>
  <td>
    { vari?.values.join(", ") }
  </td>
  <td>
    { vari?.sku.stock }
  </td>
  <td>0</td>
  <td>
    { vari?.sku.last_restock }
  </td>


  <chakra.td pr="5" align="right" rowSpan={span}>
  <IconButton
    size="sm" aria-label='edit supplier' icon={<AiOutlineEdit />} />
  <IconButton
    color="red" size="sm" aria-label='delete supplier' icon={<AiOutlineDelete />} />
  </chakra.td>
</chakra.tr>

}


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
                      return <ProductTr key={vari.id} item={item} span={spleng}/>
                    }
                    return <ProductTr key={vari.id} item={item} span={spleng} varmode={true}/>
                  })

                  return rows 
                }

                return <ProductTr key={item.id} item={item} />
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