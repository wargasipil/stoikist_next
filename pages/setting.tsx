import { Box, Heading } from "@chakra-ui/react"
import Navbar from "../src/components/Navbar"
import { SupplierType } from "../src/components/SupplierType"

export default function SettingPage(){
	return <Box>
		<Navbar />
		<Box pt="55">
      <Heading m="6">Setting</Heading>
      <Box p="6">
        <SupplierType></SupplierType>
      </Box>
      
		</Box>
	</Box>
}