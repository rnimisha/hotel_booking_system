import styled from 'styled-components'

export const MainButton = styled.button`
    /* padding: 24px 30px; */
    padding: ${props => props.padding};
    border-radius: 10px;
    font-size: 1.1rem;
    background-color: #877147;
    border: none;
    color : #f7f7f7;
    cursor: pointer;
    transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;
    align-items: center;
    border: 0 solid #E2E8F0;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    /* height: 56px; */
    line-height: 24px;
    overflow-wrap: break-word;
    text-decoration: none;
    width: auto;
    touch-action: manipulation;
    display: inline-flex;
    justify-content: center;
    font-family: 'Crimson Pro', serif;
    

    &:hover{
        background-color: #fff;
        color : #877147;
        
    }
    
`
