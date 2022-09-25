import styled from 'styled-components'

export const MainBanner = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
`

export const VideoContainer = styled.video`
    position: absolute;
    right: 0;
    bottom: 0;
    min-width: 100%; 
    height: 100%;
`

export const VideoOverlay = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%; 
    height: 100%;
    background-color: black;
    z-index: 9995;
    opacity: 0.4;
`