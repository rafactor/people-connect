import React from "react";
import { Col, Row } from 'react-bootstrap';
import MyButton from "../MyButton";


function FormError(props) {
    return (
        <Row className={`my-4 pb-4 ${props.text ? "" : "d-none"}`}>
            <Col sm={12} className="text-center py-0 px-1">
                <MyButton size="lg" variant="outline-danger" className="px-5" type="error" text={`Error: ${props.text}`} />
            </Col>
        </Row>

    );
}

export default FormError;