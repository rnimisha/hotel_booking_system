import React from 'react'
import { ImgContainer, ImgOverlay, TopHeader } from './HeaderStyled'

const Header = ({ height, headerImg }) => {
  return (
    <TopHeader height={height}>
        <ImgContainer src={headerImg} />
        <ImgOverlay/>
    </TopHeader>
  )
}

export default Header
