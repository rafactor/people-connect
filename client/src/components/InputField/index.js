import React from "react";
import { Form, Col, Button, InputGroup } from 'react-bootstrap';
import fields from '../inputFields.json';
import { useTranslation } from "react-i18next";

function renderOptions(opts, defaultOpts) {
    var options = opts || defaultOpts;
    if (options) {
        return (
            options.map((option, i) => (
                <option value={option.value} id={i + 1} key={i + 1} >{option.text}</option>))
        )
    }
    else {
        return (<></>)
    }
}

function InputField(props) {
    const { t } = useTranslation()
    var field = fields[props.field]
    if (!field) {
        return (<></>);
    }

    return (
        <Form.Group as={Form.Row} className={props.className || ""} id={props.id}>
            <InputGroup.Prepend style={{ minWidth: "3em" }}>
                <Button className="w-100 shadow" variant={field.prepend.variant}>
                    <i className={field.prepend.icon}></i>
                </Button>
            </InputGroup.Prepend>
            <Col>
                {field.main.map((row, i) => (
                    <InputGroup key={i} id={i}>
                        {row.map((input, i) => {
                            if (input.as === "select") {
                                return (
                                    < Form.Control
                                        id={i}
                                        key={i}
                                        as={props.as || input.as}
                                        type={props.type || input.type}
                                        name={props.name || input.name}
                                        plaintext={props.plaintext}
                                        readOnly={props.readOnly}
                                        disabled={props.disabled}
                                        onChange={props.onChange || ""}
                                        placeholder={(props.placeholder) ? t(props.placeholder) : "" || t(input.placeholder)}
                                        className={`${input.class || ""} shadow`}
                                        value={props.value[props.name || input.name] || ""}
                                    >
                                        <option value="" key={1} id={1}>{(props.placeholder) ? t(props.placeholder) : "" || t(input.placeholder)}</option>
                                        {renderOptions(props.options, input.options)}
                                    </Form.Control>
                                )
                            }
                            return (
                                < Form.Control
                                    id={i}
                                    key={i}
                                    as={props.as || input.as}
                                    type={props.type || input.type}
                                    name={props.name || input.name}
                                    plaintext={props.plaintext}
                                    readOnly={props.readOnly}
                                    disabled={props.disabled}
                                    onChange={props.onChange || ""}
                                    placeholder={(props.placeholder) ? t(props.placeholder) : "" || t(input.placeholder)}
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