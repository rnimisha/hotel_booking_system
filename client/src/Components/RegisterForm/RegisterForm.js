import React from 'react'

import {
  FormControl
} from '@mui/material'

import Button from '../Button/Button'
import { BorderTextField } from '../Form/FormStyle'

const RegisterForm = () => {
  return (
    <>
        <FormControl sx={{ width: '220px' }}>
            <BorderTextField label="Name" variant="standard" />
        </FormControl>
        <FormControl sx={{ width: '220px' }}>
            <BorderTextField label="Email" variant="standard" />
        </FormControl>
        <FormControl sx={{ width: '220px' }}>
            <BorderTextField type="password" label="Password" variant="standard" />
        </FormControl>
        <FormControl sx={{ width: '220px', marginBottom: '8px' }}>
            <BorderTextField type="password" label="Confirm Password" variant="standard" />
        </FormControl>
        <Button text='Register' styling = {{ padding: '15px 40px' }}/>
    </>
  )
}

export default RegisterForm
