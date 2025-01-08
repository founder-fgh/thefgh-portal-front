import { Component } from "react";
import {Navbar, NavLink, Logo, MobNav, MobLink, Ham, Pop} from './styledComponents'
import Popup from 'reactjs-popup'
import { RxHamburgerMenu } from "react-icons/rx";
// import {IoMdClose} from 'react-icons/io'

import HeaderContext from "../../contexts/HeaderContext";

class Header extends Component{
    render(){
        return(
            <HeaderContext.Consumer>
                {value =>{
                    const {activeTab, changeTab} = value 
                    const onclickTab = (event) => {
                        changeTab(event.target.id)
                    }
                    return(
                        <Navbar className="navbar">
                            <Logo src="https://s3-alpha-sig.figma.com/img/883a/cd14/de88610e038a827a9c3f670853f0a65c?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DzDpXu5sdA6RLVZZmotediSLpTVmLHf~er-~2aJOHpyHKktC68NbmDU1yvN-hxUxaw5M55v1nqWQZdnGSz3FSz5Tf17iku8Jcop4Pd3KpNEaMbb0RKER8KPl0aO~VRaHZgl0P4zjBltEj2L~X12Bj8E47r~ffUeXak8lEE-I2JCMNzKq1PO0V74hOfE7PrCKbvkP~9Ly4cWSuqMTLBb-803aCLJalPRSVC4mSyqlJ2sO04JHHkC57hHtcKZCcXsAIHleE6oY2YHRA0kRjpUq4EWeywb9v1XKZWIv3FAATpsNuSd75B~sngrKyhJ2lzBAzBtPZkgyR8SOza-Wwbe0kw__" alt=""/>
                        <ul className="nav-links">
                            <NavLink 
                                onClick={onclickTab} 
                                status={activeTab==="home"} 
                                id="home" 
                                to="/">
                                    Home
                            </NavLink>
                            <NavLink 
                                onClick={onclickTab} 
                                status={activeTab==="features"} 
                                id="features" 
                                to="/features">
                                    Features
                            </NavLink>
                            <NavLink 
                                onClick={onclickTab} 
                                status={activeTab==="aboutUs"} 
                                id="aboutUs" 
                                to="/about-us">
                                    About Us
                            </NavLink>
                            <NavLink 
                                onClick={onclickTab} 
                                status={activeTab==="ourTeam"} 
                                id="ourTeam" 
                                to="/our-team">
                                    Our Team
                            </NavLink>
                            <NavLink 
                                onClick={onclickTab} 
                                status={activeTab==="faq"} 
                                id="faq" 
                                to="/faq">
                                    FAQ
                            </NavLink>
                            <NavLink 
                                onClick={onclickTab} 
                                status={activeTab==="contactUs"} 
                                id="contactUs" 
                                to="/contact-us">
                                    Contact Us
                            </NavLink>
                        </ul>
                        <Pop className="popup-container">
                            <Popup
                                trigger={
                                <Ham type="button" className="trigger-button">
                                    <RxHamburgerMenu />
                                </Ham>
                                }
                                position="bottom right"
                            >
                                <MobNav className="nav-links">
                                    <MobLink 
                                        onClick={onclickTab} 
                                        status={activeTab==="home"} 
                                        id="home" 
                                        to="/">
                                            Home
                                    </MobLink>
                                    <MobLink 
                                        onClick={onclickTab} 
                                        status={activeTab==="features"} 
                                        id="features" 
                                        to="/features">
                                            Features
                                    </MobLink>
                                    <MobLink 
                                        onClick={onclickTab} 
                                        status={activeTab==="aboutUs"} 
                                        id="aboutUs" 
                                        to="/about-us">
                                            About Us
                                    </MobLink>
                                    <MobLink 
                                        onClick={onclickTab} 
                                        status={activeTab==="ourTeam"} 
                                        id="ourTeam" 
                                        to="/our-team">
                                            Our Team
                                    </MobLink>
                                    <MobLink 
                                        onClick={onclickTab} 
                                        status={activeTab==="faq"} 
                                        id="faq" 
                                        to="/faq">
                                            FAQ
                                    </MobLink>
                                    <MobLink 
                                        onClick={onclickTab} 
                                        status={activeTab==="contactUs"} 
                                        id="contactUs" 
                                        to="/contact-us">
                                            Contact Us
                                    </MobLink>
                        </MobNav>
                            </Popup>
                        </Pop>
                    </Navbar>
                    )
                }}
            </HeaderContext.Consumer>
        )
    }
}

export default Header