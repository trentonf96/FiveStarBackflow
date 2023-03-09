import {Card, Row} from "react-bootstrap";
import React from "react";
import Container from "react-bootstrap/Container";

export default function Testimonials() {

    return (

        <Container fluid id="testimonials">
            <Container>
                <h1 className="display-4 text-start"><i className="fas fa-comments"></i>Testimonials</h1>
                <hr/>
                <Row>
                    <div className="col-12 col-lg-6 p-3">
                        <Card className="quote text-light">
                            <Card.Header className="mb-0 text-start">
                                <h3>Yelp</h3>
                            </Card.Header>
                            <Card.Body>
                                <blockquote className="blockquote">
                                    <p className="text-start">"Five Star Backflow has done a great job with getting our backflow
                                        repaired out at our commercial property. We were ordered by the City of Roseville to have this
                                        fixed in a certain time frame and they were able to communicate with them, also making my job
                                        easier and taking a lot of weight off my shoulders which helps me work better. Have to also
                                        compliment the customer service and attentiveness to the project. Highly recommended!"
                                    </p>
                                    <footer className="blockquote-footer text-light text-start mt-1">Matthew S.</footer>
                                </blockquote>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-12 col-lg-6 p-3">
                        <Card className="quote text-light">
                            <Card.Header className="text-start">
                                <h3>Yelp</h3>
                            </Card.Header>
                            <Card.Body>
                                <blockquote className="blockquote">
                                    <p className="text-start">"Five Star Backflow has done a great job on the annual required testing
                                        of the water backflow valves of several of our homes in Morgan Greens, Roseville. For me he has
                                        tested at my home for the past four years. They are always prompt to the inspection, extremely
                                        reasonable in price, and they turn in the test paperwork to our water supplier quickly to meet
                                        our annual test requirements. I don't know of anybody that could possibly do a better job or be
                                        more customer oriented to provide great service. Highly recommended for your backflow valve
                                        testing anywhere in the Sacramento Valley. Many communities in the valley have them on their
                                        list of certified testers. You won't be disappointed in their work."
                                    </p>
                                    <footer className="blockquote-footer text-light text-start mt-1">Walt N.</footer>
                                </blockquote>
                            </Card.Body>
                        </Card>
                    </div>
                </Row>
            </Container>
        </Container>
    );
}