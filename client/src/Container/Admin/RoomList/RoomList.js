import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { handleOpen, handleClose } from '../../../features/modal/modalSlice'

// material ui
import { Grid, Paper } from '@mui/material'

// styled components
import { FormHeading } from '../../../Components/ModalForm/ModalFormStyled'
import { DeleteIcon } from '../../../Components/Tables/TableStyled'

// components
import AddBox from '../../../Components/AddBox/AddBox'
import IndividualRoom from '../../../Components/RoomForm/IndividualRoom'
import ConfirmBox from '../../../Components/ConfirmBox/ConfirmBox'
import { StatusBar } from './RoomListStyled'

const RoomList = () => {
  const dispatch = useDispatch()
  const { roomid } = useParams()
  const [roomlist, setRoomlist] = useState([])
  const [roomNoId, setRoomNoId] = useState('')

  const getRoomList = () => {
    fetch('http://localhost:3000/rooms/roomno/' + roomid)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setRoomlist(data.data)
      })
  }

  useEffect(() => {
    getRoomList()
  }, [])

  const deleteRoomNo = () => {
    const requestOptions = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: roomNoId
      })
    }
    fetch('http://localhost:3000/rooms/roomno', requestOptions)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        getRoomList()
        dispatch(handleClose())
      })
  }

  const checkAvailibility = (dateArray) => {
    if (dateArray.length === 0) {
      return true
    }

    let currentDate = new Date()
    currentDate = currentDate.getTime()

    const booked = dateArray.filter((item) => {
      let checkin = new Date(item.checkInDate)
      let checkout = new Date(item.checkOutDate)
      checkin = checkin.getTime()
      checkout = checkout.getTime()
      return ((checkin < currentDate) && (checkout > currentDate))
    })

    if (booked.length === 0) {
      return true
    }
    return false
  }

  return (
    <>
       <AddBox text= 'Add Room No' clickEvent = {() => { dispatch(handleOpen('individualroom')) }}/>
       <Grid container spacing={3} alignItems="center" mt={1}>
        {
          roomlist.map((item) => {
            return (
               <Grid item xs={12} sm={6} md={4} key={item._id}>
                  <Paper sx={{ padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '1.4rem' }}>
                    <span>Room Number</span>
                    <FormHeading style={{ fontSize: '3.5rem' }}>
                      {item.roomNo}
                    </FormHeading>
                    {
                       checkAvailibility(item.bookings)
                         ? <StatusBar color='#a6c29d'>
                          available
                       </StatusBar>
                         : <StatusBar color ='#c9a5a5'>
                          booked
                       </StatusBar>
                    }
                    <Grid container spacing ={2} justifyContent="center">
                      <Grid item>
                        <DeleteIcon onClick={() => {
                          dispatch(handleOpen('confirmbox'))
                          setRoomNoId(item._id)
                        }}/>
                      </Grid>
                    </Grid>
                  </Paper>
              </Grid>
            )
          })
        }
       </Grid>
       <IndividualRoom roomId={roomid} getRoomList={getRoomList}/>
       <ConfirmBox text='Do you want to delete the room?' clickEvent={deleteRoomNo}/>
    </>
  )
}

export default RoomList
