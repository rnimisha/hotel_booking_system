import React, { useEffect, useState } from 'react'
import Filter from '../../Components/Filter/Filter'
import Header from '../../Components/Header/Header'
import IndividualRoom from '../../Components/IndividualRoom/IndividualRoom'
import { RoomContainer } from './RoomsStyled'

import roomImg from '../../Assets/images/room1.jpeg'
import headerImg from '../../Assets/images/header1.jpeg'

const Rooms = () => {
  const [rooms, setRooms] = useState([])
  const [filterData, setFilterDate] = useState({
    roomtype: '',
    capacity: null,
    checkin: '',
    checkout: ''
  })

  useEffect(() => {
    let query = `http://localhost:3000/rooms/?roomtype=${filterData.roomtype}`

    console.log(filterData.checkin)
    if (filterData.capacity !== null) {
      query += `&capacity=${filterData.capacity}`
    }
    if (filterData.checkin !== '') {
      query += `&checkin=${filterData.checkin}`
    }
    if (filterData.checkout !== '') {
      query += `&checkout=${filterData.checkout}`
    }

    fetch(query).then((response) => {
      return response.json()
    }).then((data) => {
      setRooms(data.data)
      console.log(data.data)
    }).catch((error) => {
      console.log('Error : ' + error)
    })
  }, [filterData])

  return (
    <>
      <Header
      height='45vh'
      headerImg= {headerImg}
      text = 'Rooms'
      />
      <Filter filterData= {filterData} setFilterDate={setFilterDate}/>
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
