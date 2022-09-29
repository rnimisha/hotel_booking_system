import React from 'react'

import { TotalContainer } from '../ModalForm/ModalFormStyled'

const Label = ({ name, price }) => {
  return (
    <TotalContainer>
        <div>{name}</div>
        <div>Rs.{price}</div>
    </TotalContainer>
  )
}

export default Label
