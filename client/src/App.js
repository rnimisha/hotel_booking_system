//library and packages
import React from 'react'
import {Route, Routes, BrowserRouter} from 'react-router-dom'

//styles
import GlobalStyles from './Assets/styles/GlobalStylesStyled.js'

//components
import Navbar from './Components/Navbar/Navbar.js'
import Home from './Container/Home/Home.js'

const App = () => {
  return (
    <>
      <GlobalStyles/>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App