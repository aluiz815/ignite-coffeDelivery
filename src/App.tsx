import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CardContextProvider } from './contexts/CartContext'
import { Router } from './Router/Routes'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/defaultTheme'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CardContextProvider>
        <BrowserRouter>
          <Router />
          <GlobalStyle />
        </BrowserRouter>
      </CardContextProvider>
    </ThemeProvider>
  )
}

export default App
