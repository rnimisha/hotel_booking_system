import React, { useEffect, useState } from 'react'
import Filter from '../../Components/Filter/Filter'
import Header from '../../Components/Header/Header'
import IndividualRoom from '../../Components/IndividualRoom/IndividualRoom'
import { RoomContainer } from './RoomsStyled'

import roomImg from '../../Assets/images/room1.jpeg'
import headerImg from '../../Assets/images/header1.jpeg'

const Rooms = () => {
  const [rooms, setRooms] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/rooms/').then((response) => {
      return response.json()
    }).then((data) => {
      setRooms(data.data)
    }).catch((error) => {
      console.log('Error : ' + error)
    })
  }, [])

  return (
    <>
      <Header
      height='45vh'
      headerImg= {headerImg}
      text = 'Rooms'
      />
      <Filter/>
      <RoomContainer>
        {
          rooms.map((item, id) => {
            return (
              <IndividualRoom
              key={id}
              image = {roomImg}
              price ={item.price}
              name={item.name}
              people={item.capacity}
              bedrooms={item.bedrooms}
              id={item._id}/>
            )
          })
        }
      </RoomContainer>
    </>
  )
}

export default Rooms
