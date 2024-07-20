import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/thank-you.css";

const ThankYou = () => {
    return (
        <section className="thank-you-section">
            <Container>
                <Row className="justify-content-center">
                    <Col lg="8" className="text-center">
                        <div className="thank__you">
                            <h1 className="mb-3 fw-semibold">Thank You!</h1>
                            <h3 className="mb-4">Your tour is booked.</h3>
                            <span><i className="ri-checkbox-circle-fill"></i></span> <br></br>
                            <Button className="btn primary__btn w-20 mt-4">
                                <Link to="/home" className="text-white">Back to Home</Link>
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ThankYou;
