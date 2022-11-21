import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MainBanner, Slogan, VideoContainer, VideoOverlay, Heading } from './BannerStyled'
import bannerVideo from '../../Assets/images/firebanner.mp4'
import Button from '../Button/Button'

const Banner = () => {
  const navigate = useNavigate()
  const redirectPage = () => {
    navigate('/rooms')
  }
  return (
    <MainBanner>
        <VideoContainer muted loop="true" autoPlay = "autoPlay">
            <source src={bannerVideo} type="video/mp4"/>
            Your browser does not support HTML5 video.
        </VideoContainer>
        <VideoOverlay/>
        <Slogan>
          <Heading>
            A NEW VISION OF COMFORT
          </Heading>
          <Button text='Book Now' styling = {{ padding: '20px 30px' }} clickEvent={redirectPage}/>
        </Slogan>
    </MainBanner>
  )
}

export default Banner
