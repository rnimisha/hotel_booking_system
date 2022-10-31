import React, { useState, useEffect } from 'react'
import { format } from 'date-fns'

// style
import { FilterBox } from './FilterStyled'
import { BorderTextField, BorderSelect } from '../Form/FormStyle'

// material ui
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import {
  MenuItem,
  FormControl,
  InputLabel
} from '@mui/material'

const Filter = ({ filterData, setFilterDate }) => {
  const [checkIn, setCheckIn] = useState(null)
  const [checkOut, setCheckOut] = useState(null)
  const [roomType, setRoomType] = useState([])

  const handleFormData = (e) => {
    const temp = { ...filterData }
    const { name, value } = e.target
    temp[name] = value
    setFilterDate(temp)
  }

  useEffect(() => {
    fetch('http://localhost:3000/rooms').then((response) => {
      return response.json()
    }).then((data) => {
      setRoomType(data.data)
    }).catch((error) => {
      console.log('Error : ' + error)
    })
  }, [])

  return (
    <FilterBox>
      <FormControl>
          <InputLabel id="roomtype">Room Type</InputLabel>
          <BorderSelect
              name="roomtype"
              labelId="roomtype"
              label="Room Type"
              onChange={handleFormData}
              value = {filterData.roomtype || ''}
              >
              <MenuItem value=''>All</MenuItem>
              {
                roomType.map((item, id) => {
                  return (
                    <MenuItem key={item._id} value={item.name}>{item.name}</MenuItem>
                  )
                })
              }
          </BorderSelect>
      </FormControl>
      <FormControl>
          <BorderTextField name="capacity" label="Capacity" variant="outlined" onChange={handleFormData} value={filterData.capacity || ''}/>
      </FormControl>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Check in"
          value={checkIn}
          inputFormat="MM/DD/YYYY"
          onChange={(newValue) => {
            setCheckIn(newValue)
            handleFormData({ target: { name: 'checkin', value: format(newValue.toDate(), 'yyyy/MM/dd') } })
          }}
          renderInput={(params) => <BorderTextField {...params} variant="outlined"/>}
        />
        <DatePicker
            label="Check out"
            value={checkOut}
            onChange={(newValue) => {
              setCheckOut(newValue)
              handleFormData({ target: { name: 'checkout', value: format(newValue.toDate(), 'yyyy/MM/dd') } })
            }}
            renderInput={(params) => <BorderTextField {...params} variant="outlined" />}
          />
        </LocalizationProvider>
    </FilterBox>
  )
}

export default Filter
