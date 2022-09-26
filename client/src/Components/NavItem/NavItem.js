import React from 'react'
import { Link } from 'react-router-dom'

import { MenuItem } from '../Navbar/NavbarStyled'

const NavItem = (props) => {
  return (
        <Link to ={props.path} style={{ position: 'relative' }}>
            <MenuItem navStyle={props.colorChange ? 'color-nav' : 'video-nav'}>
                {props.children}
            </MenuItem>
        </Link>
  )
}

export default NavItem
