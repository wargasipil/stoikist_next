import { Button, HStack, Input, useNumberInput } from "@chakra-ui/react"
import { useEffect } from 'react';

interface Prop {
  value: number
  change: (data: number) => unknown
}

export default function StockInput(prop: Prop) {
  const { change } = prop
  const { value, getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: prop.value,
      min: 1,
      max: 9999999,
      precision: 0,
    })
  
  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()
  
  useEffect(() => {
    change(Number(value))
  }, [value, change])
  

  return (
    <HStack>
    <Button {...dec} size="sm">-</Button>
    <Input {...input} size="sm" />
    <Button {...inc} size="sm">+</Button>
    </HStack>
  )
  }