import React, { useEffect, useState } from 'react'
import FormData from 'form-data'
import { Formik } from 'formik'
import ROOM_VALIDATION_SCHEMA from '../../Validation/RoomValidationSchema'

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
import SelectField from '../Form/SelectField/SelectField'

const RoomForm = ({ populate, roomId, setRoomId, getRooms }) => {
  const [ammenties, setAmmenties] = useState([])

  const open = useSelector((state) => state.modal.open)
  const dispatch = useDispatch()

  useEffect(() => {
    fetch('http://localhost:3000/ammenties').then((response) => {
      return response.json()
    }).then((data) => {
      setAmmenties(data.data)
    }).catch((error) => {
      console.log('Error : ' + error)
    })
  }, [])

  const initialValues = {
    name: '',
    capacity: '',
    price: '',
    bedrooms: '',
    bathrooms: '',
    ammenties: [],
    description: '',
    image: ''
  }

  const onSubmit = (values, { setSubmitting }) => {
    // add new room
    if ((Object.keys(populate).length === 0)) {
      const formData = new FormData()
      for (const value in values) {
        formData.set(value, values[value])
      }

      console.log(formData)
      const requestOptions = {
        method: 'POST',
        body: formData
      }

      fetch('http://localhost:3000/rooms/addroomtype', requestOptions)
      // .then((response) => {
      //   return response.json()
      // })
      // .then((data) => {
      //   getRooms()
      //   dispatch(handleClose())
      // })
      setSubmitting(false)
    } else {
      // udapte room
      const requestOptions =
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: roomId,
          data: values
        })
      }
      fetch('http://localhost:3000/rooms', requestOptions)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          getRooms()
          dispatch(handleClose())
        })
      setSubmitting(false)
    }
  }

  return (
    <div>
        <Modal
        open={open === 'addroomtype'}
        onClose={() => {
          dispatch(handleClose())
          setRoomId('')
        }
        }
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Container style={{ width: '60%' }}>
            <FormHeading> Room Form </FormHeading>
          <Formik
          enableReinitialize
          initialValues={ (Object.keys(populate).length === 0) ? initialValues : populate }
          validationSchema= {ROOM_VALIDATION_SCHEMA}
          onSubmit = {onSubmit}
          encType="multipart/form-data"
          >
            {({ isSubmitting, setFieldValue }) => {
              return (
                <StyledForm>
                  <Grid container spacing ={{ xs: 2, md: 3 }} sx={{ padding: '10px 40px' }}>
                    <Grid item xs={12} md={12}>
                        <InputField type='text' name='name' label='Name' widthpx='100%'/>
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
                    <input
                    type='file'
                    name='image'
                    onChange={(e) =>
                      setFieldValue('image', e.currentTarget.files[0])
                    }
                  />
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
