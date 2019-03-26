import React from "react";
import { Card, Col, Button, Jumbotron, Container } from 'react-bootstrap';
import MyButton from "../MyButton";
/* 
To Do:
function called when plus is pressed
*/

function DashCard(props) {
    if (!props.header.left) props.header.left = [{}];
    if (!props.header.right) props.header.right = [{}];
    return (
        <Col xl={12} className="mb-3">
            <Card className="border-dark shadow-lg">
                <Card.Header className="bg-dark justify-content-center">
                    {props.header.left.map(btn => {
                        return (
                            <MyButton
                                type={btn.type}
                                className={`float-left mx-2 ${btn.className}`}
                                variant={btn.variant}
                                href={btn.href}
                                active={btn.active}
                                onClick={btn.onClick}
                                icon={btn.icon}
                                text={btn.text}
                            >
                            </MyButton>
                        )
                    })}
                    {props.header.right.map(btn => {
                        return (
                            <MyButton
                                type={btn.type}
                                className={`float-right mx-2 ${btn.className}`}
                                variant={btn.variant}
                                href={btn.href}
                                active={btn.active}
                                onClick={btn.onClick}
                                icon={btn.icon}
                                text={btn.text}
                            >
                            </MyButton>
                        )
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