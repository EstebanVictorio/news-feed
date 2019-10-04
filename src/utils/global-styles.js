import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: Roboto;
    src: url("/fonts/Roboto-Regular.ttf") format("truetype");
  }

  html, body {
    margin: 0;
    font-family: Roboto;
    background-color: #242424;
  }

  .main-content {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .news-feed__heading {
    margin: 24px;
    color: whitesmoke;
  }

`

export default GlobalStyles
