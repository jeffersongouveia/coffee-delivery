import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'

import {
  Container,
  Feature,
  FeaturesList,
  Icon,
  Subtitle,
  TextContainer,
  Title,
  TitleContainer,
} from './styles.ts'
import { defaultTheme } from '../../styles/themes.ts'

import introCoffeeDelivery from '../../assets/intro-coffee-delivery.png'

export default function Intro() {
  return (
    <Container>
      <TextContainer>
        <TitleContainer>
          <Title>Find the perfect coffee for any time of day</Title>

          <Subtitle>
            With Coffee Delivery you receive your coffee wherever you are,
            anytime
          </Subtitle>
        </TitleContainer>

        <FeaturesList>
          <Feature>
            <Icon background={defaultTheme.colors.brand.yellowDark}>
              <ShoppingCart
                size={16}
                color={defaultTheme.colors.base.background}
                weight="fill"
              />
            </Icon>

            <p>Simple and secure purchase</p>
          </Feature>

          <Feature>
            <Icon background={defaultTheme.colors.base.text}>
              <Package
                size={16}
                color={defaultTheme.colors.base.background}
                weight="fill"
              />
            </Icon>

            <p>Packaging keeps the coffee intact</p>
          </Feature>

          <Feature>
            <Icon background={defaultTheme.colors.brand.yellow}>
              <Timer
                size={16}
                color={defaultTheme.colors.base.background}
                weight="fill"
              />
            </Icon>

            <p>Fast and tracked delivery</p>
          </Feature>

          <Feature>
            <Icon background={defaultTheme.colors.brand.purple}>
              <Coffee
                size={16}
                color={defaultTheme.colors.base.background}
                weight="fill"
              />
            </Icon>

            <p>The coffee arrives fresh to you</p>
          </Feature>
        </FeaturesList>
      </TextContainer>

      <img src={introCoffeeDelivery} alt="" />
    </Container>
  )
}
