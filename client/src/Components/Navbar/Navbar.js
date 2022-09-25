// libraries and packages
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import NavItem from '../NavItem/NavItem';

//styles
import { Menus, NavigationBar} from './NavbarStyled';

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
            <Link to ='/'>
                <div>Logo</div>
            </Link>
            <Menus>
                <NavItem colorChange={colorChange} path= '/rooms'>
                    Rooms
                </NavItem>
                <NavItem colorChange={colorChange} path= '/rooms'>
                    Services
                </NavItem>
                <NavItem colorChange={colorChange} path= '/rooms'>
                    Gallery
                </NavItem>
                <NavItem colorChange={colorChange} path= '/rooms'>
                    Login
                </NavItem>
            </Menus>
        </NavigationBar>
    )
}

export default Navbar