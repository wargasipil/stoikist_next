import { Button, HStack, Input } from "@chakra-ui/react"

interface Prop {
  value: number
  change: (data: number) => unknown
}

export default function StockInput(prop: Prop) {
  const { change, value } = prop

  return (
    <HStack>
      <Button onClick={() => change(Number(value) + 1)} size="sm">-</Button>
        <Input value={value} size="sm"
          onChange={e => change(Number(e.target.value) ? Number(e.target.value): 0)}
        />
      <Button
       onClick={() => change(Number(value) + 1)}
       size="sm">+</Button>
    </HStack>
  )
  }