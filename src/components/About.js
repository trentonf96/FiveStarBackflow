import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import React from "react";

export default function About() {

    return (

        <Container fluid className="mt-3" id="about">
            <Container>
                <h1 className="display-4 text-start my-2"><i className="fas fa-user-friends"></i>About Us</h1>
                <hr/>
                <Row className="justify-content-around">
                    <Col className="col-10 col-lg-3 my-4 text-center appear">
                        <h4 className="fs-2 mb-2">Certified and Insured</h4>
                        <p>
                            <img className="my-2" width="160px" src="https://img.icons8.com/office/480/null/diploma.png" alt="certified"/>
                            <br/>
                            Five Star Backflow Services has been serving Northern California for more than 10 years. We are CA-NV
                            American Water Works Association certified and insured.
                        </p>
                    </Col>
                    <Col className="col-10 col-lg-3 my-4 text-center appear">
                        <h4 className="fs-2 mb-2">Diverse Customer Base</h4>
                        <p>
                            <img className="my-4" width="140px" src="https://img.icons8.com/external-parzival-1997-flat-parzival-1997/512/null/external-customer-logistics-and-supply-chain-management-parzival-1997-flat-parzival-1997.png" alt="customers"/>
                            <br/>
                            Our customer base is diverse, serving
                            Commercial Property Management Companies, Multifamily Property Management Companies,
                            Homeowner Association Management Companies, Building Engineers, Business Owners, Homeowners,
                            Hospitals, High Rises, Schools, etc.
                        </p>
                    </Col>
                    <Col className="col-10 col-lg-3 my-4 text-center appear">
                        <h4 className="fs-2 mb-3">Water Purveyor Approved</h4>
                        <p>
                            <img className="my-1" width="140px" src="https://img.icons8.com/external-icongeek26-flat-icongeek26/512/null/external-water-tap-laundry-icongeek26-flat-icongeek26.png" alt="water"/>
                            <br/>
                            We are approved with most Northern California water purveyors to test and repair
                            backflow assemblies and are dedicated to protecting our State’s potable water supply systems.
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}