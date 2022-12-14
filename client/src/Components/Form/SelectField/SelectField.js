import * as React from 'react'
import { MultipleSelect } from 'react-select-material-ui'
import { useField } from 'formik'

const SelectField = ({ name, label, options, ...props }) => {
  const [field, state, { setValue, setTouched }] = useField(name)

  const handleChange = (values) => {
    setValue(values)
  }

  return (
      <>
        <MultipleSelect
          label={label}
          ismulti = "true"
          {...field}
          {...props}
          value={state?.value}
          options={options}
          onChange={handleChange}
          onBlur={setTouched}
          SelectProps={{
            isCreatable: false,
            msgNoOptionsAvailable: 'All cities are selected',
            msgNoOptionsMatchFilter: 'No city name matches the filter'
          }}
          error = {!!((state?.touched && state?.error))}
        />
      </>
  )
}

export default SelectField
