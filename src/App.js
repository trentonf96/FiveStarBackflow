import './App.css';
import './css/layout.css';
import './css/styles.css';
import './css/animations.css';
import './js/fade.js';
import './js/fade2.js';
import './js/scroll.js';
import './js/stopAnime.js';
import './js/navbarCollapse.js';
import React from "react";
import logo1 from './logo/five star logo final 1-24-20.png';
import Container from 'react-bootstrap/Container';
import NavBar from "./components/NavBar";
import Slideshow from "./components/Slideshow";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

class App extends React.Component {

    render() {
        return (
            <div className="App" id="top">
                <Container fluid className="d-sm-none" id="Five Star Logo">
                    <header className="header" id="header">
                        <img src={logo1} className="logo img-fluid" alt="Five Star Backflow Logo" />
                    </header>
                </Container>

                <NavBar/>

                <Slideshow/>

                <About/>

                <Services/>

                <Testimonials/>

                <Contact/>
            </div>
        );
    };
}

export default App;
