import React from "react";
import { Container, Row } from 'react-bootstrap';

function MainContainer(props) {
    return (
        <Container fluid={true}>
            <Row>
                {props.children}
            </Row>
        </Container>
    );
}

export default MainContainer;