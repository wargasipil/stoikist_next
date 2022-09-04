import { AlertTitle, AlertDescription, Alert, CloseButton, useDisclosure, AlertStatus } from "@chakra-ui/react"
import { atom, useRecoilState } from "recoil"

interface AlertState {
    status: AlertStatus
    title?: string
    desc?: string
    show?: boolean
}

export const alertState = atom<AlertState>({
    key: 'alertStateKey',
    default: {
        status: "info",
        show: false
    }
})


export default function AppAlert(){

    const [data, setData] = useRecoilState(alertState)

    return data.show ? <Alert status={data.status}>
        <AlertTitle>{data.title}</AlertTitle>
        <AlertDescription>{ data.desc }</AlertDescription>
        <CloseButton
            alignSelf='flex-end'
            position='absolute'
            right='0'

            onClick={() => setData({...data, show: false})}
      />
    </Alert> : null
}