import React from 'react'
import Button from '../Button/Button'
import { Container } from './Styled'

const AddBox = ({ text }) => {
  return (
    <Container>
        <Button
        text= {text}
        styling = {{ padding: '5px 15px', marginBottom: '5px' }}
        />
    </Container>
  )
}

export default AddBox
