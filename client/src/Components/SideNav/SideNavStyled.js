import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const SideNavBar = styled.div`
    height: 100vh;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    width: 20vw;
    @media (max-width: 800px) {
       width: 10vw;
    }
     @media (max-width: 680px) {
       width: 15vw;
    }
     @media (max-width: 460px) {
       width: 20vw;
    }
`
export const LogoHeader = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const LogoContainer = styled.div`
    width: 80%;
    display: flex;
    justify-content: start;
    align-items: center;
    padding-left: 30px;
`
export const ToggleBtn = styled(LogoContainer)`
    width: 20%;
    height: 100%;
    padding-left: 0px;
    padding-right: 30px;
`
export const NavList = styled.div`
    display: flex;
    justify-content: start;
    flex-direction: column;
    height: 90vh;
    padding-top: 5vh;
    gap: 1rem;
`

export const NavELement = styled(NavLink)`
    width: 76%;
    margin-left: 12%;
    font-size: 1.6rem;
    padding: 15px 20px;
    cursor: pointer;
    font-weight: 500;
    border-radius: 18px;
    color: #171717;
    background-color: transparent;
    font-size: 4rem !important;
    
    &:hover {
        background-color: #f1f1f1;
        color: #877147;
    }

    &.active {
        color: #877147;
        background-color: #d4cec3;
        &:hover {
            background-color: #f1f1f1;
            color: #877147;
        }
  }
`
