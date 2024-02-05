import { Minus, Plus } from '@phosphor-icons/react'
import { useContext } from 'react'

import { CoffeesContext, CoffeeType } from '../../contexts/CoffeesContext.tsx'
import { Action, Container, Quantity } from './styles.ts'

interface CounterProps {
  coffee: CoffeeType
}

export default function Counter({ coffee }: CounterProps) {
  const { updateCoffeeQuantity } = useContext(CoffeesContext)

  function handleUpdateQuantity(increaseValue: number) {
    const quantity = coffee.quantity + increaseValue
    updateCoffeeQuantity(coffee.name, quantity)
  }

  return (
    <Container>
      <Action onClick={() => handleUpdateQuantity(-1)}>
        <Minus />
      </Action>

      <Quantity>{coffee.quantity}</Quantity>

      <Action onClick={() => handleUpdateQuantity(1)}>
        <Plus />
      </Action>
    </Container>
  )
}
