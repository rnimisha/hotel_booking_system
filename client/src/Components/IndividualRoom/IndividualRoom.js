import React from 'react'
import { RoomBox, RoomImg, RoomName, Info, Price, RoomImgContainer } from './IndividualRoomStyled'

const IndividualRoom = ({ image, price, name }) => {
  return (
    <RoomBox>
        <RoomImgContainer>
            <RoomImg src={image} alt="" />
            <Price>Rs.{price}</Price>
        </RoomImgContainer>
        <RoomName>{name}</RoomName>
        <Info>3 people, 3 bedrooms</Info>
    </RoomBox>
  )
}

export default IndividualRoom
