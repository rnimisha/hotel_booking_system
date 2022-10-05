import React from 'react'

// styles
import { LogoHeader, SideNaviBar, LogoContainer, ToggleBtn, NavList, List } from './SideNavStyled'

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

const SideNav = () => {
  return (
    <SideNaviBar>
        <LogoHeader>
            <LogoContainer style={{ marginTop: '10px' }}>
                <img src={logoimg} alt="logo" style={{ height: '80px', width: '100px' }}/>
            </LogoContainer>
            <ToggleBtn>
                <SubjectIcon style={{
                  fontSize: '2.3rem',
                  fontWeight: '100',
                  backgroundColor: '#d4cec3',
                  padding: '6px',
                  borderRadius: '50px',
                  color: '#877147'
                }}/>
            </ToggleBtn>
        </LogoHeader>
        <NavList>
            <List>
                <LogoText icon={<GridViewOutlinedIcon/>} data='Dashboard' text='' gapping='1rem'/>
            </List>
            <List>
                <LogoText icon={<NightShelterOutlinedIcon/>} data='Bookings' text='' gapping='1rem'/>
            </List>
            <List>
                <LogoText icon={<LightOutlinedIcon/>} data='Rooms' text='' gapping='1rem'/>
            </List>
            <List>
                <LogoText icon={<ManageAccountsOutlinedIcon/>} data='Profile' text='' gapping='1rem'/>
            </List>
            <List>
                <LogoText icon={<LogoutOutlinedIcon/>} data='Logout' text='' gapping='1rem'/>
            </List>
        </NavList>
    </SideNaviBar>
  )
}

export default SideNav
