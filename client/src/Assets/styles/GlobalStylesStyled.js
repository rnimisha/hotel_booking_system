import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-family: 'Lato', sans-serif;
    font-size: 1rem;
    font-weight: 300;
    color: #000;
    background-color: #fff;
  }
`

export default GlobalStyles