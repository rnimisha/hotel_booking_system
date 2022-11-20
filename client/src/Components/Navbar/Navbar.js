// libraries and packages
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useLogout } from '../../hooks/useLogout'

import NavItem from '../NavItem/NavItem'

// styles
import { Logo, Menus, NavigationBar, LoggedUser } from './NavbarStyled'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import logoimg from '../../Assets/images/logo.png'

const Navbar = () => {
  const [colorChange, setColorchange] = useState(false)
  const userDetail = useSelector((state) => state.users)
  const { logOut } = useLogout()

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true)
    } else {
      setColorchange(false)
    }
  }
  window.addEventListener('scroll', changeNavbarColor)

  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

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
                {
                  userDetail.token.trim().length === 0
                    ? <NavItem colorChange={colorChange} path= '/login' >
                      Login
                      </NavItem>
                    : <NavItem colorChange={colorChange} path= '#' >
                      <LoggedUser
                      id="basic-button"
                      aria-controls={open ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      onClick={handleClick}>
                        <AccountCircleOutlinedIcon/> {userDetail.name}
                      </LoggedUser>
                      <Menu
                          id="basic-menu"
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                          MenuListProps={{
                            'aria-labelledby': 'basic-button'
                          }}
                        >
                          <MenuItem onClick={() => { logOut() }}>Logout</MenuItem>
                        </Menu>
                  </NavItem>
                }

            </Menus>
        </NavigationBar>
  )
}

export default Navbar
