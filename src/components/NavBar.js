import Navbar from "react-bootstrap/Navbar";
import logo2 from "../logo/five star logo final simplified 2.png";
import drop from "../logo/five star logo drop.png";
import Nav from 'react-bootstrap/Nav';
import React from "react";

export default function NavBar() {

    return (

        <Navbar collapseOnSelect expand="lg" className="navbar sticky-top flex-row-reverse flex-sm-row navbar-expand-xl navbar-light bg-light m-0">
            <Navbar.Brand className="navbar-text d-none d-sm-flex align-items-center"> <a
                className="nav-link headerText flex-row align-items-center scroll" href="#top">
                <span id="fiveStar"><img className="star align-text-center"
                                         src={logo2} alt="Five Star" /><span
                    id="five-text">Five Star</span></span> <span id="backServ">Backflow<img
                src={drop} alt="Water" className="drop" />Services</span></a>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarSupportedContent1" />
            <Navbar.Collapse className="collapse navbar-collapse" id="navbarSupportedContent1">
                <Nav className="navbar-nav mr-auto">
                    <Nav.Link className="nav-item border-bottom"><a className="nav-link scroll" href="#about">About</a></Nav.Link>
                    <Nav.Link className="nav-item border-bottom"><a className="nav-link scroll" href="#services">Services</a></Nav.Link>
                    <Nav.Link className="nav-item border-bottom"><a className="nav-link scroll" href="#testimonials">Testimonials</a></Nav.Link>
                    <Nav.Link className="nav-item border-bottom"><a className="nav-link scroll" href="#contact">Contact Us</a></Nav.Link>
                </Nav>
                <Nav className="navbar-text ms-auto" id="phone-numb">
                    <a className="nav-link" id="phone-number" href="tel:19165809834">Call <span className="d-none d-xl-inline-block">Today</span><span className="d-inline-bloc d-xl-none">Now</span> <i className="fas fa-phone"></i>
                        <br/>
                        <span className="d-none d-xl-inline-block" id="phone-num">916-580-9834</span>
                    </a>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}