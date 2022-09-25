import React from 'react'
import { Menus, NavigationBar, MenuItem } from './NavbarStyled';

const Navbar = () => {
    return (
        <NavigationBar>
            <div>L R</div>
            <Menus>
                <MenuItem>Rooms</MenuItem>
                <MenuItem>Services</MenuItem>
                <MenuItem>About</MenuItem>
                <MenuItem>Book Now</MenuItem>
            </Menus>
        </NavigationBar>
    )
}

export default Navbar