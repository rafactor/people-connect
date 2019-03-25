import React from "react";
import { Card, Col, Button, Jumbotron } from 'react-bootstrap';
/* 
To Do:
function called when plus is pressed
*/
function showPlus(plus) {
    if (plus) {
        return (
            <Button className="float-right" variant="warning">
                <i className="fas fa-plus"></i>
            </Button>
        )
    }
    return <></>
}
function showFooter(footer) {
    if (footer) {
        return (
            <Card.Footer>
                {footer}
            </Card.Footer>
        )
    }
    return <></>

}
function DashCard(props) {
    return (
        <Col xl={12} className="mb-3">
            <Card className="border-dark shadow-lg">
                <Card.Header className="bg-dark justify-content-center">
                    <Button className="float-left" variant="info" >
                        <i className={props.header.icon}></i> {props.header.text}
                    </Button>
                    {(props.plus) ?
                        <Button className="float-right" variant="warning">
                            <i className="fas fa-plus"></i>
                        </Button> : <></>}

                </Card.Header>
                <Card.Body>
                    <Jumbotron className="m-0">
                        {props.children}
                    </Jumbotron>
                </Card.Body>
                {showFooter(props.footer)}
            </Card>
        </Col>
    );
}

export default DashCard;