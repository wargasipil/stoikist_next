import { AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter, Button } from "@chakra-ui/react"
import { UseMutationResult } from "@tanstack/react-query"
import { useCallback, useRef, MutableRefObject } from 'react'
import { atom, useRecoilState, useRecoilValue } from "recoil"

const showState = atom<boolean>({
  key: 'showState',
  default: false
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const funcState = atom<UseMutationResult<void, unknown, void, unknown> | null>({
  key: 'funcState',
  default: null
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useConfirmModal(func?: UseMutationResult<void, unknown, void, unknown>, title?: string, desc?: string, dangerStyle?: boolean) {
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





export default function ConfirmModal(){
  const [ isOpen, setShow ] = useRecoilState(showState)
  const func = useRecoilValue(funcState)
  const data = useRecoilValue(dataState)
  
  const onClose = useCallback(() => {

    if(!func?.isLoading){
      setShow(false)
    }
    
  }, [setShow, func])
  
  const cancelRef = useRef() as MutableRefObject<HTMLButtonElement>

  const onAction = useCallback(async () => {
    setShow(false)
    await func?.mutate()
    
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
        <Button size="sm" colorScheme={ data.dangerStyle ? 'red': 'teal'} ml={3} onClick={onAction} isLoading={func?.isLoading}>
          Confirm
        </Button>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialogOverlay>
</AlertDialog>
}

