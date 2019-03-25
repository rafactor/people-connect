import React from "react";
import { Button, Modal, Container, Jumbotron } from 'react-bootstrap';
import MyButton from "../MyButton";

function MainModal(props) {
    return (
        <Modal scrollable centered size="lg" show={props.show} onHide={props.hideModal}>
            <Modal.Header className="bg-dark-blue justify-content-between">
                <Button variant="outline-light" >
                    <i className={props.header.icon}></i> {props.header.text}
                </Button>
                <MyButton type="hashtag" className="ml-2" text="2" />

            </Modal.Header>
            <Modal.Body>
                <Jumbotron className="m-0">
                    <Container className="pl-3">
                        Woohoo, you're reading this text in a modal!
                </Container>
                </Jumbotron>
            </Modal.Body>
            <Modal.Footer style={{ backgroundColor: "#e9ecef" }}>
                <MyButton type={props.footer.abort} onClick={props.hideModal} />
                <MyButton type={props.footer.process} onClick={props.processModal} />
            </Modal.Footer>
        </Modal>
    );
}

export default MainModal;