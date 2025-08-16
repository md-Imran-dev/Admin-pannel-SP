import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    background-color: #f5f7fa;
    color: rgba(0, 0, 0, 0.87);
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;
