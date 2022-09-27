import React from 'react'

// styles
import { InfoContainer, LogoDetail, Price, Span } from './RoomInfoStyled'

// icons
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined'
import BedOutlinedIcon from '@mui/icons-material/BedOutlined'
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined'

// components
import Button from '../Button/Button'

const RoomInfo = ({ data }) => {
  const iconStyle = {
    fontSize: '2rem',
    stroke: '#ffffff',
    strokeWidth: 1
  }
  return (
    <InfoContainer>
      <h1 style={{ color: '#877147', fontSize: '3rem' }}>{data.name}</h1>
      <span><Price>Rs. {data.price}</Price>/night</span>
      <Span>{data.description}</Span>

      <hr style={{ border: '0.5px solid #877147' }}/>
      <LogoDetail> <PeopleAltOutlinedIcon sx={iconStyle}/><Span> {data.capacity} Capacity </Span> </LogoDetail>
      <LogoDetail> <BedOutlinedIcon sx={iconStyle}/> <Span>{ data.bedrooms} Bedrooms </Span></LogoDetail>
      <LogoDetail> <BathtubOutlinedIcon sx={iconStyle}/><Span> {data.bathrooms} Bathrooms </Span> </LogoDetail>
      <div style={{ width: '90%', paddingTop: '10px' }}>
        <Button text="Book Now" styling = {{ padding: '20px 60px' }}/>
      </div>
    </InfoContainer>
  )
}

export default RoomInfo
