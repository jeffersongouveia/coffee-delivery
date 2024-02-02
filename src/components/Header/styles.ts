import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 32px 0;
`

export const Logo = styled.img`
  height: 40px;
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const Location = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px;
  border-radius: 6px;
  background: ${(props) => props.theme.colors.brand.purpleLight};
  color: ${(props) => props.theme.colors.brand.purpleDark};
  font: ${(props) => props.theme.fonts.text.s};
`

export const BrowseShoppingCart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  border-radius: 6px;
  padding: 8px;
  background: ${(props) => props.theme.colors.brand.yellowLight};
`
