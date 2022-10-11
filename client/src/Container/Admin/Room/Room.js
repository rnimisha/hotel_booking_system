import React, { useState, useEffect } from 'react'
import AddBox from '../../../Components/AddBox/AddBox'
import Tables from '../../../Components/Tables/Tables'

const Room = () => {
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
    <AddBox text= 'Add Room'/>
    <Tables
    heading = {['', 'Name', 'Price', 'Capacity', 'Actions']}
    keys = {['name', 'price', 'price']}
    rowData = {rooms}
    />
    </>
  )
}

export default Room
