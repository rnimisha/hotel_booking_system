import styled from 'styled-components'

export const TopHeader = styled.div`
    position: relative;
    width: 100vw;
    height: 45vh;
`

export const ImgContainer = styled.img`
    position: absolute;
    right: 0;
    bottom: 0;
    min-width: 100%; 
    height: 100%;
`
export const ImgOverlay = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%; 
    height: 100%;
    background-color: black;
    z-index: 9995;
    opacity: 0.4;

`
