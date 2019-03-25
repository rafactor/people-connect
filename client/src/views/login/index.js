import React from "react";
import { Row, Col } from 'react-bootstrap';
import DashCard from "../../components/DashCard";
import MyButton from "../../components/MyButton";
import Logo from "../../components/Logo";
import InputField from "../../components/InputField";


function renderContent(method, changeMethod) {
    switch (method) {
        case "login":
            return (
                <>
                    <Row className="my-4 pb-4">
                        <Col sm={12} className="text-center py-0 px-1">
                            <MyButton size="lg" variant="light" className="px-5" type="login" />
                        </Col>
                    </Row>

                    <InputField variant="email" />
                    <InputField variant="password" />

                    <Row className="my-5">
                        <Col sm={6} className="text-right py-0 px-1">
                            <MyButton type="return" variant="outline-dark" className="px-3" onClick={() => { changeMethod("") }} />
                        </Col>
                        <Col sm={6} className="text-left py-0 px-1" className="px-3" onClick={() => { }} >
                            <MyButton type="login" />
                        </Col>
                    </Row>
                </>
            )
        case "register":
            return (
                <>
                    <Row className="my-4 pb-4">
                        <Col sm={12} className="text-center py-0 px-1">
                            <MyButton size="lg" variant="light" className="px-5" type="register" />
                        </Col>
                    </Row>

                    <InputField variant="name" />
                    <InputField variant="email" />
                    <InputField variant="phone" />
                    <InputField variant="language" />
                    <InputField variant="password" />
                    <InputField variant="location" />

                    <Row className="my-5">
                        <Col sm={12} className="text-right py-0 px-1">
                            <MyButton type="return" className="mx-2" onClick={() => { changeMethod("") }} />
                            <MyButton type="register" className="mx-2" onClick={() => { }} />
                        </Col>
                    </Row>
                </>
            )
        case "google":
            return (
                <>
                    <Row className="my-4">
                        <Col sm={12} className="text-center py-0 px-1">
                            <MyButton size="lg" variant="light" className="px-5" type="google" />
                        </Col>
                    </Row>

                    <InputField variant="email" />

                    <Row className="my-5">
                        <Col sm={6} className="text-right py-0 px-1">
                            <MyButton type="return" variant="outline-dark" onClick={() => { changeMethod("") }} />
                        </Col>
                        <Col sm={6} className="text-left py-0 px-1">
                            <MyButton type="apply" text="Connect" onClick={() => { }} />
                        </Col>
                    </Row>
                </>
            )
        case "facebook":
            return (
                <>
                    <Row className="my-4">
                        <Col sm={12} className="text-center py-0 px-1">
                            <MyButton size="lg" variant="light" className="px-5" type="facebook" />
                        </Col>
                    </Row>

                    <InputField variant="email" />

                    <Row className="my-5">
                        <Col sm={6} className="text-right py-0 px-1">
                            <MyButton type="return" variant="outline-dark" onClick={() => { changeMethod("") }} />
                        </Col>
                        <Col sm={6} className="text-left py-0 px-1">
                            <MyButton type="apply" text="Connect" onClick={() => { }} />
                        </Col>
                    </Row>
                </>
            )
        default:
            return (
                <>
                    <Row className="my-3">
                        <Col sm={6} className="text-right py-0 px-3">
                            <MyButton type="login" className="px-5" onClick={() => { changeMethod("login") }} />
                        </Col>
                        <Col sm={6} className="text-left py-0 px-3">
                            <MyButton type="register" className="px-5" onClick={() => { changeMethod("register") }} />
                        </Col>
                    </Row>

                    <Row className="my-3">
                        <Col sm={6} className="text-right py-0 px-3">
                            <MyButton variant="outline-success" type="google" className="px-5" onClick={() => { changeMethod("google") }} />
                        </Col>
                        <Col sm={6} className="text-left py-0 px-3">
                            <MyButton variant="outline-primary" type="facebook" className="px-5" onClick={() => { changeMethod("facebook") }} />
                        </Col>
                    </Row>
                </>
            )
    }
}
function Login(props) {

    return (

        <DashCard header={[<></>]} footer={<></>}>

            <Logo />
            {renderContent(props.method, props.changeMethod)}


        </DashCard>
    );
}

export default Login;