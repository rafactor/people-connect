import React from "react";
import { Row, Col } from 'react-bootstrap';
import DashCard from "../../components/DashCard";
import MyButton from "../../components/MyButton";
import Logo from "../../components/Logo";
import InputField from "../../components/InputField";
import { Redirect } from "react-router-dom";
import AppLanguage from "../../components/AppLanguage";

function Signin(props) {

    if (props.state.isAuth) return (
        <Redirect to="/dashboard" />
    )
    let Fields = [
        {
            field: "email"
        },
        {
            field: "password"
        }
    ];
    return (
        <DashCard
            footer={<></>}
            header={{
                left: [{ type: "signin", variant: "outline-info", text: "signin" }],
                right: [{}]
            }} >
            <AppLanguage state={props.state} />

            <Logo />
            <Row className="my-4 pb-4">
                <Col sm={12} className="text-center py-0 px-1">
                    <MyButton size="lg" variant="light" className="px-5" type="signin" text="signin" />
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col sm={6} className="text-center py-0 px-1">
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
                <Col className="py-0 px-1 d-flex justify-content-end">
                    <MyButton size="lg" type="return" text="return" to="/" variant="outline-dark" className="" />
                </Col>

                <Col className="py-0 px-1 d-flex justify-content-start" >
                    <MyButton size="lg" type="signin" text="signin" variant="info" className="" onClick={() => { props.state.submit(props.history.location.pathname) }} />
                </Col>
            </Row>

        </DashCard >
    );
}

export default Signin;