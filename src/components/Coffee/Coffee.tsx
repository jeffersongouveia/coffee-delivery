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
import formatCurrency from '../../utils/formatCurrency.ts'

type Coffee = {
  image: () => string
  name: string
  description: string
  tags: string[]
  price: number
}

interface CoffeeProps {
  coffee: Coffee
}

export default function Coffee({ coffee }: CoffeeProps) {
  return (
    <Container>
      <Picture src={coffee.image()} alt="" />

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

        <Counter />

        <AddToCart>
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
