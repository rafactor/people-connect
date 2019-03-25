import React from "react";
import { Button } from 'react-bootstrap';
import buttons from "./buttons.json";

function Register(props) {
    var selectedBtn = buttons[props.type]
    if (!selectedBtn) {
        selectedBtn = {
            variant: "info",
            icon: "",
            text: "",
        }
    }
    return (
        <Button
            size={props.size || ""}
            className={`shadow ${props.className || ""}`}
            variant={props.variant || selectedBtn.variant}
            onClick={props.onClick}>
            <i className={props.icon || selectedBtn.icon}></i> {props.text || selectedBtn.text}
        </Button>
    );

}

export default Register;