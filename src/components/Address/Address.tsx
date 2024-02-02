import { MapPinLine } from '@phosphor-icons/react'

import { defaultTheme } from '../../styles/themes.ts'
import {
  AddressContainer,
  AddressHeader,
  AddressHeaderContainer,
  Container,
  Form,
  Input,
  OptionalInputWrapper,
  Title,
} from './styles.ts'

export default function Address() {
  return (
    <Container>
      <Title>Finish your order</Title>

      <AddressContainer>
        <AddressHeaderContainer>
          <MapPinLine size={22} color={defaultTheme.colors.brand.yellow} />

          <AddressHeader>
            <h4>Delivery address</h4>
            <p>Enter the address where you would like to receive your order</p>
          </AddressHeader>
        </AddressHeaderContainer>

        <Form>
          <Input type="text" id="zipCode" placeholder="Zip Code" />
          <Input type="text" id="address" placeholder="Address" />
          <Input type="text" id="number" placeholder="Number" />
          <OptionalInputWrapper id="complement">
            <Input type="text" placeholder="Complement" />
          </OptionalInputWrapper>
          <Input type="text" id="neighborhood" placeholder="Neighborhood" />
          <Input type="text" id="city" placeholder="City" />
          <Input type="text" id="state" placeholder="State" />
        </Form>
      </AddressContainer>

      <div id="payment"></div>
    </Container>
  )
}
