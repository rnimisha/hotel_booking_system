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
import { Error } from '../Form/InputField/InputFieldStyled'

const RoomForm = ({ populate, roomId, setRoomId, getRooms }) => {
  const [ammenties, setAmmenties] = useState([])
  const [imageError, setImageError] = useState('')

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
    if (values.image.length === 0) {
      setImageError('Image is required')
      setSubmitting(false)
      return
    }
    setImageError('')

    console.log(values)
    const formData = new FormData()

    for (const value in values) {
      if ((Object.keys(initialValues)).includes(value)) {
        if (value !== 'ammenties') {
          formData.set(value, values[value])
        }
      }
    }

    (values.ammenties).forEach(item => {
      formData.append('ammenties', item)
    })

    // add new room
    if ((Object.keys(populate).length === 0)) {
      const requestOptions = {
        method: 'POST',
        body: formData,
        dataType: 'jsonp'

      }

      fetch('http://localhost:3000/rooms/addroomtype', requestOptions)
        .then((response) => {
          if (response.ok) {
            return response.json()
          }
          throw new Error('Something went wrong')
        })
        .then((data) => {
          getRooms()
          dispatch(handleClose())
        })
      setSubmitting(false)
    } else {
      // udapte room
      formData.append('id', roomId)
      const requestOptions =
      {
        method: 'PUT',
        body: formData,
        dataType: 'jsonp'
      }
      fetch('http://localhost:3000/rooms', requestOptions)
        .then((response) => {
          if (response.ok) {
            return response.json()
          }
          throw new Error('Something went wrong')
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
                     <Grid item xs={12} md={12}>
                      <input
                      type='file'
                      name='image'
                      onChange={(e) => {
                        setFieldValue('image', e.currentTarget.files[0])
                        setImageError('')
                      }}
                      onClick = {(e) => {
                        e.currentTarget?.files?.length === 0
                          ? setImageError('Image is required')
                          : setImageError('')
                      }}
                      />
                      {imageError.length > 1 ? <Error> {imageError}</Error> : null}
                     </Grid>
                  </Grid>
                  <Button
                  text= {isSubmitting ? 'Submiting...' : (Object.keys(populate).length === 0) ? 'Add Room' : 'Submit Changes'}
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
