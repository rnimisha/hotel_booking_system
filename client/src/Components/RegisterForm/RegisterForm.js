import React from 'react'

import {
  FormControl,
  TextField
} from '@mui/material'

import Button from '../Button/Button'

const RegisterForm = () => {
  return (
    <>
        <FormControl sx={{ width: '200px' }}>
            <TextField label="Name" variant="standard" />
        </FormControl>
        <FormControl sx={{ width: '200px' }}>
            <TextField label="Email" variant="standard" />
        </FormControl>
        <FormControl sx={{ width: '200px' }}>
            <TextField type="password" label="Password" variant="standard" />
        </FormControl>
        <FormControl sx={{ width: '200px', marginBottom: '8px' }}>
            <TextField type="password" label="Confirm Password" variant="standard" />
        </FormControl>
        <Button text='Register' styling = {{ padding: '15px 40px' }}/>
    </>
  )
}

export default RegisterForm
