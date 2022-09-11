import { Flex, Icon, chakra, Box, ScaleFade, AlertStatus } from "@chakra-ui/react"
import { BsLightningFill } from "react-icons/bs"
import { IoMdAlert, IoMdCheckmarkCircle } from 'react-icons/io'
import { atom, useRecoilState } from "recoil"

interface AlertState {
  status?: AlertStatus
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

let showtime: NodeJS.Timeout | null = null

export function useAlert() {
  const [ data, setData ] = useRecoilState(alertState)
  

  const showAlert = (status: AlertStatus = "info", title: string, desc?: string) => {
    if (showtime !== null){
      clearTimeout(showtime)
      setData({
        show: false,
        status: 'info'
      })

    }
    setData({
      show: true,
      status: status,
      title,
      desc
    })
    
    showtime = setTimeout(() => {
      setData({
        show: false
      })
    }, 5000)
  }

  return showAlert
}

interface Prop {
  title?: string
  desc?: string
}

function ErrorContent(prop: Prop){
  return <>
  <Flex justifyContent="center" alignItems="center" w={12} bg="red.500">
      <Icon as={BsLightningFill} color="white" boxSize={6} />
    </Flex>

    <Box mx={-3} py={2} px={4}>
      <Box mx={3}>
        <chakra.span
          color="red.500"
          _dark={{
            color: "red.400",
          }}
          fontWeight="bold"
        >
          {prop.title}
        </chakra.span>
        <chakra.p
          color="gray.600"
          _dark={{
            color: "gray.200",
          }}
          fontSize="sm"
        >
          {prop.desc}
        </chakra.p>
      </Box>
    </Box>
    </>
}


function InfoContent(prop: Prop){
  return <>
  <Flex justifyContent="center" alignItems="center" w={12} bg="blue.500">
      <Icon as={IoMdAlert} color="white" boxSize={6} />
    </Flex>

    <Box mx={-3} py={2} px={4}>
      <Box mx={3}>
        <chakra.span
          color="blue.500"
          _dark={{
            color: "blue.400",
          }}
          fontWeight="bold"
        >
          { prop.title }
        </chakra.span>
        <chakra.p
          color="gray.600"
          _dark={{
            color: "gray.200",
          }}
          fontSize="sm"
        >
          {prop.desc}
        </chakra.p>
      </Box>
    </Box>
    </>
}

function SuccessContent(prop: Prop){
  return <>
    <Flex justifyContent="center" alignItems="center" w={12} bg="green.500">
      <Icon as={IoMdCheckmarkCircle} color="white" boxSize={6} />
    </Flex>

    <Box mx={-3} py={2} px={4}>
      <Box mx={3}>
        <chakra.span
          color="green.500"
          _dark={{
            color: "green.400",
          }}
          fontWeight="bold"
        >
          { prop.title }
        </chakra.span>
        <chakra.p
          color="gray.600"
          _dark={{
            color: "gray.200",
          }}
          fontSize="sm"
        >
          { prop.desc }
        </chakra.p>
      </Box>
    </Box>
  
  </>
}


function WarnContent(prop: Prop){
  return <>
    <Flex justifyContent="center" alignItems="center" w={12} bg="yellow.500">
      <Icon as={IoMdAlert} color="white" boxSize={6} />
    </Flex>

    <Box mx={-3} py={2} px={4}>
      <Box mx={3}>
        <chakra.span
          color="yellow.400"
          _dark={{
            color: "yellow.300",
          }}
          fontWeight="bold"
        >
          { prop.title }
        </chakra.span>
        <chakra.p
          color="gray.600"
          _dark={{
            color: "gray.200",
          }}
          fontSize="sm"
        >
          { prop.desc }
        </chakra.p>
      </Box>
    </Box>
  
  </>
}

function LoadingContent(prop: Prop){
  return <>
    <Flex justifyContent="center" alignItems="center" w={12} bg="yellow.500">
      <Icon as={IoMdAlert} color="white" boxSize={6} />
    </Flex>

    <Box mx={-3} py={2} px={4}>
      <Box mx={3}>
        <chakra.span
          color="yellow.400"
          _dark={{
            color: "yellow.300",
          }}
          fontWeight="bold"
        >
          { prop.title }
        </chakra.span>
        <chakra.p
          color="gray.600"
          _dark={{
            color: "gray.200",
          }}
          fontSize="sm"
        >
          { prop.desc }
        </chakra.p>
      </Box>
    </Box>
  
  </>
}

export function AlertNotif(){
  const [data, setData] = useRecoilState(alertState)

  return <ScaleFade initialScale={0.9} in={data.show}>
    <Flex
    maxW="sm"
    w="full"
    bg="white"
    ml="auto"
    mr="5"
    zIndex="200"
    boxShadow="2xl"
    _dark={{
      bg: "gray.800",
    }}
    rounded="lg"
    overflow="hidden"
  >
    { data.status == 'success' &&
      <SuccessContent {...data} />
    }

    { data.status == 'error' &&
      <ErrorContent {...data} />
    }

    { data.status == 'info' &&
      <InfoContent {...data} />
    }

    { data.status == 'warning' &&
      <WarnContent {...data} />
    }

    { data.status == 'loading' &&
      <InfoContent {...data} />
    }

  </Flex>
  </ScaleFade>
  
}