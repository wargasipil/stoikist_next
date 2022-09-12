import { Progress } from "@chakra-ui/react"
import { atom, useRecoilValue } from 'recoil'

const progressNavbarState = atom<boolean>({
  key: 'progressNavbarState',
  default: false
})

export default function ProgresNavbar () {
  const show = useRecoilValue(progressNavbarState)

  if(!show){
    return <></>
  }
  return <Progress size='xs' isIndeterminate />
}