import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// material ui
import { Grid, Paper } from '@mui/material'

// styled components
import { FormHeading } from '../../../Components/ModalForm/ModalFormStyled'

// components
import AddBox from '../../../Components/AddBox/AddBox'

const RoomList = () => {
  const { roomid } = useParams()
  const [roomlist, setRoomlist] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/rooms/roomno/' + roomid)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data)
        setRoomlist(data.data)
        console.log(roomlist)
      })
  }, [])

  return (
    <>
       <AddBox text= 'Add Room No' clickEvent = {null}/>
       <Grid container spacing={3} alignItems="center">
        {
          roomlist.map((item) => {
            return (
               <Grid item xs={12} sm={6} md={4} key={item._id}>
                    <Paper sx={{ padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '1.4rem' }}>
                      <span>Room Number</span>
                      <FormHeading style={{ fontSize: '3.5rem' }}>
                        {item.roomNo}
                      </FormHeading>
                      <span>available</span>
                    </Paper>
              </Grid>
            )
          })
        }
       </Grid>
    </>
  )
}

export default RoomList
