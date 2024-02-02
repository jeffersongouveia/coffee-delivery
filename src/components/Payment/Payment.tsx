import { Bank, CreditCard, CurrencyDollar, Money } from '@phosphor-icons/react'

import {
  Container,
  OptionCard,
  Options,
  PaymentContainer,
  PaymentHeader,
  PaymentHeaderContainer,
} from './styles.ts'
import { defaultTheme } from '../../styles/themes.ts'

export default function Payment() {
  return (
    <Container>
      <PaymentContainer>
        <PaymentHeaderContainer>
          <CurrencyDollar size={22} color={defaultTheme.colors.brand.purple} />

          <PaymentHeader>
            <h4>Payment</h4>
            <p>Payment is made upon delivery. Choose the way you want to pay</p>
          </PaymentHeader>
        </PaymentHeaderContainer>

        <Options>
          <OptionCard selected>
            <CreditCard size={16} color={defaultTheme.colors.brand.purple} />
            <p>Credit Card</p>
          </OptionCard>

          <OptionCard>
            <Bank size={16} color={defaultTheme.colors.brand.purple} />
            <p>Debit Card</p>
          </OptionCard>

          <OptionCard>
            <Money size={16} color={defaultTheme.colors.brand.purple} />
            <p>Money</p>
          </OptionCard>
        </Options>
      </PaymentContainer>
    </Container>
  )
}
