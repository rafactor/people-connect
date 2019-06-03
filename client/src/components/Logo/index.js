import React from "react";
import { Row, Col, ProgressBar } from 'react-bootstrap';
import { useTranslation } from "react-i18next";


function Logo(props) {
    const { t } = useTranslation();

    return (
        <>
            <Row>
                <Col className="mx-auto display-2 text-dark-blue text-center" style={{ textShadow: "0.01em 0.01em 0.1em black" }}>
                    <i className="fas fa-users"></i>
                    <ProgressBar className="mx-auto mt-2 w-25" variant="info" animated now={100} style={{ height: "0.65em" }} />
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                    <p className="lead text-dark-blue noselect text-center" style={{ fontSize: "2em", textShadow: "0.01em 0.01em 0.025em black" }}>
                        {t("apptitle")}
                    </p>
                </Col>
            </Row>
        </>
    );

}

export default Logo;