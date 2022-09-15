import { Box, FormControl, FormLabel } from '@chakra-ui/react'
import Navbar from "../src/components/Navbar"



// const uploadToServer = async (event) => {
//   const body = new FormData();
//   body.append("file", image);
//   const response = await fetch("/api/file", {
//     method: "POST",
//     body
//   });
// };




export default function Test() {



  return <Box>
    <Navbar></Navbar>
    <Box pt="55">
      <Flex>
        <FormControl>
          <FormLabel></FormLabel>
        </FormControl>
      </Flex>
    </Box>
  </Box>
}