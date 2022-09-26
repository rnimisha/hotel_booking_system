import React from 'react'
import Filter from '../../Components/Filter/Filter'
import Header from '../../Components/Header/Header'
import IndividualRoom from '../../Components/IndividualRoom/IndividualRoom'
import { RoomContainer } from './RoomsStyled'

import roomImg from '../../Assets/images/room1.jpeg'

const Rooms = () => {
  return (
    <>
      <Header height='45vh'/>
      <Filter/>
      <RoomContainer>
        <IndividualRoom image = {roomImg} price ='12' name='Luxury Room'/>
        <IndividualRoom image = {roomImg} price ='12' name='Luxury Room'/>
        <IndividualRoom image = {roomImg} price ='12' name='Luxury Room'/>
        <IndividualRoom image = {roomImg} price ='12' name='Luxury Room'/>
        <IndividualRoom image = {roomImg} price ='12' name='Luxury Room'/>
      </RoomContainer>
    </>
  )
}

export default Rooms
