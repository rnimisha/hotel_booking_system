import React from 'react'
import { MainBanner , Slogan, VideoContainer, VideoOverlay, Heading} from './BannerStyled'
import bannerVideo from '../../Assets/images/firebanner.mp4'
import Button from '../Button/Button'

const Banner = () => {
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
          <Button text='Book Now'/>
        </Slogan>
    </MainBanner>
  )
}

export default Banner