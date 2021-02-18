import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #FAF5FF;
  }

  body, input, button {
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
  }

  button {
    cursor: pointer;
  }

`;