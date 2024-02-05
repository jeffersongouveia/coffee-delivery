import { useContext } from 'react'

import SimplifiedCoffee from '../SimplifiedCoffee/SimplifiedCoffee.tsx'
import { CoffeesContext } from '../../contexts/CoffeesContext.tsx'

import {
  CartContainer,
  Confirm,
  ContentContainer,
  Divider,
  Item,
  List,
  Title,
  Total,
  TotalItem,
  TotalValues,
} from './styles.ts'

export default function Cart() {
  const { coffeesInCart } = useContext(CoffeesContext)

  return (
    <CartContainer>
      <Title>Selected Coffees</Title>

      <ContentContainer>
        <List>
          {coffeesInCart.map((coffee) => (
            <Item key={coffee.name}>
              <SimplifiedCoffee coffee={coffee} />
              <Divider />
            </Item>
          ))}
        </List>

        <TotalValues>
          <TotalItem>
            Coffees total <span>R$ 12,90</span>
          </TotalItem>

          <TotalItem>
            Delivery fee <span>R$ 5,00</span>
          </TotalItem>

          <Total>
            Total <span>R$ 17,90</span>
          </Total>
        </TotalValues>

        <Confirm to="/success">Finish order</Confirm>
      </ContentContainer>
    </CartContainer>
  )
}
