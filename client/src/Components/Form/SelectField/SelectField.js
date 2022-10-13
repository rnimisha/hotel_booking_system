import * as React from 'react'
import { MultipleSelect } from 'react-select-material-ui'
import { useField } from 'formik'

const SelectField = ({ name, label, ...props }) => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  const [field, state, { setValue, setTouched }] = useField(name)

  const handleChange = (values) => {
    setValue(values)
  }

  return (
      <>
        <MultipleSelect
          label={label}
          ismulti
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
          style={{
            borderColor: 'red'
          }}
        />
      </>
  )
}

export default SelectField
