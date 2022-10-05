import styled from 'styled-components'

export const InfoContainer = styled.div`
    width: 45%;
    min-height: 500px;
    border-left: 1.5px solid #877147;
    display: flex;
    flex-direction: column;
    padding: 10px 60px;
    gap: 1.5rem;
`

export const Price = styled.span`
    font-size: 2.5rem;
    font-weight: 300;
`
export const LogoDetail = styled.div`
    display: flex;
    align-items: center;
    /* gap: 4rem; */
    gap: ${props => props.gapping ? props.gapping : '4rem'}
`
export const Span = styled.span`
    font-size: 1.2rem;
    font-weight: 100;
`
