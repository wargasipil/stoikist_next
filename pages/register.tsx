import { Avatar, Box, Button, chakra, Flex, FormControl, FormHelperText, Heading, Input, InputGroup, InputLeftElement, Stack } from "@chakra-ui/react"
import { FaUserAlt, FaMailBulk } from "react-icons/fa"
import Password from "../components/Password"
import { useState } from 'react'
import { RegisterPayload } from "../payload/user"
import { useRecoilState } from 'recoil'
import { alertState } from "../components/AppAlert"
import { useRouter } from "next/router"

const CFaUserAlt = chakra(FaUserAlt)
const CFaMailBulk = chakra(FaMailBulk)


export default function Register() {
    const router = useRouter()
    const [ form, setForm ] = useState<RegisterPayload>({
        email: '',
        name: '',
        password: '',
        username: ''
    })
    const [_, setAlert] = useRecoilState(alertState)

    const registerUser = () => {
        const req = fetch('/api/invitation/accept', {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
              'content-type': 'application/json'
            }
        })
        
        req.catch(() => {
            setAlert({
                status: 'error',
                show: true,
                title: "Register Gagal.." 
            })
        })

        req.then((res) => {
            if (res.status == 200){
              router.push('/login')
            } else {
                setAlert({
                    status: 'error',
                    show: true,
                    title: "Register Gagal.." 
                })
            }
            
        })
    }


    return <Flex
    flexDirection="column"
    width="100wh"
    height="100vh"
    backgroundColor="gray.200"
    justifyContent="center"
    alignItems="center"
  >
    <Stack
      flexDir="column"
      mb="2"
      justifyContent="center"
      alignItems="center"
    >
      <Avatar bg="teal.500" />
      <Heading color="teal.400">Register </Heading>
      <Box minW={{ base: "90%", md: "468px" }}>
        <form>
          <Stack
            spacing={4}
            p="1rem"
            backgroundColor="whiteAlpha.900"
            boxShadow="md"
          >
            <FormControl>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                    <CFaUserAlt color="gray.300" />
                </InputLeftElement>
                <Input 
                    value={form?.name}
                    onChange={(e) => setForm({...form, name: e.target.value})}
                    type="text" placeholder="name" />
              </InputGroup>
            </FormControl>

            <FormControl>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                    <CFaUserAlt color="gray.300" />
                </InputLeftElement>
                <Input
                    value={form?.username}
                    onChange={(e) => setForm({...form, username: e.target.value})}
                    type="text" placeholder="username" />
              </InputGroup>
            </FormControl>

            <FormControl>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                    <CFaMailBulk color="gray.300" />
                </InputLeftElement>
                <Input 
                    value={form?.email}
                    onChange={(e) => setForm({...form, email: e.target.value})}
                    type="email" placeholder="email address" />
              </InputGroup>
            </FormControl>
            <FormControl>
              <Password
                value={form?.password}
                onChange={(e) => setForm({...form, password: e.target.value})}
              ></Password>
            </FormControl>
            <Button
              borderRadius={0}
              type="button"
              variant="solid"
              colorScheme="teal"
              width="full"
              onClick={registerUser}
            >
              register
            </Button>
          </Stack>
        </form>
      </Box>
    </Stack>
  </Flex>
}
