import styled from 'styled-components'

export const TopHeader = styled.div`
    position: relative;
    width: 100vw;
    /* height: 45vh; */
    height: ${props => (props.height)};
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
    z-index: 1295;
    opacity: 0.4;

`
export const Heading = styled.h3`
    margin-top: 50px;
    font-size : 5rem;
    font-family: 'Crimson Pro', serif;
    font-weight: 300;
`
