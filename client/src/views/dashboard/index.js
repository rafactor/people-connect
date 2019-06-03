
import React from "react";
import { Row, Col, Card } from 'react-bootstrap';
import Logo from "../../components/Logo";
import DashCard from "../../components/DashCard";
import AppLanguage from "../../components/AppLanguage";
import MyButton from "../../components/MyButton";
import { Redirect } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Dashboard(props) {
    if (!props.state.isAuth) return (<Redirect to="/landing" />)
    const { t } = useTranslation();
    return (

        <DashCard fluid header={props.state.dashHeader(props.history.location.pathname)} footer={<></>} >
            {props.state.check_redirect()}

            <AppLanguage state={props.state} />

            <Logo />

            <Card.Title className="display-5 text-center mb-5">{t("welcome")}</Card.Title>

            <Row className="justify-content-md-center">
                <Col md="auto" xs={true} className="text-center rounded m-2 p-2">
                    <MyButton to="/market" className="p-4" size="lg" variant="primary" type="market" text="seemarket" />
                </Col>
                <Col md="auto" xs={true} className="text-center rounded m-2 p-2">
                    <MyButton to="/myorders" className="p-4" size="lg" variant="warning" type="order" text="myorders" />
                </Col>
                <Col md="auto" xs={true} className="text-center rounded m-2 p-2">
                    <MyButton to="/myshop" className="p-4" size="lg" variant="info" type="store" text="myshop" />
                </Col>
                <Col md="auto" xs={true} className="text-center rounded m-2 p-2">
                    <MyButton to="/services/add" className="p-4" size="lg" variant="outline-dark" type="plus" text="addservice" />
                </Col>
            </Row>

        </DashCard>
    );
}

export default Dashboard;