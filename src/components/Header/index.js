import { Component } from "react";
// import {useNavigate} from 'react-router-dom'
import Popup from 'reactjs-popup'
import { RxHamburgerMenu } from "react-icons/rx";

import {Navbar,MobBtn, Btn, NavLink, Logo, MobNav, MobLink, Ham, Pop} from './styledComponents'

import HeaderContext from "../../contexts/HeaderContext";

class Header extends Component{
    handleNavigation = (section) => {
        window.location.href = `/?scrollTo=${section}`;
      };
    
    render(){
        return(
            <HeaderContext.Consumer>
                {value =>{
                    const {activeTab, changeTab} = value 
                    const onclickBtn = (event) => {
                        console.log(event.target.id)
                        this.handleNavigation(event.target.id)
                        changeTab(event.target.id)
                    }
                    const onclickTab = (event) => {
                        changeTab(event.target.id)
                    }
                    return(
                        <Navbar className="navbar">
                            <Logo src="https://res.cloudinary.com/dpamz1hsi/image/upload/v1737004049/lx8so2tsxcaaeujdtspk.png" alt="logo"/>
                        <ul className="nav-links">
                            <NavLink 
                                onClick={onclickTab} 
                                status={activeTab==="Home"} 
                                id="Home" 
                                to="/">
                                    Home
                            </NavLink>
                            <Btn id="features" status={activeTab==="features"}  onClick={onclickBtn}>
                                Features
                            </Btn>
                            <Btn id="about-us" status={activeTab==="about-us"}  onClick={onclickBtn}>
                                About Us
                            </Btn>
                            <Btn id="faq" status={activeTab==="faq"}  onClick={onclickBtn}>
                                FAQ
                            </Btn>
                            <NavLink 
                                onClick={onclickTab} 
                                status={activeTab==="ourTeam"} 
                                id="ourTeam" 
                                to="/our-team">
                                    Our Team
                            </NavLink>
                            <Btn id="contact-us" status={activeTab==="contact-us"}  onClick={onclickBtn}>
                                Contact Us
                            </Btn>
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
                                    <MobBtn id="features" status={activeTab==="features"}  onClick={onclickBtn}>
                                        Features
                                    </MobBtn>
                                    <MobBtn id="about-us" status={activeTab==="about-us"}  onClick={onclickBtn}>
                                        About Us
                                    </MobBtn>
                                    <MobBtn id="faq" status={activeTab==="faq"}  onClick={onclickBtn}>
                                        FAQ
                                    </MobBtn>
                                    <MobLink 
                                        onClick={onclickTab} 
                                        status={activeTab==="ourTeam"} 
                                        id="ourTeam" 
                                        to="/our-team">
                                            Our Team
                                    </MobLink>
                                    <MobBtn 
                                        onClick={onclickBtn} 
                                        status={activeTab==="contactUs"} 
                                        id="contact-us" 
                                        to="contact-us">
                                            Contact Us
                                    </MobBtn>
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