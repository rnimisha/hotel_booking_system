import React from 'react'
import './Assets/styles/GlobalStylesStyled.js'
import GlobalStyles from './Assets/styles/GlobalStylesStyled.js'
import Navbar from './Components/Navbar/Navbar.js'

import Home from './Container/Home/Home.js'

const App = () => {
  return (
    <>
      <GlobalStyles/>
        <Navbar/>
        <Home/>
    </>
  )
}

export default App