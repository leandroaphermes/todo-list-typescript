import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
  *, input, select, button {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto';
    font-size: 16px;
  }

  html, body {
    background: linear-gradient(#261919,#2a2f64) no-repeat;
    color: #DDD;
    width: 100vw;
    height: 100vh;
  }
  
`;
