import React, { useEffect, useState } from 'react'
import { Formik } from 'formik'

import { useSelector, useDispatch } from 'react-redux'
import { handleClose } from '../../features/modal/modalSlice'

// material ui
import {
  Modal,
  Grid
} from '@mui/material'

// styled components
import { Container, FormHeading } from '../ModalForm/ModalFormStyled'
import { StyledForm } from '../Form/FormStyle'

import InputField from '../Form/InputField/InputField'
import Button from '../Button/Button'
import SelectField from '../Form/SelectField/SelectField'

const RoomForm = () => {
  const [ammenties, setAmmenties] = useState([])
  const open = useSelector((state) => state.modal.open)
  const dispatch = useDispatch()

  useEffect(() => {
    fetch('http://localhost:3000/ammenties').then((response) => {
      return response.json()
    }).then((data) => {
      setAmmenties(data.data)
    })
  }, [])

  const initialValues = {
    roomtypename: '',
    capacity: '',
    price: ''
  }

  const onSubmit = (values, { setSubmitting }) => {
    setSubmitting(false)
  }

  return (
    <div>
        <Modal
        open={open === 'addroomtype'}
        onClose={() => { dispatch(handleClose()) }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Container style={{ width: '60%' }}>
            <FormHeading> Room Form </FormHeading>
          <Formik
          initialValues={{ initialValues }}
           onSubmit = {onSubmit}
          >
            {({ isSubmitting }) => {
              return (
                <StyledForm>
                  <Grid container spacing ={{ xs: 2, md: 3 }} sx={{ padding: '10px 40px' }}>
                    <Grid item xs={12} md={12}>
                        <InputField type='text' name='roomtypename' label='Name' widthpx='100%'/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <InputField type='number' name='capacity' label='Capacity' widthpx='100%'/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <InputField type='number' name='price' label='Price' widthpx='100%'/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <InputField type='number' name='bedrooms' label='Bedrooms' widthpx='100%'/>
                    </Grid>
                     <Grid item xs={12} md={6}>
                        <InputField type='number' name='bathrooms' label='Bathrooms' widthpx='100%'/>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <SelectField name='ammenties' label='Ammenties' options={ammenties}/>
                    </Grid>
                     <Grid item xs={12} md={12}>
                        <InputField
                        type='text'
                        name='description'
                        label='Description.......'
                        multiline={true}
                        rows={3}
                        widthpx='100%'/>
                    </Grid>
                  </Grid>
                    <Button
                    text= {isSubmitting ? 'Submiting...' : 'Add Room'}
                    styling = {{ padding: '15px 40px', marginBottom: '5px' }}
                    disabled= {isSubmitting}
                    type= 'submit'
                    />
                </StyledForm>
              )
            }}
          </Formik>
        </Container>
        </Modal>
    </div>
  )
}

export default RoomForm
