import { ThemeProvider } from 'styled-components'

import { OrdersProvider } from './contexts/orders'
import { ShoppingCartProvider } from './contexts/shopping-cart'
import { Router } from './router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ShoppingCartProvider>
        <OrdersProvider>
          <Router />
        </OrdersProvider>
      </ShoppingCartProvider>

      <GlobalStyle />
    </ThemeProvider>
  )
}
