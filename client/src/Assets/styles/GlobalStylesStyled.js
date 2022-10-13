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

  .MuiFormControlLabel-label{
    width: 100%;
  }

  input[type="checkbox"]{
    accent-color: #e74c3c;
  }
  .MuiInputLabel-root.Mui-focused, .MuiInputLabel-shrink{
    color: #877147 !important;
  }
  .css-1iusb04-control{
    border-bottom-width: 1px !important;
    border-color: rgba(0, 0, 0, 0.4) !important;
  }

  .css-wnxzzw-control{
       border-bottom-width: 1.3px !important;
      border-color: #877147 !important;
  }
`

export default GlobalStyles
