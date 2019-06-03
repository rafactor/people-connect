
import React from "react";
import { Row, Col } from 'react-bootstrap';
import DashCard from "../../components/DashCard";
import MyButton from "../../components/MyButton";
import InputField from "../../components/InputField"
import { Redirect } from "react-router-dom";
import AppLanguage from "../../components/AppLanguage";

let headingProps = (actionType) => ({
    size: "lg",
    variant: "light",
    className: "px-5 text-capitalize",
    type: actionType,
    text: `${actionType}service`
})

function Service(props) {
    if (!props.state.isAuth) return (<Redirect to="/dashboard" />)
    let Fields = [
        {
            field: "title",
        },
        {
            field: "category",
        },
        {
            field: "language",
        },
        {
            field: "coverage",
        },
        {
            field: "price",
        },
        {
            field: "description",
        }
    ];
    return (
        <DashCard fluid header={props.state.dashHeader(props.history.location.pathname)} footer={<></>} >
            {props.state.check_redirect()}
            <AppLanguage state={props.state} />
            <Row className="my-4 pb-4">
                <Col sm={12} className="text-center py-0 px-1">
                    <MyButton {...headingProps(props.match.params.action)} />
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
                    <MyButton to="/services" type="return" text="return" variant="outline-dark" />
                </Col>
                <Col className="py-0 px-1 d-flex justify-content-start" >
                    <MyButton type={`${props.match.params.action === "edit" ? "apply" : "add"}`} text={`${props.match.params.action}service`} onClick={() => { props.state.submit(props.location.pathname, props.match.params.action, props.location.search.split("=")[1]) }} />
                </Col>
            </Row>

        </DashCard>
    );
}

export default Service;