import { createGlobalStyle } from 'styled-components';

import GitHubBackground from '../assets/github.svg';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline:0;
    box-sizing: border-box;
  }

  body {
    background: #E5E5E5 url(${GitHubBackground}) no-repeat 70% top;
    font: 16px Roboto, Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  #root {
    max-width: 960px;
    width: 100%;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }
`;
