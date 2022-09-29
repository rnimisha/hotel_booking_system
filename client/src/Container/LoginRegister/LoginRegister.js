import React from 'react'

import Header from '../../Components/Header/Header'
import Form from '../../Components/Form/Form'
import headerImg from '../../Assets/images/header1.jpeg'

const LoginRegister = ({ form }) => {
  return (
    <>
        <Header height='45vh' headerImg= {headerImg} />

        {
          form === 'login'
            ? <Form formtype='login'/>
            : <Form formtype='register'/>

        }

    </>
  )
}

export default LoginRegister
