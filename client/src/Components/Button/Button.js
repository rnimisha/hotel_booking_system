import React from 'react'

import { MainButton } from './ButtonStyled'

const Button = ({text}) => {
  return (
    <MainButton>
        {text}
    </MainButton>
  )
}

export default Button