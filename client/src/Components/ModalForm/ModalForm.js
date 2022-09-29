import React from 'react'

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

const ModalForm = ({ open, handleOpen, handleClose }) => {
  const [checkIn, setCheckIn] = React.useState(null)
  return (
    <div>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ zIndex: '9999' }}
        >
        <Container sx={style}>
            <Typography id="modal-modal-title" variant="h4" component="h2" sx={{ textAlign: 'center', fontFamily: 'Crimson Pro, serif', fontWeight: '100', color: '#877147' }}>
                Booking Form
            </Typography>
            <Form id="modal-modal-description">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="Check in"
                        value={checkIn}
                        onChange={(newValue) => {
                          setCheckIn(newValue)
                        }}
                        renderInput={(params) => <BorderTextField {...params} variant="standard"/>}
                    />
                    <DatePicker
                        label="Check out"
                        value={checkIn}
                        onChange={(newValue) => {
                          setCheckIn(newValue)
                        }}
                        renderInput={(params) => <BorderTextField {...params} variant="standard"/>}
                    />
                    <FormControl sx={{ mt: 3 }} component="fieldset" variant="standard">
                        <FormLabel component="legend">Extra Service</FormLabel>
                        <FormGroup>
                        <FormControlLabel
                            control={
                            <Checkbox checked={true} name="Breakfast" />
                            }
                            label={<Label name = "Breakfast" price = '20'/>}
                        />
                        <FormControlLabel
                            control={
                            <Checkbox checked={false} name="Dinner" />
                            }
                            label={<Label name = "Dinner" price = '20'/>}
                        />
                        <FormControlLabel
                            // sx={{ width: '100%' }}
                            control={
                            <Checkbox checked={false} name="Driver" />
                            }
                            label={<Label name = "Driver" price = '20'/>}
                        />
                        <FormControlLabel
                            control={
                            <Checkbox checked={false} name="Gym & Spa" />
                            }
                            label={<Label name = "Gym & Spa" price = '20'/>}
                        />
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
                        <Button text='Book now' styling = {{ padding: '20px 40px' }}/>
                    </div>
                </LocalizationProvider>
            </Form>
        </Container>
        </Modal>
    </div>
  )
}

export default ModalForm
