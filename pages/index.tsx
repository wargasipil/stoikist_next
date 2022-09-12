import { PhoneIcon } from '@chakra-ui/icons'
import { Box, HStack, StatNumber, VStack, Text } from '@chakra-ui/react';
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
      [0,1,2].map(i => {
        return <HStack
        key={i}
        boxShadow="md"
        p="3"
        rounded="lg"
      >
        <PhoneIcon
          bg="teal"
          p="2"
          rounded="lg"
          color="white"
          boxSize="12"/>
        
        <VStack>
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

