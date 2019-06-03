
import React from "react";
import { Row, Col } from 'react-bootstrap';
import DashCard from "../../components/DashCard";
import MyButton from "../../components/MyButton";
import DashTable from "../../components/DashTable";
import { Redirect } from "react-router-dom";
import AppLanguage from "../../components/AppLanguage";

function Myshop(props) {
    if (!props.state.isAuth) return (<Redirect to="/dashboard" />)

    return (
        <DashCard fluid header={props.state.dashHeader(props.history.location.pathname)} footer={<></>} >
            {props.state.check_redirect()}
            <AppLanguage state={props.state} />

            <Row className="my-4 pb-4">
                <Col sm={12} className="text-center py-0 px-1">
                    <MyButton size="lg" variant="light" className="px-5" type="service" text="myserviceslist" />
                </Col>
            </Row>

            <DashTable data={props.state.data["/myservices"]} />

            <Row className="my-5 pt-4">
                <Col sm={12} className="text-center py-0 px-1">
                    <MyButton size="lg" variant="light" className="px-5" type="request" text="orderslist" />
                </Col>
            </Row>

            <DashTable data={props.state.data["/orders"]} />

        </DashCard>
    );
}

export default Myshop;