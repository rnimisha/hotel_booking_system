import React from 'react'
import { RoomBox, RoomImg, RoomName, Info, Price, RoomImgContainer } from './IndividualRoomStyled'

const IndividualRoom = ({ image, price, name, bedrooms, people }) => {
  return (
    <RoomBox>
        <RoomImgContainer>
            <RoomImg src={image} alt="" />
            <Price>Rs.{price}</Price>
        </RoomImgContainer>
        <RoomName>{name}</RoomName>
        <Info>{people} people, {bedrooms} bedrooms</Info>
    </RoomBox>
  )
}

export default IndividualRoom
