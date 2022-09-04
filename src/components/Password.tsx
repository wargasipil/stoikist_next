import { InputGroup, InputLeftElement, Input, InputRightElement, Button, chakra, InputProps } from "@chakra-ui/react"
import { useState } from "react";
import { FaLock } from "react-icons/fa"

const CFaLock = chakra(FaLock)

export default function Password(props: InputProps){

    const [showPassword, setShowPassword] = useState(false)
    const handleShowClick = () => setShowPassword(!showPassword)

    return <InputGroup>
    <InputLeftElement
      pointerEvents="none"
      color="gray.300"
    >
        <CFaLock color="gray.300" />
    </InputLeftElement>

    <Input
      type={showPassword ? "text" : "password"}
      placeholder="Password"
        {...props}
    />
    <InputRightElement width="4.5rem">
      <Button h="1.75rem" size="sm" onClick={handleShowClick}>
        {showPassword ? "Hide" : "Show"}
      </Button>
    </InputRightElement>
  </InputGroup>
}