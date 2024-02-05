import { Minus, Plus } from '@phosphor-icons/react'
import { useContext, useEffect, useState } from 'react'

import { CoffeesContext, CoffeeType } from '../../contexts/CoffeesContext.tsx'
import { Action, Container, Quantity, Tooltip } from './styles.ts'

interface CounterProps {
  coffee: CoffeeType
}

export default function Counter({ coffee }: CounterProps) {
  const { coffeesInCart, updateCoffeeQuantity, isCoffeeInCart } =
    useContext(CoffeesContext)

  const [enableCounter, setEnableCounter] = useState(false)

  useEffect(() => {
    setEnableCounter(isCoffeeInCart(coffee.name))
  }, [coffee.name, coffeesInCart, isCoffeeInCart])

  function handleUpdateQuantity(increaseValue: number) {
    const quantity = coffee.quantity + increaseValue
    updateCoffeeQuantity(coffee.name, quantity)
  }

  return (
    <Container enabled={enableCounter.toString()}>
      <Action onClick={() => handleUpdateQuantity(-1)}>
        <Minus />
      </Action>

      <Quantity>{coffee.quantity}</Quantity>

      <Action onClick={() => handleUpdateQuantity(1)}>
        <Plus />
      </Action>

      <Tooltip>You must add it to cart first</Tooltip>
    </Container>
  )
}
