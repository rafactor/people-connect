
import React from "react";
import { Row, Col } from 'react-bootstrap';
import DashCard from "../../components/DashCard";
import MyButton from "../../components/MyButton";
import DashTable from "../../components/DashTable";
import { Redirect } from "react-router-dom";
import AppLanguage from "../../components/AppLanguage";

function Myorders(props) {
    if (!props.state.isAuth) return (<Redirect to="/dashboard" />)
    console.log(props.state.data["/myorders"])
    return (
        <DashCard fluid header={props.state.dashHeader(props.history.location.pathname)} footer={<></>} >
            {props.state.check_redirect()}
            <AppLanguage state={props.state} />

            <Row className="my-4 pb-4">
                <Col sm={12} className="text-center py-0 px-1">
                    <MyButton size="lg" variant="light" className="px-5 mx-auto" type="order" text="myorderslist" />
                </Col>
            </Row>
            <DashTable data={props.state.data["/myorders"]} />
        </DashCard>
    );
}

export default Myorders;