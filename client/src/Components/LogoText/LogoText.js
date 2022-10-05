import React from 'react'

import { LogoDetail, Span } from '../RoomInfo/RoomInfoStyled'

const LogoText = ({ icon, data, text, gapping }) => {
  return (
    <LogoDetail gapping={gapping}>
        {icon}
        <Span>{ data} {text}
        </Span>
    </LogoDetail>
  )
}

export default LogoText
