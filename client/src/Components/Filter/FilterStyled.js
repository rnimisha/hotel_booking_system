import styled from 'styled-components'

export const FilterBox = styled.div`
    width: 60%; 
    min-height: 20vh;
    margin-left: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    color : #1f1f1f;
    background-color: #ececec;
    border-radius: 30px;
    margin-top: 2rem;
    color: #1f1f1f;

    @media (max-width: 960px) {
        width: 90%;
        margin-left: 5%;
        flex-wrap:wrap;
        padding: 15px 10px;
    }
`
