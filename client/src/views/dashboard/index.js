
import React from "react";
import { Row, Col, Card } from 'react-bootstrap';
import Logo from "../../components/Logo";
import DashCard from "../../components/DashCard";
import MyButton from "../../components/MyButton";
import DashTable from "../../components/DashTable";
import InputField from "../../components/InputField"
import tableData from "../../components/tableData.json"
function renderTable(tableType, data) {

}

function renderContent({ type, changeType }) {
    var content = <></>;
    switch (type) {
        case "":
            content = <>
                <Logo />
                <Card.Title className="display-5 text-center">Wellcome to the Dashboard!</Card.Title>
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
                <Row className="my-4 pb-4">
                    <Col sm={12} className="text-center py-0 px-1">
                        <MyButton size="lg" variant="light" className="px-5" type="service" text="List of my services" />
                    </Col>
                </Row>
                {renderTable(type, tableData)}
                <DashTable data={tableData} />
            </>
            break;
        case "market":
            content = <>
                <Row className="my-4 pb-4">
                    <Col sm={12} className="text-center py-0 px-1">
                        <MyButton size="lg" variant="light" className="px-5" type="market" text="List of services availabel in market" />
                    </Col>
                </Row>
                <DashTable data={tableData} />
            </>
            break;
        case "myorders":
            content = <>
                <Row className="my-4 pb-4">
                    <Col sm={12} className="text-center py-0 px-1">
                        <MyButton size="lg" variant="light" className="px-5" type="order" text="List of requests" />
                    </Col>
                </Row>
                <DashTable data={tableData} />
            </>
            break;
        case "addservice":
            content = <>
                <Row className="my-4 pb-4">
                    <Col sm={12} className="text-center py-0 px-1">
                        <MyButton size="lg" variant="light" className="px-5" type="plus" text="Add service" />
                    </Col>
                </Row>
                <InputField type="category" name="category" placaholder="" value="" />
                <InputField type="subcategory" name="subcategory" placaholder="" value="" />
                <InputField type="language" name="language" value="" />
                <InputField type="coverage" name="coverage" value="" />
                <InputField type="description" name="description" value="" />
                <InputField type="date" name="date" value="" />

                <Row className="my-5">
                    <Col sm={6} className="text-right py-0 px-1">
                        <MyButton type="return" variant="outline-dark" onClick={() => { changeType("") }} />
                    </Col>
                    <Col sm={6} className="text-left py-0 px-1">
                        <MyButton type="add" text="Add Service" onClick={() => { }} />
                    </Col>
                </Row>
            </>
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
                    variant: "outline-light",
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
                text: (type === "market" ? "See Market" : " "),
                title: "See Market"
            },
            {
                type: "service",
                variant: "outline-info",
                onClick: () => { changeType("myservices") },
                active: (type === "myservices"),
                text: (type === "myservices" ? "My Services" : " "),
                title: "My Services"

            },
            {
                type: "order",
                variant: "outline-info",
                onClick: () => { changeType("myorders") },
                active: (type === "myorders"),
                text: (type === "myorders" ? "My Orders" : " "),
                title: "My Orders"
            },
            {
                type: "plus",
                variant: "outline-warning",
                onClick: () => { changeType("addservice") },
                active: (type === "addservice"),
                text: (type === "addservice" ? "Add Service" : " "),
                title: "Add Service"
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
            {renderContent(props)}


        </DashCard>
    );
}

export default Dashboard;