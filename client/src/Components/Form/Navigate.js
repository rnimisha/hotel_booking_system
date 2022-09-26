import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Span } from './FormStyle'

const Navigate = (props) => {
  const navitage = useNavigate()

  const changePath = () => {
    navitage('/' + props.path)
  }
  return (
    <>
        <span> {props.msg}</span>
        <Span onClick={changePath}>{props.path}</Span>
    </>
  )
}

export default Navigate
