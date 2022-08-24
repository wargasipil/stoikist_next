import { HStack, AlertDescription, Input, Button, InputGroup, IconButton, Stack, VStack, ChakraProvider, chakra, Box, FormControl, FormLabel, InputLeftAddon, GridItem } from '@chakra-ui/react';
import Link from 'next/link';
import { AiOutlinePlus } from 'react-icons/ai';

export default function ProductFilter () {
    return <chakra.form>
        <Box>
            <Stack
                mt="3"
                px={4}
                py={5}
                bg="white"
                _dark={{
                bg: "#141517",
                }}
                spacing={6}
                p={{
                sm: 6,
                }}
            >
                <FormControl>
                    <FormLabel
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{
                        color: "gray.50",
                        }}
                    >
                        Search :
                    </FormLabel>
                    <InputGroup size="sm">
                        <Input
                            type="tel"
                            placeholder="Search Product"
                            focusBorderColor="brand.400"
                            rounded="md"
                        />
                    </InputGroup>
                    <FormLabel
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{
                        color: "gray.50",
                        }}
                    >
                        min price :
                    </FormLabel>
                    <InputGroup size="sm">
                        <Input
                            type="tel"
                            placeholder="minimal price"
                            focusBorderColor="brand.400"
                            rounded="md"
                        />
                    </InputGroup>
                    <FormLabel
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{
                        color: "gray.50",
                        }}
                    >
                        max price :
                    </FormLabel>
                    <InputGroup size="sm">
                        <Input
                            type="tel"
                            placeholder="max price"
                            focusBorderColor="brand.400"
                            rounded="md"
                        />
                    </InputGroup>
                    
                    <Button size="sm">Filter</Button>

                </FormControl>
            </Stack>
            


            <HStack>
                <VStack>
                    <InputGroup>

                        
                        <Input placeholder='min stock'/>
                        <Input placeholder='max stock'/>
                        
                       
                    </InputGroup>
                    <Input placeholder='category'/>
                </VStack>
                    
                
                <Link href='/product/create'>
                    <Button leftIcon={<AiOutlinePlus />} colorScheme='green' variant='solid' size="sm">
                        Create
                    </Button>
                </Link>
            </HStack>
        </Box>
        
    </chakra.form>
    
}