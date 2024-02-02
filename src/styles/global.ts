import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }
  
  body {
    background: ${(props) => props.theme.colors.base.background};
    padding: 0 160px;
  }
`

export default GlobalStyles
