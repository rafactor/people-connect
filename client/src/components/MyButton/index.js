import React from "react";
import { Button } from 'react-bootstrap';
import buttons from "./buttons.json";

function Register(props) {
    var selectedBtn = buttons[props.type]
    if (!selectedBtn) {
        selectedBtn = {
            variant: "dark",
            icon: "",
            text: " ",
            className: "text-dark",
            icon: "fas fa-dot-circle text-dark"
        }
    }
    return (
        <Button
            size={props.size || ""}
            className={`shadow ${props.className || ""}`}
            href={props.href || ""}
            variant={props.variant || selectedBtn.variant}
            onClick={props.onClick}
            active={props.active || false}
        >
            <i className={props.icon || selectedBtn.icon}></i> {props.text || selectedBtn.text}
        </Button>
    );

}

export default Register;