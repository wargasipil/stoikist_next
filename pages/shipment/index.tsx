import { Box, Button, Heading } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { AlertNotif } from "../../src/components/AlertNotif"
import Navbar from "../../src/components/Navbar"
import ConfirmModal from '../../src/components/ConfirmModal';
import ShipmentTable from "../../src/components/shipment/ShipmentTable";







export default function Shipment () {
  
  const router = useRouter()

  return <Box>
    <Navbar />
    <Box pt="55">

      <Heading p="6">Shipment</Heading>
      <Box p="6">
        
        <Button size="sm" colorScheme="teal" onClick={() => {
          router.push('/shipment/create')
        }}>Create Shipment</Button>
      </Box>
      <ShipmentTable></ShipmentTable>  
    <ConfirmModal></ConfirmModal>
    <AlertNotif></AlertNotif>
    </Box>
  </Box>

}