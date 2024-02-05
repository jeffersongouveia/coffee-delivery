import { ShoppingCart } from '@phosphor-icons/react'

import {
  AddToCart,
  Buy,
  Container,
  Description,
  Name,
  Picture,
  Price,
  Tag,
  Tags,
  Value,
} from './styles.ts'
import { defaultTheme } from '../../styles/themes.ts'

import Counter from '../Counter/Counter.tsx'

import { CoffeesContext, CoffeeType } from '../../contexts/CoffeesContext.tsx'
import formatCurrency from '../../utils/formatCurrency.ts'
import { useContext } from 'react'

interface CoffeeProps {
  coffee: CoffeeType
}

export default function Coffee({ coffee }: CoffeeProps) {
  const { addCoffeeToCart } = useContext(CoffeesContext)

  return (
    <Container>
      <Picture src={coffee.image} alt="" />

      <Tags>
        {coffee.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>

      <Name>{coffee.name}</Name>

      <Description>{coffee.description}</Description>

      <Buy>
        <Price>
          R$ <Value>{formatCurrency(coffee.price)}</Value>
        </Price>

        <Counter coffee={coffee} />

        <AddToCart onClick={() => addCoffeeToCart(coffee)}>
          <ShoppingCart
            size={22}
            color={defaultTheme.colors.base.card}
            weight="fill"
          />
        </AddToCart>
      </Buy>
    </Container>
  )
}
