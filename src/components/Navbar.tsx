import { useColorModeValue, useDisclosure, chakra, Flex, HStack, IconButton, VStack, CloseButton, Button, VisuallyHidden, Avatar, Box } from "@chakra-ui/react"
import { useRouter } from "next/router"
import React from "react"
import { AiFillBell, AiFillHome, AiFillTag, AiOutlineMenu, AiFillSetting } from "react-icons/ai"
import { BsPeopleFill } from 'react-icons/bs'
import { FaBox, FaShoppingBag, FaWarehouse } from "react-icons/fa"
import { MdLocalShipping } from "react-icons/md"
import { AlertNotif } from "./AlertNotif"

interface MenuItem {
    // eslint-disable-next-line no-undef
    icon: JSX.Element
    path: string
    name: string
    active?: boolean
}

const rootMenu: MenuItem[] = [
    {
        name: 'Home',
        path: '/',
        icon: <AiFillHome />
    },
    {
        name: 'Product',
        path: '/product',
        icon: <FaBox />
    },
    {
        name: 'Supplier',
        path: '/supplier',
        icon: <FaWarehouse />
    },
    {
        name: 'Karyawan',
        path: '/karyawan',
        icon: <BsPeopleFill />
    },
    {
        name: 'Shipment',
        path: '/shipment',
        icon: <MdLocalShipping />
    },
    {
        name: 'Order',
        path: '/order',
        icon: <FaShoppingBag />
    },
    {
        name: 'Promo',
        path: '/promo',
        icon: <AiFillTag />
    },
    {
        name: 'Setting',
        path: '/setting',
        icon: <AiFillSetting />
    },
    {
        name: 'Test',
        path: '/ptest',
        icon: <AiFillTag />
    }
]

export default function Navbar(){
    const bg = useColorModeValue("white", "gray.800")
    const mobileNav = useDisclosure()

    const router = useRouter()
    

    return (
        <chakra.header
            pos="relative"
            boxSize="full"
            position="fixed"

            zIndex="100"
            h="55"
            bg="white"
            w="full"
            px={{
            base: 2,
            sm: 4,
            }}
            py={2}
            shadow="md"
        >
            <Flex alignItems="center" justifyContent="space-between" mx="auto" margin="0">
            <HStack display="flex" spacing={2} alignItems="center">
                <Box
                display={{
                    base: "inline-flex",
                    md: "none",
                }}
                >
                <IconButton
                    display={{
                    base: "flex",
                    md: "none",
                    }}
                    aria-label="Open menu"
                    fontSize="20px"
                    variant="ghost"
                    icon={<AiOutlineMenu />}
                    onClick={mobileNav.onOpen}
                />
                <VStack
                    pos="absolute"
                    top={0}
                    left={0}
                    right={0}
                    display={mobileNav.isOpen ? "flex" : "none"}
                    flexDirection="column"
                    p={2}
                    pb={4}
                    m={2}
                    bg={bg}
                    spacing={3}
                    rounded="sm"
                    shadow="sm"
                >
                    <CloseButton
                    aria-label="Close menu"
                    justifySelf="self-start"
                    onClick={mobileNav.onClose}
                    />
                        { rootMenu.map(item => {
                            return <Button onClick={() => router.push(item.path)} key={item.path} variant={router.pathname == item.path ? 'solid': 'ghost'} leftIcon={item.icon} size="sm">
                            {item.name}
                        </Button>
                            
                        }) }
                        
                </VStack>
                </Box>
                <chakra.a
                href="/"
                title="Choc Home Page"
                display="flex"
                alignItems="center"
                >
            
                <strong>Stock</strong>
                </chakra.a>

                <HStack
                spacing={3}
                display={{
                    base: "none",
                    md: "inline-flex",
                }}
                >
                    { rootMenu.map(item => {
                        return <Button onClick={() => router.push(item.path)} key={item.path} variant={router.pathname == item.path ? 'solid': 'ghost'} leftIcon={item.icon} size="sm">
                        {item.name}
                    </Button>
                        
                    }) }
                </HStack>
            </HStack>
            <HStack
                spacing={3}
                display={mobileNav.isOpen ? "none" : "flex"}
                alignItems="center"
            >
                {/* <InputGroup>
                <InputLeftElement pointerEvents="none">
                    <AiOutlineSearch />
                </InputLeftElement>
                <Input type="tel" placeholder="Search..." />
                </InputGroup> */}
                
                <chakra.a
                p={3}
                rounded="sm">
                <AiFillBell />
                <VisuallyHidden>Notifications</VisuallyHidden>
                </chakra.a>
                <Avatar
                size="sm"
                name="Dan Abrahmov"
                src="https://bit.ly/dan-abramov"
                />
            </HStack>
            </Flex>
            <AlertNotif></AlertNotif>
        </chakra.header>
    )
}
  