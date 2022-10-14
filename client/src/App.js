// library and packages
import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'

// styles
import GlobalStyles from './Assets/styles/GlobalStylesStyled.js'

// components
// import Navbar from './Components/Navbar/Navbar.js'
import Home from './Container/Home/Home.js'
import LoginRegister from './Container/LoginRegister/LoginRegister.js'
import RoomDetail from './Container/RoomDetail/RoomDetail.js'
import Rooms from './Container/Rooms/Rooms.js'
import ScrollToTop from './utils/ScrollToTop.js'
import Admin from './Container/Admin/Admin.js'
import LayoutWithNav from './Components/Navbar/LayoutWithNav.js'
// import Room from './Container/Admin/Room/Room.js'

const theme = createTheme({
  typography: {
    fontFamily: [
      'Crimson Pro',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'serif'
    ].join(',')
  }
})

const App = () => {
  return (
    <>
     <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <BrowserRouter>
        {/* <Navbar/> */}
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<LayoutWithNav/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/rooms' element={<Rooms/>}/>
            <Route path='/rooms/:id' element={<RoomDetail/>}/>
            <Route path='/login' element={<LoginRegister form='Login'/>}/>
            <Route path='/register' element={<LoginRegister form='Register'/>}/>
          </Route>
          <Route path='admin' element={<Admin page='dashboard'/>}/>
          <Route path='admin/dashboard' element={<Admin page='dashboard'/>}/>
          <Route path='admin/bookings' element={<Admin page='booking'/>}/>
          <Route path='admin/room' element={<Admin page='room'/>}/>
          <Route path='admin/roomlist/:roomid' element={<Admin page='roomlist'/>}/>
          <Route path='admin/profile' element={<Admin page='profile'/>}/>
        </Routes>
      </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
