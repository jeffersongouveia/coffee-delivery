import { useContext } from 'react'
import { Bank, CreditCard, CurrencyDollar, Money } from '@phosphor-icons/react'

import { defaultTheme } from '../../styles/themes.ts'
import {
  CheckoutContext,
  PaymentMethod,
} from '../../contexts/CheckoutContext.tsx'

import {
  Container,
  OptionCard,
  Options,
  PaymentContainer,
  PaymentHeader,
  PaymentHeaderContainer,
} from './styles.ts'

export default function Payment() {
  const { paymentMethod, updatePaymentMethod } = useContext(CheckoutContext)

  function handlePaymentMethodChange(selectedPaymentMethod: PaymentMethod) {
    updatePaymentMethod(selectedPaymentMethod)
  }

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
          <OptionCard
            selected={paymentMethod === PaymentMethod.CREDIT_CARD}
            onClick={() => handlePaymentMethodChange(PaymentMethod.CREDIT_CARD)}
          >
            <CreditCard size={16} color={defaultTheme.colors.brand.purple} />
            <p>Credit Card</p>
          </OptionCard>

          <OptionCard
            selected={paymentMethod === PaymentMethod.DEBIT_CARD}
            onClick={() => handlePaymentMethodChange(PaymentMethod.DEBIT_CARD)}
          >
            <Bank size={16} color={defaultTheme.colors.brand.purple} />
            <p>Debit Card</p>
          </OptionCard>

          <OptionCard
            selected={paymentMethod === PaymentMethod.MONEY}
            onClick={() => handlePaymentMethodChange(PaymentMethod.MONEY)}
          >
            <Money size={16} color={defaultTheme.colors.brand.purple} />
            <p>Money</p>
          </OptionCard>
        </Options>
      </PaymentContainer>
    </Container>
  )
}
