import { Main } from "./components/Main/Main"
import { GlobalStyle } from "../styles/GlobalStyle"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "../styles/themes/defaultTheme"

function App() {

  return (
    <>
     <ThemeProvider theme={defaultTheme}>
        <Main />
        <GlobalStyle />
     </ThemeProvider>
    </>
  )
}

export default App
