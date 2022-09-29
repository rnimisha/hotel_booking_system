import React from 'react'

import Header from '../../Components/Header/Header'
import Form from '../../Components/Form/Form'
import headerImg from '../../Assets/images/header1.jpeg'

const Login = () => {
  return (
    <>
        <Header height='45vh' headerImg= {headerImg} />
        <Form formtype='login'/>
    </>
  )
}

export default Login
