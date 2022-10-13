// import React from 'react'
// import Select from 'react-select'
// import { useField, ErrorMessage } from 'formik'
// import { Error } from '../InputField/InputFieldStyled'
// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' }
// ]

// const SelectField = ({ name, label, widthpx, ...props }) => {
//   const [field, state, { setValue, setTouched }] = useField(name)

//   const onChange = (value) => {
//     setValue(value)
//     console.log(value)
//   }
//   return (
//     <>
//       <Select
//       isMulti
//       {...props}
//       {...field}
//       options={options}
//       value={state?.value}
//       onChange={onChange}
//       onBlur={setTouched} />
//         {/* <TextField
//         {...field}
//         {...props}
//         select= {true}
//         isMulti
//         label = {label}
//         variant= 'standard'
//         fullWidth= {true}
//         onChange={handleChange}
//         error = {!!((meta?.touched && meta?.error))}
//         >
//             <MenuItem value='1'>option1</MenuItem>
//             <MenuItem value='2'>option2</MenuItem>
//             <MenuItem value='3'>option3</MenuItem>
//         </TextField> */}
//         <ErrorMessage name={name}>
//           {
//             (msg) => (
//                 <Error>
//                   {msg}
//                 </Error>
//             )
//           }
//         </ErrorMessage>
//     </>
//   )
// }

// export default SelectField
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
    console.log(values)
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
        />
      </>
  )
}

export default SelectField
