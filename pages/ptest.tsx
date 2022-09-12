import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Box, Button, useDisclosure } from '@chakra-ui/react'
import { MutableRefObject, useCallback, useRef } from 'react'
import { atom, useRecoilState, useRecoilValue } from 'recoil'
import { string } from 'zod'
import ConfirmModal, { useConfirmModal } from '../src/components/ConfirmModal'
import Navbar from "../src/components/Navbar"

export default function Test() {
  const func = useConfirmModal(
    () => {
    alert('blues')
    },
    'delete data',
    'apakah anda yakin delete ?',
    true
  )

  return <Box>
    <Navbar></Navbar>
    <Box pt="55">
      <Button onClick={func}>show</Button>
      <ConfirmModal></ConfirmModal>
    </Box>
  </Box>
}