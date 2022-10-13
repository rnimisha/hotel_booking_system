import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { handleOpen } from '../../../features/modal/modalSlice'

import AddBox from '../../../Components/AddBox/AddBox'
import Tables from '../../../Components/Tables/Tables'
import RoomForm from '../../../Components/RoomForm/RoomForm'
import IndividualRoom from '../../../Components/RoomForm/IndividualRoom'

const Room = () => {
  const dispatch = useDispatch()
  const [rooms, setRooms] = useState([])
  const [roomId, setRoomId] = useState('')
  const [populate, setPopulate] = useState({})
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

  useEffect(() => {
    if (roomId !== '') {
      fetch('http://localhost:3000/rooms/' + roomId).then((response) => {
        return response.json()
      }).then((data) => {
        setPopulate(data.data)
      }).catch((error) => {
        console.log('Error : ' + error)
      })
    } else {
      setPopulate({})
    }
  }, [roomId])

  return (
    <>
    <AddBox text= 'Add Room Type' clickEvent = {() => { dispatch(handleOpen('addroomtype')) }}/>
    <Tables
    heading = {['Name', 'Price(Rs.)', 'Capacity', 'Actions']}
    keys = {['name', 'price', 'capacity']}
    rowData = {rooms}
    modalComponent = {<IndividualRoom/>}
    modalname= 'individualroom'
    editmodalname = 'addroomtype'
    setData = {setRoomId}
    />
    <RoomForm populate = {populate} setRoomId= {setRoomId}/>
    </>
  )
}

export default Room
