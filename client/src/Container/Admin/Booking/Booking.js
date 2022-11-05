import React, { useState, useEffect } from 'react'
import Tables from '../../../Components/Tables/Tables'

const Booking = () => {
  const [bookings, setBookings] = useState([])

  const getBookings = () => {
    const query = 'http://localhost:3000/bookings'
    fetch(query).then((response) => {
      if (response.ok) {
        return response.json()
      }
      throw new Error('Something went wrong')
    }).then((data) => {
      const allData = (data.data).reduce((acc, current) => {
        const temp = {}
        temp._id = current._id
        temp.roomNo = current.roomNo
        temp.services = current.bookings.services
        temp.mode = current.bookings.mode
        temp.user = current.bookings._id
        return [...acc, temp]
      }, [])
      setBookings(allData)
      console.log(allData)
    }).catch((error) => {
      console.log('Error : ' + error)
    })
  }
  useEffect(() => {
    getBookings()
  }, [])
  return (
    <>
      <Tables
      heading = {['Room No', 'Mode']}
      keys = {['roomNo', 'mode']}
      rowData = {bookings}
      />
    </>
  )
}

export default Booking
