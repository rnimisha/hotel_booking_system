import React, {useState} from 'react'
import { Menus, NavigationBar, MenuItem } from './NavbarStyled';

const Navbar = () => {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
        if(window.scrollY >= 80){
        setColorchange(true);
        }
        else{
        setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
    return (
        <NavigationBar navStyle={colorChange ? 'color-nav' : 'video-nav'}>
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