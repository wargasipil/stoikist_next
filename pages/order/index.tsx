import { Box, Button, Flex, FormControl, Icon, Input, InputGroup, Text, InputRightElement, Select, Spacer, Tab, TabList, Tabs, FormLabel } from '@chakra-ui/react';
import Navbar from "../../src/components/Navbar"
import StatData from "../../src/components/StatData"
import {BiPackage} from "react-icons/bi"
import { useRouter } from "next/router"
import MyPagination from "../../src/components/MyPagination"
import OrderListItem from "../../src/components/order/OrderListItem"
import { AiOutlineSearch } from "react-icons/ai"
import DatePicker from "../../src/components/DatePicker"


// TODO: Halaman belum wiring

export default function Order () {
  const router = useRouter()

  return <Box>
    <Navbar />
    <Box pt="55">
      <Flex mt="5">
        <StatData
          title="Total Order"
          count="200"
          icon={BiPackage}
        />

        <StatData
          title="Total Item"
          count="250"
          icon={BiPackage}
        />

        <StatData
          title="Total ( Rp. )"
          count="250"
          icon={BiPackage}
        />

        <StatData
          title="Promo Used"
          count="250"
          icon={BiPackage}
        />

        <StatData
          title="Promo Total ( Rp. )"
          count="250"
          icon={BiPackage}
        />

        <Spacer />

        <Button mr="7" size="sm" colorScheme="teal" onClick={() => {
          router.push('/order/create')
        }}>Create Order</Button>
      </Flex>
      <Flex mt="10">
        
        <FormControl mx="5">
          <FormLabel>Filter Date</FormLabel>
          <Flex>
            <DatePicker
              onChange={() => console.log('asdasd')}
              selectedDate={new Date()}
            />
            <Text mx="2"> to </Text>
            <DatePicker
              onChange={() => console.log('asdasd')}
              selectedDate={new Date()}
            />
          </Flex>
          
        </FormControl>
        <FormControl mx="5">
          <FormLabel>
            Search
          </FormLabel>
          <InputGroup size="sm">
            <Select size="sm" placeholder="search type" width="150">
              <option>name product</option>
              <option>customer</option>
              <option>invoice</option>
            </Select>
            
            <Input size="sm" />
            <InputRightElement>
              <Icon 
                as={AiOutlineSearch}
              />
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </Flex>
      <Flex p="5">
        <Button colorScheme="blue" size="sm">cari</Button>
        <Button mx="5" variant="outline" size="sm">reset</Button>
      </Flex>

      <Flex
        mx="7"
      >
        <Tabs>
          <TabList>
            <Tab>All</Tab>
            <Tab>Completed</Tab>
            <Tab>Process</Tab>
            <Tab>Cancel</Tab>
            <Tab>Problem</Tab>
            <Tab>Return</Tab>
          </TabList>
        </Tabs>
      </Flex>
      
      {
        [0,1,2,3].map(i => {
          return <OrderListItem key={i} />
        })
      }
      

      <MyPagination
        limit={20}
        total={200}
        pageChange={page => router.push(
          {
            query: {
              ...router.query,
              page
            }
          }
        )}
      />
    </Box>
  </Box>
}