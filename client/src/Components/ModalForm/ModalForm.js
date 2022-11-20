import React, { useEffect, useState } from 'react'
import { format } from 'date-fns'
import { useSelector, useDispatch } from 'react-redux'
import { handleClose } from '../../features/modal/modalSlice'

// material ui
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import {
  FormControl,
  FormLabel,
  FormGroup,
  Checkbox,
  FormControlLabel,
  Modal,
  Typography
} from '@mui/material'

// styled components
import { BorderTextField } from '../Form/FormStyle'
import { Form, Container, TotalContainer, FormHeading } from './ModalFormStyled'
import { Error } from '../Form/InputField/InputFieldStyled'

// components
import Button from '../Button/Button'
import Label from '../Label/Label'

const ModalForm = ({ id, total, setTotal }) => {
  const open = useSelector((state) => state.modal.open)
  const dispatch = useDispatch()

  const [services, setServices] = useState([])
  const [isChecked, setIsChecked] = useState(new Array(services.length).fill(false))
  const [checkIn, setCheckIn] = useState(null)
  const [checkOut, setCheckOut] = useState(null)
  const [bookingDetail, setBookingDetail] = useState({
    checkIn: '',
    checkOut: '',
    services: []

  })
  const [errors, setErrors] = useState({
    checkIn: '',
    checkOut: '',
    services: ''
  })

  useEffect(() => {
    fetch('http://localhost:3000/services').then((response) => {
      return response.json()
    }).then((data) => {
      setServices(data.data)
      // setIsChecked(new Array(services.length).fill(false))
    }).catch((error) => {
      console.log('Error : ' + error)
    })
  }, [])

  const handleCheckBox = (index, id, price) => {
    const temp = [...isChecked]
    temp[index] = !temp[index]
    setIsChecked(temp)

    const serviceTemp = [...bookingDetail.services]
    const position = serviceTemp.indexOf(id)
    position === -1 ? serviceTemp.push(id) : serviceTemp.splice(position, 1)
    setBookingDetail({ ...bookingDetail, services: serviceTemp })
    position === -1 ? setTotal((prev) => prev + parseFloat(price)) : setTotal((prev) => prev - parseFloat(price))
  }

  const bookRoom = () => {
    let temp = { ...errors }
    let isInvalid = false
    if (bookingDetail.checkIn.trim().length === 0) {
      temp = { ...temp, checkIn: 'Check in date is required' }
      setErrors(temp)
      isInvalid = true
    }

    if (bookingDetail.checkOut.trim().length === 0) {
      temp = { ...temp, checkOut: 'Check out date is required' }
      setErrors(temp)
      isInvalid = true
    }

    if (isInvalid) {
      // return
    }
  }

  return (
    <div>
        <Modal
        open={open === 'bookingform'}
        onClose={() => { dispatch(handleClose()) }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Container style={{ width: '60%' }}>
            <FormHeading> Booking Form </FormHeading>
            <Form id="modal-modal-description">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="Check in"
                        value={checkIn}
                        inputFormat="MM/DD/YYYY"
                        onChange={(newValue) => {
                          setCheckIn(newValue)
                          setBookingDetail({ ...bookingDetail, checkIn: format(newValue.toDate(), 'MM/dd/yyyy') })
                        }}
                        renderInput={(params) => <BorderTextField {...params} variant="standard" style={{ width: '100%' }}/>}
                    />
                    {errors.checkIn.length > 0 && <Error>{errors.checkIn}</Error>}
                    <DatePicker
                        label="Check out"
                        value={checkOut}
                        onChange={(newValue) => {
                          setCheckOut(newValue)
                          setBookingDetail({ ...bookingDetail, checkOut: format(newValue.toDate(), 'MM/dd/yyyy') })
                        }}
                        renderInput={(params) => <BorderTextField {...params} variant="standard" style={{ width: '100%' }}/>}
                    />
                    {errors.checkIn.length > 0 && <Error>{errors.checkOut}</Error>}
                    <FormControl sx={{ mt: 3 }} component="fieldset" variant="standard">
                        <FormLabel component="legend">Extra Service</FormLabel>
                        <FormGroup>
                            {
                                services.map((serviceItem, id) => {
                                  return (
                                    <FormControlLabel
                                    key ={id}
                                        control={
                                        <Checkbox
                                        checked={isChecked[id] || false}
                                        name={serviceItem._id}
                                        style ={{
                                          color: '#877147'
                                        }}
                                        onClick={() => {
                                          handleCheckBox(id, serviceItem._id, serviceItem.price)
                                        }}/>
                                        }
                                        label={<Label name = {serviceItem.name} price = {serviceItem.price}/>}
                                    />
                                  )
                                })
                            }
                        </FormGroup>
                    </FormControl>
                    <TotalContainer>
                        <Typography
                         sx={{ color: '#877147', fontSize: '1.5rem' }}>
                            Your Total
                        </Typography>
                        <Typography
                        sx={{ fontSize: '1.5rem' }}>
                                Rs  {total}
                        </Typography>
                    </TotalContainer>

                </LocalizationProvider>
            </Form>
            <div style={{ width: '80%', display: 'flex', justifyContent: 'center', marginLeft: '10%' }}>
                <Button text='Book now'
                styling = {{ padding: '20px 40px' }}
                clickEvent = {() => { bookRoom() }}
                />
            </div>
        </Container>
        </Modal>
    </div>
  )
}

export default ModalForm
