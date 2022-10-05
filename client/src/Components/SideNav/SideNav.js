import React from 'react'

// styles
import { LogoHeader, SideNavBar, LogoContainer, ToggleBtn, NavList, NavELement } from './SideNavStyled'

// image
import logoimg from '../../Assets/images/logo.png'

// icons
import SubjectIcon from '@mui/icons-material/Subject'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined'
import NightShelterOutlinedIcon from '@mui/icons-material/NightShelterOutlined'
import LightOutlinedIcon from '@mui/icons-material/LightOutlined'
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'

// components
import LogoText from '../LogoText/LogoText'

const SideNav = ({ isToggleMenu, setIsToggleMenu }) => {
  return (
    <SideNavBar style={{
      width: isToggleMenu ? '8vw' : '20vw'
    }}>
        <LogoHeader>
            {!isToggleMenu && <LogoContainer style={{ marginTop: '10px' }}>
                <img src={logoimg} alt="logo" style={{ height: '80px', width: '100px', cursor: 'pointer' }}/>
            </LogoContainer>}

            <ToggleBtn onClick = {() => { setIsToggleMenu(!isToggleMenu) }}>
                <SubjectIcon sx={{
                  fontSize: '2.3rem',
                  fontWeight: '100',
                  backgroundColor: '#d4cec3',
                  padding: '6px',
                  borderRadius: '50px',
                  color: '#877147',
                  cursor: 'pointer',
                  '&:hover': {
                    color: '#f1f1f1'
                  }
                }}/>
            </ToggleBtn>
        </LogoHeader>
        <NavList>
            <NavELement to ='/admin'>
                <LogoText
                icon={<GridViewOutlinedIcon/>}
                data={isToggleMenu ? '' : 'Dashboard'}
                text=''
                gapping='1rem'/>
            </NavELement>
            <NavELement to ='admin/bookings'>

                    <LogoText
                    icon={<NightShelterOutlinedIcon/>}
                    data={isToggleMenu ? '' : 'Bookings'}
                    text=''
                    gapping='1rem'/>

            </NavELement>
            <NavELement to ='admin/rooms'>

                    <LogoText
                    icon={<LightOutlinedIcon/>}
                    data={isToggleMenu ? '' : 'Rooms'}
                    text=''
                    gapping='1rem'/>

            </NavELement>
            <NavELement to ='admin/profile'>

                    <LogoText
                    icon={<ManageAccountsOutlinedIcon/>}
                    data={isToggleMenu ? '' : 'Profile'}
                    text=''
                    gapping='1rem'/>

            </NavELement>
            <NavELement to ='/logout'>

                    <LogoText
                    icon={<LogoutOutlinedIcon/>}
                    data={isToggleMenu ? '' : 'Logout'}
                    text=''
                    gapping='1rem'/>

            </NavELement>
        </NavList>
    </SideNavBar>
  )
}

export default SideNav
