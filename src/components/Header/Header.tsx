import { useContext } from 'react'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

import { CoffeesContext } from '../../contexts/CoffeesContext.tsx'
import { defaultTheme } from '../../styles/themes.ts'
import {
  Actions,
  BrowseShoppingCart,
  CartCount,
  Location,
  Logo,
  Nav,
} from './styles.ts'

import logo from '../../assets/logo.svg'

export default function Header() {
  const { coffeesInCart } = useContext(CoffeesContext)

  const cartCount = coffeesInCart.reduce(
    (sum, coffee) => sum + coffee.quantity,
    0,
  )

  return (
    <Nav>
      <Link to="/">
        <Logo src={logo} alt="" />
      </Link>

      <Actions>
        <Location>
          <MapPin
            size={22}
            color={defaultTheme.colors.brand.purple}
            weight="fill"
          />
          Ji-Paraná, RO
        </Location>

        <BrowseShoppingCart to="/checkout">
          <ShoppingCart
            size={22}
            color={defaultTheme.colors.brand.yellowDark}
            weight="fill"
          />

          {cartCount > 0 && <CartCount>{cartCount}</CartCount>}
        </BrowseShoppingCart>
      </Actions>
    </Nav>
  )
}
