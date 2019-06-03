import React from "react";
import { Modal, Container, Jumbotron, ModalTitle } from 'react-bootstrap';
import MyButton from "../MyButton";

function MainModal(props) {
    return (
        <Modal scrollable centered size="lg" show={props.isShow} onHide={props.hide}>
            <Modal.Header className="bg-dark-blue justify-content-between">
                <MyButton type="more" variant="warning" text="Notification" />

            </Modal.Header>
            <Modal.Body>
                <Jumbotron className="m-0">
                    <Container className="pl-3">
                        <ModalTitle>{props.text}</ModalTitle>
                    </Container>
                </Jumbotron>
            </Modal.Body>
            <Modal.Footer style={{ backgroundColor: "#e9ecef" }}>
                <MyButton type="return" text="Return" onClick={props.hide} />
            </Modal.Footer>
        </Modal>
    );
}

export default MainModal;