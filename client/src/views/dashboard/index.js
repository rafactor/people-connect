
import React from "react";
import { Row, Col, Card } from 'react-bootstrap';
import DashCard from "../../components/DashCard";
import MyButton from "../../components/MyButton";
import Logo from "../../components/Logo";
import DashTable from "../../components/DashTable";
import tableData from "../../components/tableData.json"

function Dashboard(props) {

    return (
        <>
            <DashCard fluid
                header={{
                    left: [
                        { type: "user", varian: "info", text: "Hello! Micheal", onClick: "" },
                    ],
                    right: [{}]
                }}
                footer={<></>} >

                <Row className="mt-5 py-4">
                    <Col sm={6} className="text-right py-0 px-1">
                        <MyButton type="sell" variant="primary" text="Sell a Service" />
                    </Col>
                    <Col sm={6} className="text-left py-0 px-1">
                        <MyButton type="buy" variant="dark" text="Buy a Service" />
                    </Col>
                    <Col sm={6} className="text-left py-0 px-1">
                        <MyButton type="buy" variant="dark" text="Buy a Service" />
                    </Col>
                </Row>
                {}
                <DashCard fluid
                    header={{
                        left: [
                            { type: "buy", varian: "info", onClick: "", text: "Available Services" },
                            { type: "buy", varian: "info", onClick: "", icon: "fas fa-headset", text: "My Services" },
                            { type: "buy", varian: "info", onClick: "", icon: "fas fa-headset", text: "My Services" }
                        ],
                        right: [
                            { type: "plus", varian: "info", onClick: "", text: "Available Services" },
                            { type: "buy", varian: "info", onClick: "", icon: "fas fa-headset", text: "My Services" },
                            { type: "buy", varian: "info", onClick: "", icon: "fas fa-headset", text: "My Services" }
                        ]
                    }}
                    footer={<></>}
                >

                    <Card.Title>List of Services Nearby</Card.Title>
                    <Card.Text>Select a service and make a request</Card.Text>

                    <DashTable data={tableData} />

                </DashCard>
            </DashCard>


        </>
    );
}

export default Dashboard;