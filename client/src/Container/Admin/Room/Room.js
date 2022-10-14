import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { handleOpen, handleClose } from '../../../features/modal/modalSlice'

import AddBox from '../../../Components/AddBox/AddBox'
import Tables from '../../../Components/Tables/Tables'
import RoomForm from '../../../Components/RoomForm/RoomForm'
import IndividualRoom from '../../../Components/RoomForm/IndividualRoom'

const Room = () => {
  const dispatch = useDispatch()
  const [rooms, setRooms] = useState([])
  // id of room selected to be edited
  const [roomId, setRoomId] = useState('')
  // data of room to populate on form
  const [populate, setPopulate] = useState({})

  const getRooms = () => {
    const query = 'http://localhost:3000/rooms'
    fetch(query).then((response) => {
      return response.json()
    }).then((data) => {
      setRooms(data.data)
    }).catch((error) => {
      console.log('Error : ' + error)
    })
  }

  const deleteRoom = () => {
    const requestOptions =
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: roomId
      })
    }
    fetch('http://localhost:3000/rooms', requestOptions)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        getRooms()
        dispatch(handleClose())
      })
  }

  useEffect(() => {
    getRooms()
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
      text='Do you want to delete the room?'
      roomId={roomId} setRoomId= {setRoomId}
      deleteEvent = {deleteRoom}
      clearId = {setRoomId}
      />
      <RoomForm populate = {populate} roomId={roomId} setRoomId= {setRoomId} getRooms={getRooms}/>
    </>
  )
}

export default Room
