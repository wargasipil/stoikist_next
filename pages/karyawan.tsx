import { Box, Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import Navbar from "../src/components/Navbar"


export function UserItem(){
  return <Box>
    asdasd
  </Box>
}


export default function Karyawan() {
  return <Box>
    <Navbar />
    <Box pt="55">
      <Heading p='5' fontWeight="300">Karyawan</Heading>
      <Tabs variant='enclosed' isFitted>
        <TabList>
          <Tab>User</Tab>
          <Tab>invitation</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <UserItem />
            
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  </Box>
}