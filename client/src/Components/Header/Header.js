import React from 'react'
import { ImgContainer, ImgOverlay, TopHeader } from './HeaderStyled'

import headerImg from '../../Assets/images/img1.jpeg'

const Header = ({ height }) => {
  return (
    <TopHeader height={height}>
        <ImgContainer src={headerImg} />
        <ImgOverlay/>
    </TopHeader>
  )
}

export default Header
