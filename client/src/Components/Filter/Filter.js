import React from 'react'
import { FilterBox } from './FilterStyled'

import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  TextField
} from '@mui/material'

const Filter = () => {
  return (
    <FilterBox>
        <FormControl sx={{ width: '150px' }}>
            <InputLabel id="roomtype">Room Type</InputLabel>
            <Select
                labelId="roomtype"
                label="Room Type">
                <MenuItem value={10}>One</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormControl>
        <FormControl sx={{ width: '150px' }}>
            <TextField label="Guest No." variant="outlined" />
        </FormControl>
        <FormControl sx={{ width: '150px' }}>
            <TextField type="date" label="Check in" variant="outlined" InputLabelProps={{ shrink: true }}/>
        </FormControl>
        <FormControl sx={{ width: '150px' }}>
            <TextField type="date" label="Check out" variant="outlined" InputLabelProps={{ shrink: true }} defaultValue=""/>
        </FormControl>
    </FilterBox>
  )
}

export default Filter
