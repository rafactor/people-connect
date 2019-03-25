import React from "react";
import { Button, Modal, Container, Jumbotron } from 'react-bootstrap';
import buttons from "../buttons.json";

function renderFooter(footer, hideModal) {
    var abortBtn = buttons[footer.abort];
    var processBtn = buttons[footer.process];
    return (
        <>
            <Button variant={abortBtn.variant} onClick={hideModal}>
                <i className={abortBtn.icon}></i>{" " + abortBtn.text}
            </Button>
            <Button variant={processBtn.variant}>
                <i className={processBtn.icon}></i>{" " + processBtn.text}
            </Button>
        </>
    )
}
function MainModal(props) {
    return (
        <Modal centered size="lg" show={props.show} onHide={props.hideModal}>
            <Modal.Header className="bg-dark-blue justify-content-between">
                <Button variant="outline-light" >
                    <i className={props.header.icon}></i> {props.header.text}
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
                {renderFooter(props.footer, props.hideModal)}
            </Modal.Footer>
        </Modal>
    );
}

export default MainModal;