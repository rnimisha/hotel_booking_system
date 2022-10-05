import React from 'react'
import SideNav from '../../Components/SideNav/SideNav'
import { AdminContainer, MainContainer } from './AdminStyled'

const Admin = () => {
  return (
    <AdminContainer>
        <SideNav/>
        <MainContainer/>
    </AdminContainer>
  )
}

export default Admin
