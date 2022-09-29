// library and packages
import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'

// styles
import GlobalStyles from './Assets/styles/GlobalStylesStyled.js'

// components
import Navbar from './Components/Navbar/Navbar.js'
import Home from './Container/Home/Home.js'
import LoginRegister from './Container/LoginRegister/LoginRegister.js'
import RoomDetail from './Container/RoomDetail/RoomDetail.js'
import Rooms from './Container/Rooms/Rooms.js'
import ScrollToTop from './utils/ScrollToTop.js'

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
        <Navbar/>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/rooms' element={<Rooms/>}/>
          <Route path='/rooms/:id' element={<RoomDetail/>}/>
          <Route path='/login' element={<LoginRegister form='login'/>}/>
          <Route path='/register' element={<LoginRegister form='register'/>}/>
        </Routes>
      </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
