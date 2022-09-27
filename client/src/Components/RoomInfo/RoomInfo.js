import React from 'react'

// styles
import { InfoContainer } from './RoomInfoStyled'

// components
import Button from '../Button/Button'

const RoomInfo = ({ data }) => {
  return (
    <InfoContainer>
      <h2>{data.name}</h2>
      <span>{data.price}</span>
      <span> capacity {data.capacity}</span>
      <span> bed rooms { data.bedrooms}</span>
      <Button text="Book Now" styling = {{ padding: '20px 30px' }}/>
    </InfoContainer>
  )
}

export default RoomInfo
