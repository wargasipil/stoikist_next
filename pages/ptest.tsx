import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Box, Button, useDisclosure } from '@chakra-ui/react'
import { MutableRefObject, useCallback, useRef } from 'react'
import { atom, useRecoilState, useRecoilValue } from 'recoil'
import { string } from 'zod'
import Navbar from "../src/components/Navbar"

const showState = atom<boolean>({
  key: 'showState',
  default: false
})

const funcState = atom<(...params: any) => any>({
  key: 'funcState',
  default: () => {}
})

const dataState = atom<{
  title?: string
  desc?: string
  dangerStyle?: boolean
}>({
  key: 'dataState',
  default: {
    title: '',
    desc: ''
  }
  
})

function useTestModal(func?: () => any, title?: string, desc?: string, dangerStyle?: boolean) {
  const [ , setFunc ] = useRecoilState(funcState)
  const [ , setShow ] = useRecoilState(showState)
  const [ , setData ] = useRecoilState(dataState)

  const decorateFunc = useCallback(() => {
    setData({
      title,
      desc,
      dangerStyle
    })
    setShow(true)
    if(func){
      setFunc(() => func)
    }
    
  }, [setFunc, func, setShow, setData, title, desc, dangerStyle])

  return decorateFunc
}

function TestModal(){
  const [ isOpen, setShow ] = useRecoilState(showState)
  const func = useRecoilValue(funcState)
  const data = useRecoilValue(dataState)
  
  const onClose = useCallback(() => {
    setShow(false)
  }, [setShow])
  
  const cancelRef = useRef() as MutableRefObject<HTMLButtonElement>

  const onAction = useCallback(() => {
    func()
    setShow(false)

  }, [func, setShow])

  return <AlertDialog
  isOpen={isOpen}
  leastDestructiveRef={cancelRef}
  onClose={onClose}
>
  <AlertDialogOverlay>
    <AlertDialogContent>
      <AlertDialogHeader fontSize='lg' fontWeight='bold'>
        { data.title }
      </AlertDialogHeader>

      <AlertDialogBody>
      { data.desc }
      </AlertDialogBody>

      <AlertDialogFooter>
        <Button size="sm" ref={cancelRef} onClick={onClose}>
          Cancel
        </Button>
        <Button size="sm" colorScheme={ data.dangerStyle ? 'red': 'teal'} ml={3} onClick={onAction}>
          Confirm
        </Button>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialogOverlay>
</AlertDialog>
}


export default function Test() {
  const func = useTestModal(
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
      <TestModal></TestModal>
    </Box>
  </Box>
}