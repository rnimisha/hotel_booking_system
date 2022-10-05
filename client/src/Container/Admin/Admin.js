import React, { useState } from 'react'

import SideNav from '../../Components/SideNav/SideNav'
import Title from '../../features/title/Title'
import { AdminContainer, InnerContainer, MainContainer } from './AdminStyled'

const Admin = () => {
  const [isToggleMenu, setIsToggleMenu] = useState(false)
  return (
    <AdminContainer>
        <SideNav isToggleMenu={isToggleMenu} setIsToggleMenu={setIsToggleMenu}/>
        <MainContainer style={{
          width: isToggleMenu ? '92vw' : '80vw'
        }}>
            <InnerContainer>
                <Title/>
            </InnerContainer>
        </MainContainer>

    </AdminContainer>
  )
}

export default Admin
