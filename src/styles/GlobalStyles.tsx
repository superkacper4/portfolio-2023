import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html{
    scroll-behavior: smooth;
    background-color: #3b1c94;

}

  body {
    margin: 0;
    padding: 0;
    font-family: 'Titillium Web', sans-serif;
    color: white;
    animation: helloThere .5s ;
  }

  @keyframes helloThere {
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }
`;

export default GlobalStyle;
