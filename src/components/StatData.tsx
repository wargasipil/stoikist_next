import { Text, HStack, VStack, Icon, As, Skeleton } from "@chakra-ui/react"

interface Prop {
  icon: As
  title: string
  bg?: string
  count: string | number
  isLoading?: boolean
}

export default function StatData(prop: Prop){
  const { icon, title, count, bg, isLoading } = prop

  return <HStack
    boxShadow="md"
    p="3"
    mx="2"
    rounded="lg"
  >
  <Icon
    as={icon}
    bg={bg ? bg: "teal.500" }
    p="2"
    rounded="lg"
    color="white"
    boxSize="12"/>

  <VStack pl="3">
    <Skeleton isLoaded={!isLoading}><Text fontWeight="350">{ title }</Text></Skeleton> 
    <Skeleton isLoaded={!isLoading}><Text fontWeight="600">{ count }</Text></Skeleton> 
  </VStack>
  </HStack>
}