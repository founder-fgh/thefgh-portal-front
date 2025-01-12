import { Component } from "react";
import emailjs from "@emailjs/browser";

import { CiMail, CiLinkedin } from "react-icons/ci";
import { RiFacebookBoxLine } from "react-icons/ri";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

import Header from "../Header";
import Footer from '../Footer'

import './index.css'

class ContactUs extends Component{
    state = {
        firstName: "",
        lastName: "",
        email:"",
        thoughts: "",
    }

    onChangeFirstName = (event) => {
        this.setState({firstName: event.target.value})
    }

    onChangeSecondName = (event) => {
        this.setState({lastName: event.target.value})
    }

    onChangeEmail = (event) => {
        this.setState({email: event.target.value})
    }

    onChangeThoughts = (event) => {
        this.setState({thoughts: event.target.value})
    }

    submitForm = async (event) => {
        // event.preventDefault();
        // const { firstName, lastName, email, thoughts } = this.state;
        // console.log("submit clicked")
    
        // const userAnswers = { firstName, lastName, email, thoughts };
        // let formData = new FormData(event.target);
        // formData = {...formData, userAnswers};
        // const object = Object.fromEntries(formData);
        // console.log(object)
    };
    

    render(){
        const {firstName, lastName, email, thoughts} = this.state
        return (
            <>
            <Header/>
            <div className="contact-us">
                <div className="contact-left">
                    <h1>Get in Touch with Us</h1>
                    <p>We’re here to help. Let us know how we can assist you</p>
                    <div className="icon-cont">
                        <a href="https://www.linkedin.com/company/thefgh/" target="_blank" rel="noreferrer">
                            <CiLinkedin className="icon-1"/>
                        </a>
                        <a href="#" className="">
                            <RiFacebookBoxLine className="icon-1"/>
                        </a>
                        <a href="#" className="">
                            <FaInstagramSquare className="icon-1"/>
                        </a>
                        <a href="#" className="">
                            <FaTwitterSquare className="icon-1"/>
                        </a>
                    </div>
                </div>
                <div className="contact-right">
                    <form className="contact-form" action="https://api.web3forms.com/submit" method="POST">
                    <input type="hidden" name="access_key" value="c0650b2d-a005-4619-9d43-e4ee05e14175"></input>
                        <div className="form-row">
                            <input 
                            name= "first name"
                            value={firstName}
                            onChange={this.onChangeFirstName}
                            type="text" placeholder="First Name" className="input-field" />
                            <input 
                            name="last name"
                            value={lastName}
                            onChange={this.onChangeSecondName} type="text" placeholder="Last Name" className="input-field" />
                        </div>
                        <input 
                            name= "email"
                            value={email}
                            onChange={this.onChangeEmail}
                            type="email" placeholder="Email" className="input-field full-width" />
                        <textarea 
                            name="message"
                            value={thoughts}
                            onChange={this.onChangeThoughts}
                            placeholder="Write your thoughts..." rows='60' cols='60' className="textarea-field"></textarea>
                        <button type="submit" className="submit-button">Submit</button>
                    </form>
                </div>
            </div>
            <Footer/>
            </>
        )
    }
}

export default ContactUs