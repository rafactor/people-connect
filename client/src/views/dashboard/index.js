
import React from "react";
import { Row, Col, Card } from 'react-bootstrap';
import Logo from "../../components/Logo";
import DashCard from "../../components/DashCard";
import MyButton from "../../components/MyButton";
import DashTable from "../../components/DashTable";
import tableData from "../../components/tableData.json"

function renderContent(type, changeType) {
    var content = <></>;
    switch (type) {
        case "":
            content = <>
                <Logo />
                <Card.Text className="display-5 text-center">Wellcome to the Dashboard!</Card.Text>
                <Row>
                    <Col sm={12} className="text-center rounded py-5">
                        <MyButton className="mx-3 p-3" size="lg" variant="primary" type="market" onClick={() => { changeType("market") }} text="See Market" />
                        <MyButton className="mx-3 p-3" size="lg" variant="dark" type="service" onClick={() => { changeType("myservices") }} text="My Services" />
                        <MyButton className="mx-3 p-3" size="lg" variant="secondary" type="order" onClick={() => { changeType("myorders") }} text="My Orders" />
                        <MyButton className="mx-3 p-3" size="lg" variant="outline-dark" type="plus" onClick={() => { changeType("addservice") }} text="Add Service" />
                    </Col>
                </Row>
            </>
            break;
        case "myservices":
            content = <>
                <Card.Title>List of Services Nearby</Card.Title>
                <Card.Text>Select a shop and make a request</Card.Text>

                <DashTable data={tableData} />
            </>
            break;
        case "market":
            break;
        case "myorders":
            break;
        case "addservice":
            break;

    }
    return (content)
}
function renderHeader(type, changeType) {
    if (type === "") {
        return ({
            left: [
                {
                    type: "user",
                    text: "Hi Micheal!",
                    variant: "secondary",
                },
            ],
        })
    }
    return ({
        left: [
            {
                type: "user",
                text: "Hi Micheal!",
                variant: "secondary",
            },
            {
                type: "market",
                variant: "outline-info",
                onClick: () => { changeType("market") },
                active: (type === "market"),
                text: "Buy Service"
            },
            {
                type: "service",
                variant: "outline-info",
                onClick: () => { changeType("myservices") },
                active: (type === "myservices"),
                text: "My Services"

            },
            {
                type: "order",
                variant: "outline-info",
                onClick: () => { changeType("myorders") },
                active: (type === "myorders"),
                text: "My Orders"
            }
        ],
        right: [
            {
                type: "plus",
                variant: "outline-warning",
                onClick: () => { changeType("addservice") },
                active: (type === "addservice"),
                text: "Add Service"
            }
        ]
    });
}

function Dashboard(props) {

    return (
        <DashCard fluid
            header={renderHeader(props.type, props.changeType)}
            footer={<></>}
        >
            {renderContent(props.type, props.changeType)}


        </DashCard>
    );
}

export default Dashboard;