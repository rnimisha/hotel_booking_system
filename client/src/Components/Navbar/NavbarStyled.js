import styled from "styled-components";

export const NavigationBar = styled.nav`
    z-index: 9999;
    position: fixed;
    right: 0;
    top: 0;
    width: 100vw;
    height: 10vh;
    /* background-color: transparent; */
    display: flex;
    justify-content: space-between;
    font-size: 2.5rem;
    padding: 10px 100px;
    align-items: center;
`

export const Menus = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 2.5rem;
`

export const MenuItem = styled.div`
    font-size: 1.5rem;
`