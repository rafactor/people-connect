import React from "react";
import { Row, Col } from 'react-bootstrap';
import DashCard from "../../components/DashCard";
import MyButton from "../../components/MyButton";
import Logo from "../../components/Logo";
import InputField from "../../components/InputField";
import FormError from "../../components/FormError";


function renderContent({ method, changeMethod, authUser, onChange, input }) {
    switch (method) {
        case "login":
            return (
                <>
                    <Row className="my-4 pb-4">
                        <Col sm={12} className="text-center py-0 px-1">
                            <MyButton size="lg" variant="light" className="px-5" type="login" />
                        </Col>
                    </Row>

                    <InputField type="email" onChange={onChange} value={input} />
                    <InputField type="password" onChange={onChange} value={input} />

                    <Row className="my-5">
                        <Col sm={6} className="text-right py-0 px-1">
                            <MyButton type="return" variant="outline-dark" className="px-3" onClick={() => { changeMethod("") }} />
                        </Col>
                        <Col sm={6} className="text-left py-0 px-1" className="px-3"  >
                            <MyButton type="login" onClick={() => { authUser(true) }} />
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

                    <InputField type="name" onChange={onChange} value={input} />
                    <InputField type="email" onChange={onChange} value={input} />
                    <InputField type="phone" onChange={onChange} value={input} />
                    <InputField type="language" onChange={onChange} value={input} />
                    <InputField type="password" onChange={onChange} value={input} />
                    <InputField type="location" onChange={onChange} value={input} />

                    <Row className="my-5">
                        <Col sm={6} className="text-right py-0 px-1">
                            <MyButton type="return" variant="outline-dark" onClick={() => { changeMethod(""); }} />
                        </Col>
                        <Col sm={6} className="text-left py-0 px-1">
                            <MyButton type="register" variant="info" text="Register" onClick={() => { }} />
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

                    <InputField type="email" onChange={onChange} value={input} />

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

                    <InputField type="email" onChange={onChange} value={input} />

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
                        <Col xs={6} sm={6} className=" text-right py-0 px-3">
                            <MyButton type="login" onClick={() => { changeMethod("login") }} />
                        </Col>
                        <Col xs={6} sm={6} className="text-left py-0 px-3">
                            <MyButton type="register" onClick={() => { changeMethod("register") }} />
                        </Col>
                    </Row>

                    <Row className="my-3">
                        <Col xs={6} sm={6} className="text-right py-0 px-3">
                            <MyButton variant="outline-success" type="google" onClick={() => { changeMethod("google") }} />
                        </Col>
                        <Col xs={6} sm={6} className="text-left py-0 px-3">
                            <MyButton variant="outline-primary" type="facebook" onClick={() => { changeMethod("facebook") }} />
                        </Col>
                    </Row>
                </>
            )
    }
}
function Login(props) {

    return (

        <DashCard
            header={{
                left: [{ type: "login", variant: "outline-info", text: "Login" }],
                right: [{}]
            }}
            footer={<></>}
        >

            <Logo />
            {renderContent(props)}
            <FormError text={props.error} />

        </DashCard >
    );
}

export default Login;