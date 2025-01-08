import {Link} from 'react-router-dom'

import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";

import './index.css'

const Footer = () => (
    <div className='footer'>
        <div className='all-links-container'>
            <ul className='order'>
                <li>Terms</li>
                <li>Privacy</li>
            </ul>
            <ul>
                <li>Jobs</li>
                <li>Contests</li>
                <li>Services</li>
                <li>Help</li>
            </ul>
            <ul>
                <li>
                    <Link className="link" to="/about-us">About Us</Link>
                </li>
                <li>
                    <Link className="link" to="/our-team">Our Team</Link>
                </li> 
                <li>
                    <Link className="link" to="/features">Features</Link>
                </li>
                <li>
                    <Link className="link" to="/contact-us">Contact Us</Link>
                </li>
                <li className="contact-us-icons">
                    <a href="https://www.linkedin.com/company/thefgh/" target="_blank" rel="noreferrer">
                        <FaLinkedin className="icon-cu"/>
                    </a>
                    <a href="#" className="">
                        <FaSquareFacebook className="icon-cu"/>
                    </a>
                    <a href="#" className="">
                        <FaInstagram className="icon-cu"/>
                    </a>
                    <a href="#" className="">
                        <FaTwitter className="icon-cu"/>
                    </a>
                </li>
            </ul>
            <ul className='sp'>
                <li>@thefgh.in</li>
            </ul>
        </div>
    </div>
)

export default Footer