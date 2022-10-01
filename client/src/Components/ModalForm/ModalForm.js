import React, { useEffect, useState } from 'react'
import { format } from 'date-fns'
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
  Typography,
  Modal

} from '@mui/material'

// styled components
import { BorderTextField } from '../Form/FormStyle'
import { Form, Container, TotalContainer } from './ModalFormStyled'

// components
import Button from '../Button/Button'
import Label from '../Label/Label'

// style
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  height: '70%',
  bgcolor: 'background.paper',
  borderRadius: '20px',
  boxShadow: 24,
  p: 4
}

const ModalForm = ({ open, handleClose, id }) => {
  const [services, setServices] = useState([])
  const [isChecked, setIsChecked] = useState(new Array(services.length).fill(false))
  const [checkIn, setCheckIn] = useState(null)
  const [checkOut, setCheckOut] = useState(null)
  const [bookingDetail, setBookingDetail] = useState({
    checkIn: '',
    checkOut: '',
    services: []

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

  const handleCheckBox = (index, id) => {
    const temp = [...isChecked]
    temp[index] = !temp[index]
    setIsChecked(temp)

    const serviceTemp = [...bookingDetail.services]
    const position = serviceTemp.indexOf(id)
    position === -1 ? serviceTemp.push(id) : serviceTemp.splice(position, 1)
    setBookingDetail({ ...bookingDetail, services: serviceTemp })
  }

  return (
    <div>
      {console.log(bookingDetail)}
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Container sx={style}>
            <Typography
            id="modal-modal-title"
            variant="h4"
            component="h2"
            sx={{ textAlign: 'center', fontFamily: 'Crimson Pro, serif', fontWeight: '100', color: '#877147' }}>
                Booking Form
            </Typography>
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
                        renderInput={(params) => <BorderTextField {...params} variant="standard"/>}
                    />
                    <DatePicker
                        label="Check out"
                        value={checkOut}
                        onChange={(newValue) => {
                          setCheckOut(newValue)
                          setBookingDetail({ ...bookingDetail, checkOut: format(newValue.toDate(), 'MM/dd/yyyy') })
                        }}
                        renderInput={(params) => <BorderTextField {...params} variant="standard"/>}
                    />
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
                                            onClick={() => {
                                              handleCheckBox(id, serviceItem._id)
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
                                Rs 100
                        </Typography>
                    </TotalContainer>
                    <div style={{ width: '80%', display: 'flex', justifyContent: 'center', marginLeft: '10%' }}>
                        <Button type = 'submit' text='Book now' styling = {{ padding: '20px 40px' }}/>
                    </div>
                </LocalizationProvider>
            </Form>
        </Container>
        </Modal>
    </div>
  )
}

export default ModalForm
