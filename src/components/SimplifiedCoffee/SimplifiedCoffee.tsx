import { Trash } from '@phosphor-icons/react'

import Counter from '../Counter/Counter.tsx'
import formatCurrency from '../../utils/formatCurrency.ts'

import {
  Container,
  Name,
  Price,
  Image,
  CenterContainer,
  Remove,
} from './styles.ts'

interface SimplifiedCoffeeProps {
  coffee: {
    name: string
    image: string
    price: number
  }
}

export default function SimplifiedCoffee({ coffee }: SimplifiedCoffeeProps) {
  return (
    <Container>
      <Image src={coffee.image} alt="" />

      <CenterContainer>
        <Name>{coffee.name}</Name>

        <Counter />

        <Remove>
          <Trash size={16} />
          Remove
        </Remove>
      </CenterContainer>

      <Price>R$ {formatCurrency(coffee.price)}</Price>
    </Container>
  )
}
