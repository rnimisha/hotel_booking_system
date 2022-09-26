import React from 'react'

import { MainButton } from './ButtonStyled'

const Button = ({ text, styling }) => {
  return (
    <MainButton padding={styling.padding} >
        {text}
    </MainButton>
  )
}

export default Button
