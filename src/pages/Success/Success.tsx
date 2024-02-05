import { useContext } from 'react'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'

import { defaultTheme } from '../../styles/themes.ts'
import { CheckoutContext } from '../../contexts/CheckoutContext.tsx'

import {
  Container,
  GradientBorder,
  Header,
  Icon,
  OrderSummary,
  Subtitle,
  Summary,
  SummaryItem,
  Title,
} from './styles.ts'

import success from '../../assets/success.svg'

export default function Success() {
  const { address, paymentMethod, humanizePaymentMethod } =
    useContext(CheckoutContext)

  return (
    <Container>
      <Summary>
        <Header>
          <Title>Uhu! Order confirmed</Title>
          <Subtitle>Now just wait and the coffee will soon reach you</Subtitle>
        </Header>

        <GradientBorder>
          <OrderSummary>
            <SummaryItem>
              <Icon color={defaultTheme.colors.brand.purple}>
                <MapPin
                  color={defaultTheme.colors.base.background}
                  weight="fill"
                />
              </Icon>

              <p>
                Delivery in{' '}
                <span>
                  {address.address}, {address.number}
                </span>
                <br />
                {address.city} - {address.state}
              </p>
            </SummaryItem>

            <SummaryItem>
              <Icon color={defaultTheme.colors.brand.yellow}>
                <Timer
                  color={defaultTheme.colors.base.background}
                  weight="fill"
                />
              </Icon>

              <p>
                Delivery forecast
                <br />
                <span>20 min - 30 min</span>
              </p>
            </SummaryItem>

            <SummaryItem>
              <Icon color={defaultTheme.colors.brand.yellowDark}>
                <CurrencyDollar color={defaultTheme.colors.base.background} />
              </Icon>

              <p>
                Payment on delivery
                <br />
                <span>{humanizePaymentMethod(paymentMethod)}</span>
              </p>
            </SummaryItem>
          </OrderSummary>
        </GradientBorder>
      </Summary>

      <img src={success} alt="" />
    </Container>
  )
}
