import React from 'react'

// styles
import { InfoContainer, Price, Span } from './RoomInfoStyled'

// icons
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined'
import BedOutlinedIcon from '@mui/icons-material/BedOutlined'
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined'

// components
import Button from '../Button/Button'
import LogoText from '../LogoText/LogoText'

const RoomInfo = ({ data, handleOpen }) => {
  const iconStyle = {
    fontSize: '2rem',
    stroke: '#ffffff',
    strokeWidth: 1
  }
  return (
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
        clickEvent = {handleOpen}/>
      </div>
    </InfoContainer>
  )
}

export default RoomInfo
