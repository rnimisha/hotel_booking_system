import styled from 'styled-components'

export const RoomContainer = styled.div`
    width: 80%; 
    margin-left: 10%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 3rem;
    color : #1f1f1f;
    margin-top: 2rem;
    color: #1f1f1f;
    min-height: 30vh;
    flex-wrap: wrap;
    padding: 20px 5px;
    @media (max-width: 960px) {
        width: 90%;
        margin-left: 5%;
        gap: 1.2rem;
    }
`
