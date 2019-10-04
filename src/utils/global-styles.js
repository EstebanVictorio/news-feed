import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    background-color: #242424;
  }

  .main-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

`

export default GlobalStyles
