import React from 'react'

import {
  FormControl
} from '@mui/material'

import Button from '../Button/Button'
import { BorderTextField } from '../Form/FormStyle'

const LoginForm = () => {
  return (
    <>
        <FormControl sx={{ width: '220px' }}>
            <BorderTextField label="Email" variant="standard" />
        </FormControl>
        <FormControl sx={{ width: '220px' }}>
            <BorderTextField type="password" label="Password" variant="standard" />
        </FormControl>
        <br />
        <Button text='Login' styling = {{ padding: '15px 40px', marginBottom: '5px' }}/>
    </>
  )
}

export default LoginForm
