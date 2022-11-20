import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleOpen } from '../../features/modal/modalSlice'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// styles
import { InfoContainer, Price, Span } from './RoomInfoStyled'

// icons
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined'
import BedOutlinedIcon from '@mui/icons-material/BedOutlined'
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined'

// components
import Button from '../Button/Button'
import LogoText from '../LogoText/LogoText'

const RoomInfo = ({ data }) => {
  const dispatch = useDispatch()
  const userToken = useSelector((state) => state.users.token)
  const iconStyle = {
    fontSize: '2rem',
    stroke: '#ffffff',
    strokeWidth: 1
  }

  const handleClick = () => {
    if (userToken.trim().length === 0) {
      toast.warn('Login first!')
    } else {
      dispatch(handleOpen('bookingform'))
    }
  }
  return (
    <>
    <ToastContainer/>
    <InfoContainer>
      <h1 style={{
        color: '#877147',
        fontSize: '3rem'
      }}>
        {data.name}
      </h1>
      <span>
        <Price>
          Rs. {data.price}
        </Price>/night
      </span>
      <Span>
        {data.description}
      </Span>
      <hr style={{ border: '0.5px solid #877147' }}/>

      <LogoText
      icon = {<PeopleAltOutlinedIcon sx={iconStyle}/>}
      data= {data.capacity}
      text = 'Capacity'/>

      <LogoText
      icon = {<BedOutlinedIcon sx={iconStyle}/>}
      data= {data.bedrooms}
      text = 'Bedrooms'/>

      <LogoText
      icon = {<BathtubOutlinedIcon sx={iconStyle}/>}
      data= {data.bathrooms}
      text = 'Bathrooms'/>

      <div style={{ width: '90%', paddingTop: '10px' }}>
        <Button
        text="Book Now"
        styling = {{ padding: '20px 60px' }}
        clickEvent = {() => handleClick()}/>
      </div>
    </InfoContainer>
    </>

  )
}

export default RoomInfo
