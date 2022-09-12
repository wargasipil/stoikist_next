import { PhoneIcon } from '@chakra-ui/icons'
import { Box, HStack, VStack, Text } from '@chakra-ui/react';
import Navbar from '../src/components/Navbar'

interface Prop {
  href: string
}

export default function Home(props: Prop){
  console.log(props, 'hrefnya')

  return <Box>
  <Navbar></Navbar>
  <Box pt="100">
  
  
  <HStack>
    {
      ["teal.500", "red.500", "yellow.500", "blue.500"].map(i => {
        return <HStack
        key={i}
        boxShadow="md"
        p="3"
        rounded="lg"
      >
        <PhoneIcon
          bg={i}
          p="2"
          rounded="lg"
          color="white"
          boxSize="12"/>
        
        <VStack pl="3">
          <Text fontWeight="350">Collected Fees</Text>
          <Text fontWeight="600">0.00</Text>
        </VStack>
      </HStack>

      })
    }

  </HStack>

  
  
  </Box>
</Box>
}

