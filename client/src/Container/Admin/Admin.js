import React, { useState } from 'react'

import SideNav from '../../Components/SideNav/SideNav'
import Title from '../../features/title/Title'
import { AdminContainer, InnerContainer, MainContainer } from './AdminStyled'
import Room from './Room/Room'
import RoomList from './RoomList/RoomList'
import Booking from './Booking/Booking'
import Profile from './Profile/Profile'

const Admin = ({ page }) => {
  const [isToggleMenu, setIsToggleMenu] = useState(false)
  console.log(page)
  return (
    <AdminContainer>
        <SideNav isToggleMenu={isToggleMenu} setIsToggleMenu={setIsToggleMenu}/>
        <MainContainer style={{
          width: isToggleMenu ? '92vw' : '80vw'
        }}>
            <InnerContainer>
                <Title/>
                {page === 'room' && <Room/>}
                {page === 'roomlist' && <RoomList/>}
                {page === 'booking' && <Booking/>}
                {page === 'profile' && <Profile/>}
            </InnerContainer>
        </MainContainer>

    </AdminContainer>
  )
}

export default Admin
