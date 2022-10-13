import React from 'react'
import { Formik } from 'formik'

import { useSelector, useDispatch } from 'react-redux'
import { handleClose } from '../../features/modal/modalSlice'

// material ui
import {
  Modal,
  Grid
} from '@mui/material'

// styled components
import { Container } from '../ModalForm/ModalFormStyled'
import { StyledForm } from '../Form/FormStyle'

import InputField from '../InputField/InputField'
import Button from '../Button/Button'

const RoomForm = () => {
  const open = useSelector((state) => state.modal.open)
  const dispatch = useDispatch()

  const initialValues = {
    roomtypename: '',
    capacity: '',
    price: ''
  }

  const onSubmit = (values, { setSubmitting }) => {
    console.log(values)
    setSubmitting(false)
  }

  return (
    <div>
        <Modal
        open={open}
        onClose={() => { dispatch(handleClose()) }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Container style={{ width: '60%' }}>
          <Formik
          initialValues={{ initialValues }}
           onSubmit = {onSubmit}
          >
            {({ isSubmitting }) => {
              return (
                <StyledForm>
                  <Grid container spacing ={3} sx={{ padding: '10px 40px' }}>
                    <Grid item sx={12} md={12}>
                        <InputField type='text' name='roomtypename' label='Name' widthpx='100%'/>
                    </Grid>
                    <Grid item sx={12} md={6}>
                        <InputField type='number' name='capacity' label='Capacity' widthpx='100%'/>
                    </Grid>
                    <Grid item sx={12} md={6}>
                        <InputField type='number' name='price' label='Price' widthpx='100%'/>
                    </Grid>
                    <Grid item sx={12} md={6}>
                        <InputField type='number' name='bedrooms' label='Bedrooms' widthpx='100%'/>
                    </Grid>
                     <Grid item sx={12} md={6}>
                        <InputField type='number' name='bathrooms' label='Bathrooms' widthpx='100%'/>
                    </Grid>
                     <Grid item sx={12} md={12}>
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
