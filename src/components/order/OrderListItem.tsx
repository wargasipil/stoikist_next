import { Stack, Flex, HStack, Icon, Tag, Spacer, IconButton, Divider, VStack, Box, Text, Image } from "@chakra-ui/react"
import { AiOutlinePrinter, AiOutlineUser } from "react-icons/ai"
import { BsThreeDotsVertical } from "react-icons/bs"

export default function OrderListItem(){
  return <Box
  boxShadow="md"
  p="3"
  mx="7"
  my="2"
  rounded="md"
>
  <Stack>
    <Flex>
      <HStack>
        <Icon boxSize="5" as={AiOutlineUser} />
        <Text>Andy Priyanto</Text>
      </HStack>

      <Tag color="teal.500" ml="7">
        <Text>Return</Text>
      </Tag>
      
      <Spacer />
      <Text fontWeight="300">Invoice: </Text>
      <Text fontWeight={500}> 4535645456SDFSD</Text>
      <IconButton
        size="sm"
        variant="ghost"
        icon={<BsThreeDotsVertical />}
        ml="3"
        aria-label="order action"
      ></IconButton>
    </Flex>
    <Divider />
    
    <Flex>
      <Flex>
        
        <VStack>
          {
            [0, 1, 2].map(i => {
              return <HStack key={i}>
                <Image
                  rounded="md"
                  boxSize="70" 
                  src='https://bit.ly/dan-abramov' 
                  alt="product image" />
                
                <VStack
                  alignItems="left"
                >
                  <Text fontWeight="500">Product Celana Premium Kulotasdasdasdasda asdasdasdasdasd asdasds</Text>
                  <Text fontSize="14">Variasi: merah, hitam</Text>
                </VStack>
                
                <Text fontWeight="600">x 1</Text>
              </HStack>
            })
          }
          

        </VStack>
      </Flex>
      <Spacer />
      <Flex px="10">
        <Stack alignItems="left">
          <Box>
            <Text fontSize={13}>Phone :</Text>
            <Text>+6255-4664-3321</Text>
          </Box>
          <Box>
            <Text fontSize={13}>Alamat :</Text>
            <Text>jl. Pekanbaru barungan, plosoarang, kepanjen, Blitarasdasd asdasda asdasdas</Text>
          </Box>

          <Box>
            <Text fontSize={13}>Promo :</Text>
            <Text fontWeight="500">- Rp. 100.000</Text>
          </Box>
          <Box>
            <Flex><Spacer />
              <IconButton
                icon={<AiOutlinePrinter />}
                aria-label="print"
                variant="outline"
                size="sm"
              />
            </Flex>
          </Box>

        </Stack>
      
      </Flex>


      <Spacer />
      
    </Flex>
    <Divider />
    
    <Flex>
      <Text fontWeight="500" color="grey.700">12 september 2002</Text>
      <Spacer />
      
      <HStack mr="4">
        <Text>Sub Total :</Text>
        <Text fontSize={15} fontWeight="500">Rp. 100.000</Text>
      </HStack>

      <HStack mr="4">
        <Text>Total :</Text>
        <Text fontSize={23} fontWeight="500">Rp. 100.000</Text>
      </HStack>
      
    </Flex>
    
    
  </Stack>
</Box>
}