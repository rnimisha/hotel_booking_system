import React from 'react'
import { AmmentiesContainer, Container, Heading, Span } from './AmmentiesStyled'

import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined'

const Ammenties = ({ data }) => {
  return (
    <Container>
        <Heading>Ammenties</Heading>
        <AmmentiesContainer>
        {
            data?.map((item, id) => {
              return (
                <Span key ={id}>
                    <CheckCircleOutlineOutlinedIcon/>
                    {item.name}
                </Span>
              )
            })
        }

        </AmmentiesContainer>
    </Container>
  )
}

export default Ammenties
