import styled from 'styled-components'

export const RoomBox = styled.div`
    width: 30%;
    height: 600px;
    /* background-color: #ececec; */
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;
`
export const RoomImg = styled.img`
    width: 100%;
    height: 70%;

`

export const RoomName = styled.h2`
    font-size: 2rem;
    color: #877147;
    font-weight: 300;
`

export const Info = styled.p`
    color: #877147;
    font-weight: 200;
    margin-top: -5px;
    font-style: italic;
`
export const Price = styled.div`
    position: absolute;
    left: 0;
    top: 50%;
    background-color: #877147;
    color: #f7f7f7;
    width: 40%;
    height: 50px;
    display: flex;
    justify-content: center;
    font-size: 1.3rem;
    align-items: center;
`
