import React from 'react'
import { useField, ErrorMessage } from 'formik'

// styled TextField
import { BorderTextField } from '../FormStyle'
import { Error } from './InputFieldStyled'

import { FormControl } from '@mui/material'

const InputField = ({ name, label, widthpx, ...props }) => {
  const [field, meta] = useField(name)
  return (
    <FormControl sx={{ width: widthpx || '220px' }}>
        <BorderTextField
        {...field}
        {...props}
        variant= 'standard'
        label={label}
        error = {!!((meta?.touched && meta?.error))}
        InputLabelProps={{ shrink: field.value }}
        sx={{ width: widthpx || '220px' }}
        />
        <ErrorMessage name={name}>
          {
            (msg) => (
                <Error>
                  {msg}
                </Error>
            )
          }
        </ErrorMessage>
    </FormControl>
  )
}

export default InputField
