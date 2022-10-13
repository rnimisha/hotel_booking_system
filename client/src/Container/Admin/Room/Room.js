import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { handleOpen } from '../../../features/modal/modalSlice'

import AddBox from '../../../Components/AddBox/AddBox'
import Tables from '../../../Components/Tables/Tables'
import RoomForm from '../../../Components/RoomForm/RoomForm'

const Room = () => {
  const dispatch = useDispatch()
  const [rooms, setRooms] = useState([])
  useEffect(() => {
    const query = 'http://localhost:3000/rooms'
    fetch(query).then((response) => {
      return response.json()
    }).then((data) => {
      setRooms(data.data)
      console.log(rooms)
      console.log(data.data)
    }).catch((error) => {
      console.log('Error : ' + error)
    })
  }, [])

  return (
    <>
    <AddBox text= 'Add Room Type' clickEvent = {() => { dispatch(handleOpen()) }}/>
    <Tables
    heading = {['Name', 'Price', 'Capacity', 'Actions']}
    keys = {['name', 'price', 'price']}
    rowData = {rooms}
    />
    <RoomForm/>
    </>
  )
}

export default Room
