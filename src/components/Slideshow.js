import React from "react";
import {Carousel} from "react-bootstrap";
import slide1 from "../images/New Install Cropped 3-1.png";
import slide2 from "../images/New Install 16-9.png";
import slide3 from "../images/ReplacementAfter(2) 3-1.png";
import slide4 from "../images/ReplacementAfter(2) 16-9.png";
import slide5 from "../images/New bags3 3-1.png";
import slide6 from "../images/New bags3 16-9.png";

export default function Slideshow() {

    return (

        <Carousel indicators={false} slide={true} id="carousel" className="carousel" data-bs-ride="carousel">
            <Carousel.Item className="carousel-item active">
                <img className="d-none w-100 d-xl-block mx-auto img-fluid" src={slide1} alt="Backflow Testing" />
                <img className="d-block w-100 d-xl-none mx-auto img-fluid" src={slide2} alt="First slide" />
                <Carousel.Caption className="carousel-caption">
                    <h2>Looking for Quality Backflow Testing Services?</h2>
                    <a className="btn btn-outline-light btn-md mt-4 scroll" href="#contact" role="button">Contact Us For More Info</a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
                <img className="d-none w-100 d-xl-block mx-auto img-fluid" src={slide3} alt="Backflow repair and replacement" />
                <img className="d-block w-100 d-xl-none mx-auto img-fluid" src={slide4} alt="Second slide" />
                <Carousel.Caption className="carousel-caption">
                    <h2>In Need Of a Backflow Repair or Replacement?</h2>
                    <a className="btn btn-outline-light btn-md mt-4 scroll" href="#contact" role="button">Contact Us For More Info</a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
                <img className="d-none w-100 d-xl-block mx-auto img-fluid" src={slide5} alt="Large backflow cover" />
                <img className="d-block w-100 d-xl-none mx-auto img-fluid" src={slide6} alt="Third slide" />
                <Carousel.Caption className="carousel-caption">
                    <h2>Need Backflow Covers?</h2>
                    <a className="btn btn-outline-light btn-md mt-4 scroll" href="#contact" role="button">Contact Us For More Info</a>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}