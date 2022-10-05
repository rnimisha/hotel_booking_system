import styled from 'styled-components'

export const SideNaviBar = styled.div`
    width: 20%;
    height: 100vh;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
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

export const List = styled.div`
    width: 80%;
    margin-left: 10%;
    font-size: 1.6rem;
    padding: 10px;
`
