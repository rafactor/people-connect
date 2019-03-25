import React from "react";
import { Form, Button, Row, Col, ProgressBar } from 'react-bootstrap';
import buttons from "../../components/buttons.json";
import InputField from "../../components/InputField";
import DashCard from "../../components/DashCard";

function Register(props) {
    var returnBtn = buttons["return"];
    var registerBtn = buttons["register"];
    var googleBtn = buttons["google"];
    var facebookBtn = buttons["facebook"];

    return (

        <DashCard header={<></>} footer={<></>}>

            <Row>
                <Col className="mx-auto my-4 display-3 text-dark-blue text-center" style={{ textShadow: "0.01em 0.01em 0.1em black" }}>
                    <i class="fas fa-users"></i>
                </Col>
            </Row>
            <Row className="mb-5 pb-5">
                <span className="mx-auto display-4 text-dark-blue noselect" style={{ textShadow: "0.01em 0.01em 0.025em black" }}>
                    Register
                </span>
            </Row>
            <InputField variant="name" />
            <InputField variant="email" />
            <InputField variant="phone" />
            <InputField variant="language" />
            <InputField variant="password" />
            <InputField variant="location" />
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
                    <Button className="shadow mr-1" variant={returnBtn.variant}>
                        <i className={returnBtn.icon}></i> {returnBtn.text}
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

export default Register;