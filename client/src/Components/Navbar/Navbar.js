// libraries and packages
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import NavItem from '../NavItem/NavItem'

// styles
import { Logo, Menus, NavigationBar } from './NavbarStyled'

import logoimg from '../../Assets/images/logo.png'

const Navbar = () => {
  const [colorChange, setColorchange] = useState(false)

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true)
    } else {
      setColorchange(false)
    }
  }
  window.addEventListener('scroll', changeNavbarColor)

  return (
        <NavigationBar navStyle={colorChange ? 'color-nav' : 'video-nav'}>
            <Link to ='/'>
                <Logo onClick ={() => { setColorchange(false) }}>
                    <img src={logoimg} alt="AH" style={{ paddingTop: '10px' }} />
                </Logo>
            </Link>
            <Menus>
                <NavItem colorChange={colorChange} path= '/rooms' >
                    Rooms
                </NavItem>
                <NavItem colorChange={colorChange} path= '/rooms' >
                    Services
                </NavItem>
                <NavItem colorChange={colorChange} path= '/rooms' >
                    Gallery
                </NavItem>
                <NavItem colorChange={colorChange} path= '/login' >
                    Login
                </NavItem>
            </Menus>
        </NavigationBar>
  )
}

export default Navbar
