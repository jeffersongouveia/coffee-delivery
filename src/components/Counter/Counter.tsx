import { Minus, Plus } from '@phosphor-icons/react'
import { Action, Container, Quantity } from './styles.ts'

export default function Counter() {
  return (
    <Container>
      <Action>
        <Minus />
      </Action>

      <Quantity>1</Quantity>

      <Action>
        <Plus />
      </Action>
    </Container>
  )
}
