import {Component} from 'react'
import { Element, scroller } from 'react-scroll';
import { useEffect } from "react";

import Home from '../../components/Home'
import Features from '../../components/Features';
import AboutUs from '../../components/AboutUs'
import ContactUs from '../../components/ContactUs';

class ScrollablePage extends Component {
    componentDidMount() {
        // Get the search parameter from URL
        const params = new URLSearchParams(window.location.search);
        const scrollTo = params.get("scrollTo");
    
        // Scroll to the section if a target is specified
        if (scrollTo) {
          scroller.scrollTo(scrollTo, {
            smooth: true,
            duration: 500,
          });
        }
      }

    render(){
        return (
            <>
                <Element name="home-page">
                    <Home/>
                </Element>
                <Element name="features">
                    <Features/>
                </Element>
                <Element name="about-us">
                    <AboutUs/>
                </Element>
                <Element name="contact-us">
                    <ContactUs/>
                </Element>
            </>
        )
    }
    
}
export default ScrollablePage