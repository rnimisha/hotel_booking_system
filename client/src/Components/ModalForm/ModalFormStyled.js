import styled from 'styled-components'

export const Form = styled.form`
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 1.3rem;
    width: 80%;
    margin-left: 10%;
`

export const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 40%;
    min-height: 70%;
    border-radius: 20px;
    box-shadow: 24;
    padding: 40px;
    background-color: #f7f7f7;
`
export const TotalContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const FormHeading = styled.h1`
    text-align: center;
    font-weight: 100;
    color: #877147;
`
