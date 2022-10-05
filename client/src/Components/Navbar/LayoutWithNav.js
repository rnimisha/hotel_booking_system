import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const LayoutWithNav = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
    </>
  )
}

export default LayoutWithNav
