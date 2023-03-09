import Container from "react-bootstrap/Container";
import {Card, Row} from "react-bootstrap";
import info1 from "../images/Test Kit 1-1.jpg";
import info2 from "../images/IMG-0139.jpg";
import info3 from "../images/New bags 1-1.jpg";
import React from "react";

export default function Services() {

    return (

        <Container fluid className="services" id="services">
            <Container>
                <h1 className="display-4 text-start"><i className="fas fa-toolbox"></i>Services</h1>
                <hr/>
                <Row>
                    <Card className="border-0 px-4 my-4 col-lg-4 col-12 appear2">
                        <Row className="justify-content-center">
                            <div className="col-10">
                                <img src={info1} className="rounded-circle img-fluid card-img-top" alt="Test Kit" />
                            </div>
                        </Row>
                        <Card.Body className="text-dark">
                            <h4 className="card-title text-center my-2">Testing</h4>
                            <p className="card-text">We are here to help you comply, in a timely manner, with the Annual testing
                                and documentation
                                requirements of your local water purveyor. We are competitively priced and have a unique knowledge
                                of backflow assemblies and equipment, such as fire alarm control panels, domestic water pump systems
                                that may be affected in the process of testing. This helps to minimize problems that can arise after
                                testing your backflow assemblies.</p>
                        </Card.Body>
                    </Card>
                    <Card className="border-0 px-4 my-4 col-lg-4 col-12 appear2">
                        <Row className="justify-content-center">
                            <div className="col-10">
                                <img src={info2} className="rounded-circle img-fluid card-img-top" alt="Backflow Replacement" />
                            </div>
                        </Row>
                        <Card.Body className="text-dark">
                            <h4 className="card-title text-center my-2">Repairs/Replacements</h4>
                            <p className="card-text">Backflow assemblies are an investment. We are experienced in the repair of
                                virtually all makes and
                                models of backflow assemblies, from ½” through 10”. That experience will be used to try to assist
                                you in
                                extending or exceeding the expected working lifespan of your assembly. When your assembly can no
                                longer be repaired or financially it does not make sense to repair the device, we can replace your
                                backflow assembly, ensuring that the new device complies with your water purveyor’s various
                                requirements.</p>
                        </Card.Body>
                    </Card>
                    <Card className="border-0 px-4 my-4 col-lg-4 col-12 appear2">
                        <Row className="justify-content-center">
                            <div className="col-10">
                                <img src={info3} className="rounded-circle img-fluid card-img-top" alt="Backflow Insulated Covers" />
                            </div>
                        </Row>
                        <Card.Body className="text-dark">
                            <h4 className="card-title text-center my-2">Backflow Covers</h4>
                            <p className="card-text">Backflow covers provide a means to protect your backflow assembly
                                investment from freezes and the elements, with an additional benefit of being a deterrent from
                                theft. Five Star Backflow Services can provide standard cover sizes or custom sizes and even
                                custom colors to meet your unique needs. Our backflow insulated covers are durable, made
                                with weatherproof materials that are UV resistant and cold resistant. Anti-theft grommets are
                                installed on the covers as a deterrent to theft and easy removal.</p>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </Container>
    );
}