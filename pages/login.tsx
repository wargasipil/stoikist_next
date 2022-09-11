import { Avatar, Box, Button, chakra, Flex, FormControl, FormHelperText, Heading, Input, InputGroup, InputLeftElement, InputRightElement, Link, Stack } from "@chakra-ui/react"
import { signIn } from "next-auth/react"
import { useEffect, useState } from "react"
import { FaLock, FaUserAlt } from 'react-icons/fa'
import { useRecoilState } from "recoil"
import { alertState } from "../src/components/AlertNotif"
import Password from "../src/components/Password"

interface LoginPayload {
  username: string
  password: string
  csrfToken: string
}

interface Csrf {
  csrfToken: string
}

const CFaUserAlt = chakra(FaUserAlt)

function Login () {
  const [_, setAlert] = useRecoilState(alertState)
  const [form, setForm ] = useState<LoginPayload>({
    password: '',
    username: '',
    csrfToken: ''
  })

  useEffect(() => {
    fetch('/api/auth/csrf').then(async (res) => {
      const csrfdata: Csrf = await res.json()
      setForm(form => {
        return {...form, ...csrfdata}
      })
    })

  }, [])


  const handleLogin = () => {
    signIn('credentials',
      {
        username: form.username,
        password: form.password,
        // The page where you want to redirect to after a 
        // successful login
        callbackUrl: `${window.location.origin}/` 
      }
    )
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
      <Heading color="teal.400">Welcome</Heading>
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
                  name="username"
                  value={form.username}
                  onChange={(e) => setForm({...form, username: e.target.value})}
                  type="text" placeholder="username" />
              </InputGroup>
            </FormControl>
            <FormControl>
              <Password
                name="password"
                value={form.password}
                onChange={(e) => setForm({...form, password: e.target.value})}
              ></Password>
              <FormHelperText textAlign="right">
                <Link>forgot password?</Link>
              </FormHelperText>
            </FormControl>
            <Button
              borderRadius={0}
              type="button"
              variant="solid"
              colorScheme="teal"
              width="full"
              onClick={handleLogin}
            >
              Login
            </Button>
          </Stack>
          <input type="hidden" name="csrfToken" value={form.csrfToken}></input>
        </form>
      </Box>
    </Stack>
  </Flex>
}

export default Login