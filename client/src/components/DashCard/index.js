import React from "react";
import { Card, Col, Button, Jumbotron, Container } from 'react-bootstrap';
import MyButton from "../MyButton";
/* 
To Do:
function called when plus is pressed
*/

function DashCard(props) {
    return (
        <Col xl={12} className="mb-3">
            <Card className="border-dark shadow-lg">
                <Card.Header className="bg-dark justify-content-center">
                    {props.header.map(btn => {
                        return (
                            <Button
                                className={`float-left mx-2 ${btn.className || ""}`}
                                variant={btn.variant || "info"}
                                href={btn.href || ""}
                                onClick={btn.onClick || ""} >
                                <i className={btn.icon}></i> {btn.text}
                            </Button>
                        )
                    })}


                    {(props.plus) ? <MyButton className="float-right" type="plus" text={props.plus.text} onClick={props.plus.onClick} /> : <></>}
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