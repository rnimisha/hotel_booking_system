import React from 'react'
import { MainBanner , VideoContainer, VideoOverlay} from './BannerStyled'
import bannerVideo from '../../Assets/images/firebanner.mp4'

const Banner = () => {
  return (
    <MainBanner>
        <VideoContainer muted loop="true" autoPlay = "autoPlay">
            <source src={bannerVideo} type="video/mp4"/>
            Your browser does not support HTML5 video.
        </VideoContainer>
        <VideoOverlay/>
    </MainBanner>
  )
}

export default Banner