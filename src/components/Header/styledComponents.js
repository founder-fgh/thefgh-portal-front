import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Navbar = styled.nav `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 3vw;
    padding-right: 3vw;
    background-color: #2a3543;
    color: #d9d9d9
`

export const NavLink = styled(Link)`
    display: none;
    @media screen and (min-width: 768px){
        display: inline;
        text-decoration: none;
        margin-right: 10px;
        margin-left: 10px;
        font-weight: 700;
        color: ${props => props.status? '#4379d5' : '#d9d9d9'};
}
`

export const Logo = styled.img `
    height: 60px;
    margin: 0;
    padding: 0;
    @media screen and (min-width: 768px){
        height: 80px;
    }
`
export const MobNav = styled.ul `
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 10px;
    @media screen and (min-width: 768px){
        display: none;
    }
`

export const MobLink = styled(Link)`
    color: ${props => props.status? '#4C9CFD' : '#181E27'};
    text-decoration: none;
    margin: 6px;
    font-size: 16px;
`
export const Ham = styled.button`
    border: 0;
    background-color: transparent;
    color: #fff;
    font-size: 28px;
    @media screen and (min-width: 768px){
        display: none;
    }
`
export const Pop = styled.div`
    @media screen and (min-width: 768px){
        display: none;
    }
`