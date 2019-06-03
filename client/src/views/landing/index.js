import React from "react";
import { Row, Col, Card } from 'react-bootstrap';
import DashCard from "../../components/DashCard";
import AppLanguage from "../../components/AppLanguage";
import MyButton from "../../components/MyButton";
import Logo from "../../components/Logo";
import { Redirect } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Landing(props) {

    if (props.state.isAuth) return (
        <Redirect to="/dashboard" />
    )
    const { t } = useTranslation();

    return (
        <DashCard
            footer={<></>}
            header={{
                left: [{ type: "signin", variant: "outline-info", text: "signin" }],
                right: [{}]
            }} >

            <AppLanguage state={props.state} />

            <Logo />
            <p className="lead text-dark-blue noselect text-center mb-5"
                dangerouslySetInnerHTML={{ __html: t("subtitle") }}
                style={{ fontSize: "1.5em", textShadow: "0.01em 0.01em 0.025em black" }} />

            <Row className="my-3">
                <Col className="py-0 px-3 d-flex justify-content-end" >
                    <MyButton to="/signin" type="signin" text="signin" variant="info" size="lg" className="p-3" />
                </Col>
                <Col className="py-0 px-3 d-flex justify-content-start" >
                    <MyButton to="/signup" type="signup" text="signup" variant="dark" size="lg" className="p-3" />
                </Col>
            </Row>
            <Card.Title className="text-center text-uppercase">- {t("or")} -</Card.Title>
            <Row className="my-3">
                <Col className="py-0 px-3 d-flex justify-content-end" >
                    <MyButton to="/social/google" variant="outline-danger" type="google" size="lg" text=" " />
                </Col>
                <Col className="py-0 px-3 d-flex justify-content-start" >
                    <MyButton to="/social/facebook" variant="outline-primary" type="facebook" size="lg" text=" " />
                </Col>
            </Row>
        </DashCard >
    );
}

export default Landing;