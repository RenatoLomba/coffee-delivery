import { ThemeProvider } from 'styled-components'

import { ShoppingCartProvider } from './contexts/shopping-cart'
import { Router } from './router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ShoppingCartProvider>
        <Router />
      </ShoppingCartProvider>

      <GlobalStyle />
    </ThemeProvider>
  )
}
