import { useContext, useEffect, useState } from 'react'

import SimplifiedCoffee from '../SimplifiedCoffee/SimplifiedCoffee.tsx'
import formatCurrency from '../../utils/formatCurrency.ts'
import { CoffeesContext } from '../../contexts/CoffeesContext.tsx'
import { CheckoutContext } from '../../contexts/CheckoutContext.tsx'

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
  const { coffeesInCart, clearCart } = useContext(CoffeesContext)
  const { isAddressFilled } = useContext(CheckoutContext)

  const [finishOrderDisabled, setFinishOrderDisabled] = useState(true)

  const total = coffeesInCart.reduce(
    (sum, coffee) => (sum += coffee.quantity * coffee.price),
    0,
  )
  const fee = total * 0.05
  const totalWithFee = total + fee

  useEffect(() => {
    setFinishOrderDisabled(!total || !isAddressFilled())
  }, [total, isAddressFilled])

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
            Coffees total <span>R$ {formatCurrency(total)}</span>
          </TotalItem>

          <TotalItem>
            Delivery fee <span>R$ {formatCurrency(fee)}</span>
          </TotalItem>

          <Total>
            Total <span>R$ {formatCurrency(totalWithFee)}</span>
          </Total>
        </TotalValues>

        <Confirm
          to="/success"
          disabled={finishOrderDisabled}
          onClick={clearCart}
        >
          Finish order
        </Confirm>
      </ContentContainer>
    </CartContainer>
  )
}
