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
import { Container, FormHeading } from '../ModalForm/ModalFormStyled'
import { StyledForm } from '../Form/FormStyle'

// components
import InputField from '../Form/InputField/InputField'
import Button from '../Button/Button'

const IndividualRoom = () => {
  const open = useSelector((state) => state.modal.open)
  const dispatch = useDispatch()

  const initialValues = {
    roomNo: ''
  }

  const onSubmit = (values, { setSubmitting }) => {
    setSubmitting(false)
  }

  return (
    <div>
        <Modal
        open={open === 'individualroom'}
        onClose={() => { dispatch(handleClose()) }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Container style={{ width: '60%', minHeight: '40%' }}>
            <FormHeading> Room Number Form </FormHeading>
          <Formik
          initialValues={{ initialValues }}
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
