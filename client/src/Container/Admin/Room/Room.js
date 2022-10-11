import React, { useState, useEffect } from 'react'
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
    <Tables
    heading = {['View', 'Name', 'Price', 'Capacity', 'Edit/Add']}
    />
    </>
  )
}

export default Room
