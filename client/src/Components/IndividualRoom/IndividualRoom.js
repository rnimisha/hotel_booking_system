import React from 'react'
import { useNavigate } from 'react-router-dom'
import { RoomBox, RoomImg, RoomName, Info, Price, RoomImgContainer } from './IndividualRoomStyled'

const IndividualRoom = ({ image, price, name, bedrooms, people, id }) => {
  const navitage = useNavigate()
  const showRoomDetails = () => {
    navitage('/rooms/' + id)
  }
  return (
    <RoomBox>
        <RoomImgContainer onClick = {showRoomDetails}>
            <RoomImg src={image} alt={name} />
            <Price>
              Rs.{price}
            </Price>
        </RoomImgContainer>
        <RoomName>
          {name}
        </RoomName>
        <Info>
          {people} people, {bedrooms} bedrooms
        </Info>
    </RoomBox>
  )
}

export default IndividualRoom
