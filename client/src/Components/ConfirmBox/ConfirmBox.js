import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { handleClose } from '../../features/modal/modalSlice'

// material ui
import {
  Grid,
  Modal
} from '@mui/material'

// styled components
import { Container, FormHeading } from '../ModalForm/ModalFormStyled'

// components
import Button from '../Button/Button'

const ConfirmBox = ({ text, clickEvent, clearId }) => {
  const open = useSelector((state) => state.modal.open)
  const dispatch = useDispatch()

  return (
    <Modal
    open={open === 'confirmbox'}
    onClose={() => {
      dispatch(handleClose())
      if (clearId) {
        clearId('')
      }
    }}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
      <Container style={{ width: '40%', minHeight: '40%', display: 'flex', justifyContent: 'center' }}>
        <Grid container spacing = {3} align="center" justify="center" sx={{ height: '100%' }}>
            <Grid item sm={12} md={12} mb={4} mt={2}>
              <FormHeading style={{ color: '#000' }}>
                {text}
              </FormHeading>
            </Grid>
            <Grid item sm ={12} md={6}>
              <Button
              text= 'Cancel'
              btntype='cancel'
              styling = {{ padding: '15px 30px', marginBottom: '5px' }}
              clickEvent= {() => {
                dispatch(handleClose())
                if (clearId) {
                  clearId('')
                }
              }}
              />
            </Grid>
            <Grid item sm ={12} md={6}>
              <Button
              text= 'Confirm'
              styling = {{ padding: '15px 30px', marginBottom: '5px' }}
              clickEvent={clickEvent}
              />
            </Grid>
        </Grid>
      </Container>
    </Modal>
  )
}

export default ConfirmBox
