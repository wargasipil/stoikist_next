import { Box } from '@chakra-ui/react'
import ImageUpload from '../src/components/ImageUpload'
import Navbar from "../src/components/Navbar"







export default function Test() {
  

  return <Box>
    <Navbar></Navbar>
    <Box pt="55">
      adasda

      <ImageUpload limit={6} />
    </Box>
  </Box>
}