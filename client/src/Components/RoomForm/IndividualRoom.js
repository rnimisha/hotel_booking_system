import React from 'react'
import { Formik } from 'formik'
import ROOMNO_VALIDATION_SCHEMA from '../../Validation/RoomNoValidation'

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

// components
import InputField from '../Form/InputField/InputField'
import Button from '../Button/Button'

const IndividualRoom = ({ roomId, getRoomList }) => {
  const open = useSelector((state) => state.modal.open)
  const dispatch = useDispatch()

  const initialValues = {
    roomType: roomId,
    roomNo: ''
  }

  const onSubmit = (values, { setSubmitting }) => {
    console.log(values)
    const requestOptions =
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      }

    fetch('http://localhost:3000/rooms/addroom', requestOptions)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        dispatch(handleClose())
        getRoomList()
      })
    setSubmitting(false)
  }

  return (
    <div>
      <Modal
      open={open === 'individualroom'}
      onClose={() => {
        dispatch(handleClose())
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      >
        <Container style={{ width: '60%', minHeight: '40%' }}>
            <FormHeading> Room Number Form </FormHeading>
          <Formik
          enableReinitialize
          initialValues={ initialValues }
          validationSchema= {ROOMNO_VALIDATION_SCHEMA}
          onSubmit = {onSubmit}
          >
            {({ isSubmitting }) => {
              return (
                <StyledForm>
                  <Grid container sx={{ padding: '10px 40px', marginBottom: '1.2rem' }}>
                    <Grid item xs={12} md={12}>
                        <InputField type='text' name='roomNo' label='Room Number' widthpx='100%'/>
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

export default IndividualRoom
