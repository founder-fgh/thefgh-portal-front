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
                            <Logo src="https://res.cloudinary.com/dpamz1hsi/image/upload/v1737004049/lx8so2tsxcaaeujdtspk.png" alt="logo"/>
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