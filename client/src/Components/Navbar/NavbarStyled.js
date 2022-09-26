import styled from 'styled-components'

export const NavigationBar = styled.nav`
    z-index: 9999;
    position: fixed;
    right: 0;
    top: 0;
    width: 100vw;
    height: 10vh;
    background-color: ${props => (props.navStyle === 'color-nav' ? '#f7f7f7' : 'transparent')};
    color: ${props => (props.navStyle === 'color-nav' ? '#1f1f1f' : '#f7f7f7')};
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
    font-size: 1.1rem;
    font-weight: 400;
    color: ${props => (props.navStyle === 'color-nav' ? '#1f1f1f' : '#f7f7f7')};

    &:hover{
        color : #877147;
    }

    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: #877147;
        bottom: 0;
        left: 0;
        transform-origin: right;
        transform: scaleX(0);
        transition: transform .3s ease-in-out;
    }

    &:hover::before {
        transform-origin: left;
        transform: scaleX(1);
    }
`

export const Logo = styled.div`
    display: flex;
    justify-content: center;
    width: 120px;
    height: 100px;
`

export const MenuBtn = styled.div`
    font-size: 1.1rem;
    font-weight: 400;
    color : #f7f7f7; 
`
