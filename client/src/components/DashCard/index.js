import React from "react";
import { Card, Col, Jumbotron, Container } from 'react-bootstrap';
import MyButton from "../MyButton";

function DashCard(props) {
    if (!props.header.left) props.header.left = [{}];
    if (!props.header.right) props.header.right = [{}];
    return (
        <Col xl={12} className="mb-3">
            <Card className="border-dark shadow-lg">
                <Card.Header className="bg-dark justify-content-center">
                    {props.header.left.map((btn, i) => {
                        btn.className = `float-left mx-2 ${btn.className || " "}`;
                        btn.key = i;
                        btn.id = i;
                        return <MyButton {...btn} />
                    })}
                    {props.header.right.map((btn, i) => {
                        btn.className = `float-right mx-2 ${btn.className || " "}`;
                        btn.key = i;
                        btn.id = i;
                        return <MyButton {...btn} />
                    })}

                </Card.Header>
                <Card.Body>
                    <Jumbotron className="m-0">
                        <Container fluid={props.fluid}>
                            {props.children}
                        </Container>
                    </Jumbotron>
                </Card.Body>
                {(props.footer) ? <Card.Footer>{props.footer}</Card.Footer> : <></>}
            </Card>
        </Col >
    );
}

export default DashCard;