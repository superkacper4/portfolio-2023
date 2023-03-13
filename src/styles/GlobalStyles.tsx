import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html{
    scroll-behavior: smooth;
}

  body {
    margin: 0;
    padding: 0;
    font-family: 'Titillium Web', sans-serif;
    background-color: #3b1c94;
    color: white;
  }
`;

export default GlobalStyle;
