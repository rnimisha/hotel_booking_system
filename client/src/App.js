// library and packages
import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'

// styles
import GlobalStyles from './Assets/styles/GlobalStylesStyled.js'

// components
import Navbar from './Components/Navbar/Navbar.js'
import Home from './Container/Home/Home.js'
import Login from './Container/Login/Login.js'
import Register from './Container/Register/Register.js'
import RoomDetail from './Container/RoomDetail/RoomDetail.js'
import Rooms from './Container/Rooms/Rooms.js'

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
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/rooms' element={<Rooms/>}/>
          <Route path='/rooms/:id' element={<RoomDetail/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
