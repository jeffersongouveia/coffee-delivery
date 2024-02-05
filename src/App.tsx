import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import Router from './Router.tsx'
import CoffeesContextProvider from './contexts/CoffeesContext.tsx'
import CheckoutContextProvider from './contexts/CheckoutContext.tsx'

import GlobalStyles from './styles/global.ts'
import { defaultTheme } from './styles/themes.ts'

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeesContextProvider>
          <CheckoutContextProvider>
            <Router />
          </CheckoutContextProvider>
        </CoffeesContextProvider>
        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  )
}
