import { Container, Left, Right } from './styles.ts'

import Cart from '../../components/Cart/Cart.tsx'
import Address from '../../components/Address/Address.tsx'
import Payment from '../../components/Payment/Payment.tsx'

export default function Checkout() {
  return (
    <Container>
      <Left>
        <Address />
        <Payment />
      </Left>

      <Right>
        <Cart />
      </Right>
    </Container>
  )
}
