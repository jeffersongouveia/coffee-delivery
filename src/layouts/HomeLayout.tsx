import { Outlet } from 'react-router-dom'

import { LayoutContainer } from './styles.ts'
import Header from '../components/Header/Header.tsx'

export default function HomeLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}
