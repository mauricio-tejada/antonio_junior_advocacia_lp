import { Main } from './components/Main'
import { GlobalStyle } from '../styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../styles/themes/defaultTheme'
import { ParallaxProvider } from 'react-scroll-parallax'

function App() {
  return (
    <>
      <ParallaxProvider>
        <ThemeProvider theme={defaultTheme}>
          <Main />
          <GlobalStyle />
        </ThemeProvider>
      </ParallaxProvider>
    </>
  )
}

export default App
