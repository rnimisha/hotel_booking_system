import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { ToastContainer } from 'react-toastify'

import Header from '../../Components/Header/Header'
import Form from '../../Components/Form/Form'
import headerImg from '../../Assets/images/header1.jpeg'

const LoginRegister = ({ form }) => {
  const userToken = useSelector((state) => state.users.token)
  const navigate = useNavigate()
  useEffect(() => {
    if (userToken.trim().length > 0) {
      navigate('/')
    }
  }, [])
  return (
    <>
      <ToastContainer/>
        <Header
        height='45vh'
        headerImg= {headerImg}
        text = {form}
        />

        {
          form === 'Login'
            ? <Form formtype='login'/>
            : <Form formtype='register'/>

        }

    </>
  )
}

export default LoginRegister
