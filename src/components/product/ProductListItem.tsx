import { chakra, ButtonGroup, IconButton } from "@chakra-ui/react"
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai"
import { IVariation, ProductItem } from "../../client_api/product"
import { useConfirmModal } from "../ConfirmModal"
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useAlert } from "../AlertNotif";

interface ProductListItemProp { 
    item: ProductItem
    span?: number
    varmode?: boolean
    varindex?: number
}

export default function ProductListItem(prop: ProductListItemProp){
  const { item, varindex, span, varmode } = prop
  const setAlert = useAlert()
  const queryClient = useQueryClient()

  const deleteMutation = useMutation(['deleteProduct'], async () => {
    try {
      await axios.delete(`/api/product/${item.id}`)
      setAlert('success', 'Success', "delete product berhasil")
    } catch (e) {
      setAlert('error', 'Error', "delete product gagal")
    }
    
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries(['productList'])
    }
  })

  const deleteProduct = useConfirmModal(deleteMutation, 'Delete', `yakin delete product ${item.name}`, true)


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
  <ButtonGroup size="sm" variant="host">
    <IconButton
      aria-label='edit supplier' icon={<AiOutlineEdit />} />
    <IconButton
      onClick={deleteProduct}
      color="red" aria-label='delete supplier' icon={<AiOutlineDelete />} />
  </ButtonGroup>
  
  </chakra.td>
</chakra.tr>

}