import React, { useState } from 'react'
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
  InputLabel,
  FormControl
} from '@mui/material'

const Filter = () => {
  const [checkIn, setCheckIn] = useState(null)
  const [checkOut, setCheckOut] = useState(null)
  const [filterData, setFilterDate] = useState({
    roomtype: '',
    capacity: null,
    checkin: '',
    checkout: ''
  })

  const handleFormData = (e) => {
    const temp = { ...filterData }
    const { name, value } = e.target
    temp[name] = value
    setFilterDate(temp)
  }
  return (
    <FilterBox>
      <FormControl sx={{ width: '150px' }}>
          <InputLabel id="roomtype">Room Type</InputLabel>
          <BorderSelect
              name="roomtype"
              labelId="roomtype"
              label="Room Type"
              onChange={handleFormData}
              value = {filterData.roomtype || ''}
              >
              <MenuItem value={1}>One</MenuItem>
              <MenuItem value={100}>Twenty</MenuItem>
              <MenuItem value={3000000}>Thirty</MenuItem>
          </BorderSelect>
      </FormControl>
      <FormControl sx={{ width: '150px' }}>
          <BorderTextField name="capacity" label="Capacity" variant="outlined" onChange={handleFormData} value={filterData.capacity || ''}/>
      </FormControl>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Check in"
          value={checkIn}
          inputFormat="MM/DD/YYYY"
          onChange={(newValue) => {
            setCheckIn(newValue)
            handleFormData({ target: { name: 'checkin', value: format(newValue.toDate(), 'MM/dd/yyyy') } })
          }}
          renderInput={(params) => <BorderTextField {...params} variant="outlined" sx={{ width: '150px' }}/>}
        />
        <DatePicker
            label="Check out"
            value={checkOut}
            onChange={(newValue) => {
              setCheckOut(newValue)
              handleFormData({ target: { name: 'checkout', value: format(newValue.toDate(), 'MM/dd/yyyy') } })
            }}
            renderInput={(params) => <BorderTextField {...params} variant="outlined" sx={{ width: '150px' }}/>}
          />
        </LocalizationProvider>
    </FilterBox>
  )
}

export default Filter
