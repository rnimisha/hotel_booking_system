import React from 'react'

import { LogoDetail, Span } from '../RoomInfo/RoomInfoStyled'

const LogoText = ({ icon, data, text }) => {
  return (
    <LogoDetail>
        {icon}
        <Span>{ data} {text}
        </Span>
    </LogoDetail>
  )
}

export default LogoText
