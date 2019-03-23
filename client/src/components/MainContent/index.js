import React from "react";
import { Jumbotron, Row } from 'react-bootstrap';

function MainContent(props) {

    var contentStyle = () => {
        if (props.window.width < 770) {
            return {
                height: (props.window.height - 56) + "px",
                overflow: "auto",
            }
        }
        return {
            height: (props.window.height - 1) + "px",
            minHeight: "300px",
            overflow: "auto"
        }
    }

    return (
        <Jumbotron className="col-12 col-xl-10 col-md-9 px-3 pt-3 pb-0 m-0" style={contentStyle()}>
            <Row>
                {props.children}
            </Row>
        </Jumbotron>
    );
}

export default MainContent;