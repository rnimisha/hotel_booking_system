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
    min-height: 100%;
`

export const VideoOverlay = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%; 
    height: 100%;
    background-color: black;
    z-index: 1297;
    opacity: 0.4;

`

export const Slogan = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%; 
    height: 100%;
    color : #fff;
    z-index: 1298;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    color : #f7f7f7;
`

export const Heading = styled.h1`
    margin-top: 50px;
    font-size: clamp(1.8rem, -2.2rem + 12.8vw, 5rem);
    font-family: 'Crimson Pro', serif;
    font-weight: 300;
`
