import { AlertTitle, AlertDescription, Alert, CloseButton, useDisclosure, AlertStatus, AlertProps } from "@chakra-ui/react"
import { atom, useRecoilState } from "recoil"
import { useEffect } from 'react'

interface AlertState {
    status: AlertStatus
    title?: string
    desc?: string
    show?: boolean
}

const alertState = atom<AlertState>({
    key: 'alertStateKey',
    default: {
        status: "info",
        show: false
    }
})

function useAlert() {
    const [ data, setData ] = useRecoilState(alertState)
    
    const showAlert = (status: AlertStatus = "info", title: string, desc?: string) => {
        setData({
            show: true,
            status: status,
            title,
            desc
        })
    }

    return showAlert
}

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