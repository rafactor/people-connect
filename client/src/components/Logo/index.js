import React from "react";
import { Row, Col, ProgressBar } from 'react-bootstrap';


function Logo(props) {

    return (
        <>
            <Row>
                <Col className="mx-auto display-2 text-dark-blue text-center" style={{ textShadow: "0.01em 0.01em 0.1em black" }}>
                    <i className="fas fa-users"></i>
                    <ProgressBar className="mx-auto mt-2 w-25" variant="info" animated now={100} style={{ height: "0.65em" }} />
                </Col>
            </Row>
            <Row className="my-4">
                <p className="mx-auto display-5 text-dark-blue noselect" style={{ textShadow: "0.01em 0.01em 0.025em black" }}>
                    People Connect
            </p>
            </Row>
        </>
    );

}

export default Logo;