import React from "react";
import { Row, Col } from 'react-bootstrap';
import DashCard from "../../components/DashCard";
import MyButton from "../../components/MyButton";
import Logo from "../../components/Logo";
import InputField from "../../components/InputField";
import { Redirect } from "react-router-dom";
import AppLanguage from "../../components/AppLanguage";

function Social(props) {

    if (props.state.isAuth) return (<Redirect to="/dashboard" />)

    const social_types = ["facebook", "google"];

    if (social_types.indexOf(props.match.params.social_type) === -1) return (
        <Redirect to="/" />
    )

    let Fields = [
        {
            field: "email"
        }
    ];

    return (
        <DashCard header={{ left: [{ type: props.match.params.social_type, variant: "outline-info", text: " " }], right: [{}] }} footer={<></>}        >
            {props.state.check_redirect()}

            <AppLanguage state={props.state} />
            <Logo />

            <Row className="my-4">
                <Col sm={12} className="text-center py-0 px-1">
                    <MyButton size="lg" variant="light" className="px-5" type={props.match.params.social_type} text={props.match.params.social_type} />
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col sm={6} className="text-center py-0 px-1">
                    {Fields.map((field, i) => {
                        field.checkInput = props.state.checkInput;
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
                    <MyButton to="/" type="return" text="return" variant="dark" />
                </Col>
                <Col className="py-0 px-1 d-flex justify-content-start" >
                    <MyButton type="apply" text="connect" onClick={() => { props.state.submit(props.history.location.pathname) }} />
                </Col>
            </Row>

        </DashCard >
    );
}

export default Social;