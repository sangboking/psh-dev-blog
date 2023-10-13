/* eslint-disable import/no-extraneous-dependencies */
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  *{
    ${reset}
    box-sizing: border-box;
    text-decoration: none;
    font-size: 16px;
    list-style: none;
  }

`;

export default GlobalStyle;
