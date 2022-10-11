import React from 'react'
import { ErrorMessage, useField } from 'formik'

// styled TextField
import { BorderTextField } from '../Form/FormStyle'
import { FormControl } from '@mui/material'

const InputField = ({ name, label, widthpx, ...props }) => {
  const [field] = useField(name)
  return (
    <FormControl sx={{ width: widthpx || '220px' }}>
        <BorderTextField
        {...field}
        {...props}
        variant= 'standard'
        label={label}
        />
        <ErrorMessage name={name}/>
    </FormControl>
  )
}

export default InputField
