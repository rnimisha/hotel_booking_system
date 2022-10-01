import styled from 'styled-components'

import {
  TextField, Select,
  outlinedInputClasses,
  selectClasses
} from '@mui/material'

export const FormContainer = styled.div`
    /* position: absolute;
    left: 0;
    top: 0; */
    width: 100%;
    display: flex;
    justify-content: center;
    /* align-items: center; */
    min-height: 100vh;
    z-index: 1298;

    /* background-color:hsla(30,0%,100%,1);
    background-image:
    radial-gradient(at 55% 55%, hsla(265,0%,97%,1) 0px, transparent 50%),
    radial-gradient(at 81% 6%, hsla(38,9%,55%,1) 0px, transparent 50%),
    radial-gradient(at 5% 5%, hsla(19,13%,61%,1) 0px, transparent 50%),
    radial-gradient(at 59% 65%, hsla(24,19%,87%,1) 0px, transparent 50%); */

`
export const FormBox = styled.div`
    width: 40%;
    height: 500px;
    background-color: #f7f7f7; 
    border-radius: 23px; 
    border-radius: 15px;
    margin-top: 10vh;
    background: rgba(198, 202, 200, 0.1);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(2px);
    border: 1px solid rgba(202, 214, 205, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
`

export const Span = styled.span`
    color: #877147;
    cursor: pointer;

    &:hover{
        color:  #0c6354;
    }
`
export const BorderTextField = styled(TextField)`
  & label.Mui-focused {
    color: #877147;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #877147;
    }
  }

  & .MuiInput-underline:after {
    border-bottom-color: #877147;
  }
`
export const BorderSelect = styled(Select)`
  & .${selectClasses.icon} {
    color:  #877147;
  }

  &.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline} 
  {
    border-color:  #877147 !important;
    color:  #877147 !important;
  }
`
