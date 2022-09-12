import { Menu, MenuButton, IconButton, MenuList, MenuItem } from "@chakra-ui/react"
import { HiOutlineDotsVertical } from "react-icons/hi"
import { useRecoilValue } from "recoil"
import { completedShipment } from "../../client_api/shipment"
import { listShipmentSelector } from "../../states/ListShipmentState"
import { useConfirmModal } from "../ConfirmModal"
import { useAlert } from '../AlertNotif'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export default function ShipAction(prop: { index: number}) {
  const restock = useRecoilValue(listShipmentSelector(prop.index))
  const showAlert = useAlert()
  const queryClient = useQueryClient()

  const successMutate = useMutation(async () => {
    try {
      await completedShipment(restock.id)
      showAlert('success', 'Berhasil.', 'set completed berhasil .')
    } catch (e) {
      console.error(e)
      showAlert('error', 'Error', 'Gagal set completed .')
    }
  },
  {
    onSuccess: () => {
      queryClient.invalidateQueries(['listShipment'])
    }
  }
  )

  const setCompleted = useConfirmModal(
    successMutate,
    'Ubah Status',
    'Ubah Status menjadi completed ?'
  )

  return <Menu>
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<HiOutlineDotsVertical />}
    variant='ghost'
    size="sm"
  />
  <MenuList>
    <MenuItem onClick={setCompleted}>
      set completed
    </MenuItem>
  </MenuList>
</Menu>
}