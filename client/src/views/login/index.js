import React from "react";
import { Button, Row, Col, ProgressBar } from 'react-bootstrap';
import buttons from "../../components/buttons.json";
import DashCard from "../../components/DashCard";

function Login(props) {
    var loginBtn = buttons["login"];
    var registerBtn = buttons["register"];
    var googleBtn = buttons["google"];
    var facebookBtn = buttons["facebook"];

    return (
        <DashCard header={<></>} footer={<></>}>

            <Row>
                <Col className="mx-auto display-3 text-dark-blue text-center" style={{ textShadow: "0.01em 0.01em 0.1em black" }}>
                    <i class="fas fa-users"></i>
                    <ProgressBar className="mx-auto mt-2 w-15" variant="info" animated now={100} style={{ height: "0.65em" }} />
                </Col>
            </Row>
            <Row className="my-4">
                <p className="mx-auto display-4 text-dark-blue noselect" style={{ textShadow: "0.01em 0.01em 0.025em black" }}>
                    People Connect
                </p>
            </Row>
            <Row className="mt-5 pt-4">
                <Col sm={6} className="text-right p-0">
                    <Button className="shadow mr-1" variant={googleBtn.variant}>
                        <i className={googleBtn.icon}></i> {googleBtn.text}
                    </Button>
                </Col>
                <Col sm={6} className="text-left p-0">
                    <Button className="shadow ml-1" variant={facebookBtn.variant}>
                        <i className={facebookBtn.icon}></i> {facebookBtn.text}
                    </Button>
                </Col>
            </Row>
            <Row className="my-4">
                <Col sm={6} className="text-right p-0">
                    <Button className="shadow mr-1" variant={loginBtn.variant}>
                        <i className={loginBtn.icon}></i> {loginBtn.text}
                    </Button>
                </Col>
                <Col sm={6} className="text-left p-0">
                    <Button className="shadow ml-1" variant={registerBtn.variant}>
                        <i className={registerBtn.icon}></i> {registerBtn.text}
                    </Button>
                </Col>
            </Row>

        </DashCard>
    );
}

export default Login;