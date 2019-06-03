import React from "react";
import { Button } from 'react-bootstrap';
import variants from "../variants.json";
import icons from "../icons.json";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";



function MyButton(props) {
    const { t } = useTranslation();

    //default values 
    let values = {
        icon: "fas fa-dot-circle text-dark",
        text: " ",
        button: {
            variant: "dark",
            className: `text-dark shadow ${props.className || " "}`,
            active: props.active || false,
            title: t(props.title) || " ",
            id: props.id
        }

    }
    // if the incoming parameters are valid
    if (icons[props.type]) {
        values = {
            icon: props.icon || icons[props.type].icon || "fas fa-dot-circle",
            text: t(props.text) || t(icons[props.type].text),
            button: {
                size: props.size || "md",
                className: `shadow ${props.className || " "}`,
                variant: props.variant || variants[props.type],
                onClick: props.onClick,
                active: props.active || false,
                title: t(props.title) || " ",
                id: props.id
            }
        }
    }
    let btn = (<Button {...values.button}> <i className={values.icon}></i> {values.text} </Button>)
    return (props.to) ? (<Link to={props.to} id={props.id}> {btn} </Link>) : (btn)


}

export default MyButton;