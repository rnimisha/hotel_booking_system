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

export const Slogan = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%; 
    height: 100%;
    color : #fff;
    z-index: 9996;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    color : #f7f7f7;
`

export const Heading = styled.h1`
    font-size : 4rem;
    font-family: 'Crimson Pro', serif;
    font-weight: 300;
`