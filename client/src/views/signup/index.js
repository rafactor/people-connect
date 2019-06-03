import React from "react";
import { Row, Col } from 'react-bootstrap';
import DashCard from "../../components/DashCard";
import MyButton from "../../components/MyButton";
import Logo from "../../components/Logo";
import InputField from "../../components/InputField";
import { Redirect } from "react-router-dom";
import AppLanguage from "../../components/AppLanguage";

function Signup(props) {

    if (props.state.isAuth) return (
        <Redirect to="/dashboard" />
    )
    let Fields = [
        {
            field: "name"
        },
        {
            field: "email"
        },
        {
            field: "address"
        },
        {
            field: "location"
        },
        {
            field: "language"
        },
        {
            field: "phone"
        },
        {
            field: "password"
        }
    ];

    return (

        <DashCard
            header={{
                left: [{ type: "signup", variant: "outline-info", text: "signup" }],
                right: [{}]
            }}
            footer={<></>}
        >

            <AppLanguage state={props.state} />
            <Logo />

            <Row className="my-4 pb-4">
                <Col sm={12} className="text-center py-0 px-1">
                    <MyButton size="lg" variant="light" className="px-5" type="signup" text="signup" />
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col md={10} className="text-center py-0 px-1">
                    {Fields.map((field, i) => {
                        field.id = i;
                        field.key = i;
                        field.onChange = props.state.onChangeHandler;
                        field.value = props.state.input;
                        return <InputField {...field} />
                    })}
                </Col>
            </Row>

            <Row className="my-5">
                <Col className="py-0 px-1 d-flex justify-content-end" >
                    <MyButton type="return" text="return" to="/" variant="outline-dark" className="px-3" />
                </Col>
                <Col className="py-0 px-1 d-flex justify-content-start" >
                    <MyButton type="signup" text="signup" variant="info" onClick={() => { props.state.submit(props.history.location.pathname) }} />
                </Col>
            </Row>
        </DashCard >
    );
}

export default Signup;