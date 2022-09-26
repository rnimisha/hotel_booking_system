import React from 'react'
import { RoomBox, RoomImg, RoomName, Info, Price } from './IndividualRoomStyled'

const IndividualRoom = ({ image, price, name }) => {
  return (
    <RoomBox>
        <RoomImg src={image} alt="" />
        <RoomName>{name}</RoomName>
        <Info>3 people, 3 bedrooms</Info>
        <Price>Rs.{price}</Price>
    </RoomBox>
  )
}

export default IndividualRoom
