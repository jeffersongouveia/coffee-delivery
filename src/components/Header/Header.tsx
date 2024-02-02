import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

import { defaultTheme } from '../../styles/themes.ts'
import { Actions, BrowseShoppingCart, Location, Logo, Nav } from './styles.ts'

import logo from '../../assets/logo.svg'

export default function Header() {
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
        </BrowseShoppingCart>
      </Actions>
    </Nav>
  )
}
