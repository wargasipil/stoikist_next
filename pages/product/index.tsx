import { Box, chakra, Divider, Flex, IconButton, Spacer, Spinner, Table, Tbody, Tfoot, Th, Thead, Tr } from "@chakra-ui/react"
import { Product, Category } from "@prisma/client"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useRouter } from "next/router"
import MyPagination from "../../components/MyPagination"
import Navbar from "../../components/Navbar"
import ProductFilter from "../../components/product/ProductFilter"
import { ProductListQuery } from '../api/product/index'
import { PaginateRes } from '../../models/http/response'
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai"


interface IVariation {
  id: number
  names: string[]  
  values: string[]
  price: number
  is_default: boolean
  sku: {
    id: string
    stock: number
    last_restock?: string
  }
}

interface ProductItem extends Product {
  variation: IVariation[]
  categories: {
    category: Category
  }[]
}

async function getProductList(params: ProductListQuery): Promise<PaginateRes<ProductItem>>{
  const res = await axios.get('/api/product', {
    params,
  })

  return res.data
}

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
              data?.items.flatMap((item, index) => {

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
            <Flex>
              <Spacer />
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
              <Spacer />
            </Flex>
          </Tfoot>
        </Table>
      
      
    </Box>
	</Box>
}