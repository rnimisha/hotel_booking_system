import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    /* font-family: 'Lato', sans-serif; */
    font-family: 'Crimson Pro', serif;
    font-size: 1rem;
    font-weight: 300;
    color: #1f1f1f;
    background-color: #f7f7f7;
  }

  a{
    text-decoration: none;
  }
`

export default GlobalStyles
