import React from 'react'
import { Slogan, Heading } from '../Banner/BannerStyled'
import { ImgContainer, ImgOverlay, TopHeader } from './HeaderStyled'

const Header = ({ height, headerImg, text }) => {
  return (
    <TopHeader height={height}>
        <ImgContainer src={headerImg} />
        <ImgOverlay/>
        <Slogan>
          <Heading>
            {text}
          </Heading>
        </Slogan>
    </TopHeader>
  )
}

export default Header
