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
            <TextField label="Username" variant="standard" />
        </FormControl>
        <FormControl sx={{ width: '200px' }}>
            <TextField label="Password" variant="standard" />
        </FormControl>
         <br />
        <Button text='Login' styling = {{ padding: '15px 40px' }}/>
        <br />
        {/* <span> Dont have account yet?</span>
        <span style={{ color: '#877147' }}>Register now</span> */}
    </>
  )
}

export default LoginForm
