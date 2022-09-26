import React from 'react'
import { ImgContainer, ImgOverlay, TopHeader } from './HeaderStyled'

import headerImg from '../../Assets/images/img1.jpeg'

const Header = () => {
  return (
    <TopHeader>
        <ImgContainer src={headerImg} />
        <ImgOverlay/>
    </TopHeader>
  )
}

export default Header
