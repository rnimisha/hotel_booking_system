import React from 'react'

import { MainButton } from './ButtonStyled'

const Button = ({ text, styling, clickEvent }) => {
  return (
    <MainButton
    padding={styling.padding}
    onClick={ clickEvent || null }>
        {text}
    </MainButton>
  )
}

export default Button
