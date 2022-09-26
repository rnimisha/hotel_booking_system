import React from 'react'

import {
  FormControl,
  TextField
} from '@mui/material'

import Button from '../Button/Button'

const LoginForm = () => {
  return (
    <>
        <FormControl sx={{ width: '200px' }}>
            <TextField label="Email" variant="standard" />
        </FormControl>
        <FormControl sx={{ width: '200px' }}>
            <TextField type="password" label="Password" variant="standard" />
        </FormControl>
        <Button text='Login' styling = {{ padding: '15px 40px', marginBottom: '5px' }}/>
        <br />
    </>
  )
}

export default LoginForm
