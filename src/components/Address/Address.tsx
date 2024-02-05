import React, { useContext } from 'react'
import { MapPinLine } from '@phosphor-icons/react'

import { CheckoutContext } from '../../contexts/CheckoutContext.tsx'
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
  const { address, updateAddress } = useContext(CheckoutContext)

  function handlerInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    updateAddress(event.target.id, event.target.value)
  }

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
          <Input
            type="text"
            id="zipCode"
            placeholder="Zip Code"
            value={address.zipCode}
            onChange={handlerInputChange}
          />

          <Input
            type="text"
            id="address"
            placeholder="Address"
            value={address.address}
            onChange={handlerInputChange}
          />

          <Input
            type="text"
            id="number"
            placeholder="Number"
            value={address.number}
            onChange={handlerInputChange}
          />

          <OptionalInputWrapper id="complement">
            <Input
              type="text"
              id="complement"
              placeholder="Complement"
              value={address.complement}
              onChange={handlerInputChange}
            />
          </OptionalInputWrapper>

          <Input
            type="text"
            id="neighborhood"
            placeholder="Neighborhood"
            value={address.neighborhood}
            onChange={handlerInputChange}
          />

          <Input
            type="text"
            id="city"
            placeholder="City"
            value={address.city}
            onChange={handlerInputChange}
          />

          <Input
            type="text"
            id="state"
            placeholder="State"
            value={address.state}
            onChange={handlerInputChange}
          />
        </Form>
      </AddressContainer>

      <div id="payment"></div>
    </Container>
  )
}
