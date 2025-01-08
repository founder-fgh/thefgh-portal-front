// @import url('https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap');
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'

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
    @media screen and (min-width: 768px){
        display: none;
    }
`
export const Pop = styled.div`
    @media screen and (min-width: 768px){
        display: none;
    }
`