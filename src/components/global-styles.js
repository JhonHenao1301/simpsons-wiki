

import { createGlobalStyle } from 'styled-components'

const GlobalStylesStyled = createGlobalStyle`
    :root {
    --primary: #FFCC80;
    --black: #424242;
    --white: #fffffe;
    --yellow-10: #FFFDE7;
    --yellow-20: #FFF176;
    --yellow-30: #FBC02D;
    --body-regular: 100 1rem/1.5rem Kanit;
    --headline-2: 300 1.25rem/1.5rem Kanit;
    --headline-1: 400 1.5rem/1.75rem Kanit;

  }

  body {
    background: var(--white);
    color: var(--black);
    font: var(--body-regular);
    margin: 0;
    min-inline-size: 100%;
  }

  a {
    text-decoration: none;
    color: var(--black);
  }
`

export default GlobalStylesStyled