import { Component } from "react";

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
        event.preventDefault();
        const { firstName, lastName, email, thoughts } = this.state;
    
        const userAnswers = { firstName, lastName, email, thoughts };
        try {
            const response = await fetch('http://localhost:5000/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userAnswers),
            });
    
            if (response.ok) {
                this.setState({
                    firstName: '',
                    lastName: '',
                    email: '',
                    thoughts: '',
    
                });
                alert('Form submitted successfully!');
            } else {
                const { message } = await response.json();
                alert(`Error: ${message}`);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Something went wrong. Please try again.');
        }
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
                    <form onSubmit={this.submitForm} className="contact-form">
                        <div className="form-row">
                            <input 
                            value={firstName}
                            onChange={this.onChangeFirstName}
                            type="text" placeholder="First Name" className="input-field" />
                            <input 
                            value={lastName}
                            onChange={this.onChangeSecondName} type="text" placeholder="Last Name" className="input-field" />
                        </div>
                        <input 
                            value={email}
                            onChange={this.onChangeEmail}
                            type="email" placeholder="Email" className="input-field full-width" />
                        <textarea 
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