import React from "react";
import { Form, Col, Button, InputGroup } from 'react-bootstrap';
import fields from './inputField.json';

function renderOptions(opts, defaultOpts) {
    var options = opts || defaultOpts;
    if (options) {
        return (
            options.map(option => (
                <option value={option.value}>{option.text}</option>))
        )
    }
    else {
        return (<></>)
    }
}

function InputField(props) {
    var field = fields[props.type]
    if (!field) {
        return (<></>);
    }

    return (
        <Form.Group as={Form.Row} className={props.className || ""}>
            <InputGroup.Prepend style={{ minWidth: "3em" }}>
                <Button className="w-100 shadow" variant={field.prepend.variant}>
                    <i className={field.prepend.icon}></i>
                </Button>
            </InputGroup.Prepend>
            <Col>
                {field.main.map(row => (
                    <InputGroup>
                        {row.map(input => {
                            if (input.as === "select") {
                                return (
                                    < Form.Control
                                        as={props.as || input.as}
                                        type={props.type || input.type}
                                        name={props.name || input.name}
                                        onChange={props.onChange || ""}
                                        placeholder={props.placeholder || input.placeholder}
                                        className={`${input.class || ""} shadow`}
                                        value={props.value[props.name || input.name] || ""}
                                    >
                                        <option value="">{props.placeholder || input.placeholder}</option>
                                        {renderOptions(props.options, input.options)}
                                    </Form.Control>
                                )
                            }
                            return (
                                < Form.Control
                                    as={props.as || input.as}
                                    type={props.type || input.type}
                                    name={props.name || input.name}
                                    onChange={props.onChange || ""}
                                    placeholder={props.placeholder || input.placeholder}
                                    value={props.value[props.name || input.name] || ""}
                                    className={`${input.class || ""} shadow`}
                                />
                            )
                        })}
                    </InputGroup>
                ))}
            </Col>
            <InputGroup.Append>
            </InputGroup.Append>
        </Form.Group>
    );
}

export default InputField;