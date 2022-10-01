import React, { useState } from 'react'
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
  return (
    <FilterBox>
      <FormControl sx={{ width: '150px' }}>
          <InputLabel id="roomtype">Room Type</InputLabel>
          <BorderSelect
              labelId="roomtype"
              label="Room Type">
              <MenuItem value={10}>One</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
          </BorderSelect>
      </FormControl>
      <FormControl sx={{ width: '150px' }}>
          <BorderTextField label="Guest No." variant="outlined" />
      </FormControl>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Check in"
          value={checkIn}
          inputFormat="MM/DD/YYYY"
          onChange={(newValue) => {
            setCheckIn(newValue)
          }}
          renderInput={(params) => <BorderTextField {...params} variant="outlined" sx={{ width: '150px' }}/>}
        />
        <DatePicker
            label="Check out"
            value={checkOut}
            onChange={(newValue) => {
              setCheckOut(newValue)
            }}
            renderInput={(params) => <BorderTextField {...params} variant="outlined" sx={{ width: '150px' }}/>}
          />
        </LocalizationProvider>
    </FilterBox>
  )
}

export default Filter
