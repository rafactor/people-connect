import React from "react";
import { Button, Modal, Container, Jumbotron } from 'react-bootstrap';

function MainModal(props) {
    return (
        <Modal show={props.show} onHide={props.hideModal}>
            <Modal.Header className="bg-dark-blue justify-content-between">
                <Button variant="outline-light" >
                    <i className="fas fa-building"></i> Company
                    </Button>
                <Button variant="outline-light" className="ml-2">
                    <i className="fas fa-hashtag"></i> 2
                    </Button>

            </Modal.Header>
            <Modal.Body>
                <Jumbotron className="m-0">
                    <Container className="pl-3">
                        Woohoo, you're reading this text in a modal!
                </Container>
                </Jumbotron>
            </Modal.Body>
            <Modal.Footer style={{ backgroundColor: "#e9ecef" }}>
                <Button variant="secondary" onClick={props.hideModal}>
                    <i className="fas fa-times"></i> Close
                </Button>
                <Button variant="info" onClick={props.hideModal}>
                    <i className="fas fa-check-double"></i> Apply
                    </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MainModal;