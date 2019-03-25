import React from "react";
import { Button, Row, Col, ProgressBar } from 'react-bootstrap';
import buttons from "../../components/buttons.json";
import DashCard from "../../components/DashCard";

function Landing(props) {
    var sellBtn = buttons["sell"];
    var buyBtn = buttons["buy"];
    var btns = [sellBtn, buyBtn]

    return (
        <DashCard header={{ icon: "fas fa-headset", text: "Services" }} footer={<></>}>

            <Row>
                <Col className="mx-auto display-2 text-dark-blue text-center" style={{ textShadow: "0.01em 0.01em 0.1em black" }}>
                    <i class="fas fa-users"></i>
                    <ProgressBar className="mx-auto mt-2 w-25" variant="info" animated now={100} style={{ height: "0.65em" }} />
                </Col>
            </Row>
            <Row className="my-4">
                <p className="mx-auto display-4 text-dark-blue noselect" style={{ textShadow: "0.01em 0.01em 0.025em black" }}>
                    People Connect
                </p>
            </Row>
            <Row className="mt-5 py-4">
                <Col sm={6} className="text-right p-0">
                    <Button className="shadow mr-1" variant={btns[0].variant}>
                        <i className={btns[0].icon}></i> {btns[0].text} Service
                    </Button>
                </Col>
                <Col sm={6} className="text-left p-0">
                    <Button className="shadow mr-1" variant={btns[1].variant}>
                        <i className={btns[1].icon}></i> {btns[1].text} Service
                    </Button>
                </Col>
            </Row>

        </DashCard>
    );
}

export default Landing;