import React from "react";
import { Form, FormControl, Col, Button, InputGroup, Container } from 'react-bootstrap';
import fields from './fieldKeys.json';

function render(props) {
    var field = fields[props.variant]
    console.log(field)
    if (field) {
        return (
            <Form.Row className="form-group">
                <InputGroup.Prepend>
                    <Button variant={field.prepend.variant}>
                        <i className={field.prepend.icon}></i>
                    </Button>
                </InputGroup.Prepend>
                <Col>
                    {field.main.map(row => (
                        <InputGroup>
                            {row.map(input => {
                                if (input.as === "select") {
                                    return (
                                        < FormControl
                                            as={props.as || input.as}
                                            type={props.type || input.type}
                                            name={props.name || input.name}
                                            placeholder={props.placeholder || input.placeholder}
                                            className={(props.placeholder + input.class) || ""}
                                        >
                                            {renderOptions(props.options, props.placeholder, input.placeholder)}
                                        </FormControl>
                                    )
                                }
                                return (
                                    < FormControl
                                        as={props.as || input.as}
                                        type={props.type || input.type}
                                        name={props.name || input.name}
                                        placeholder={props.placeholder || input.placeholder}
                                        className={(props.placeholder + input.class) || ""}
                                    />
                                )
                            })}
                        </InputGroup>
                    ))}
                </Col>
                <InputGroup.Append>
                </InputGroup.Append>
            </Form.Row>
        )
    }
    return <></>
}

function renderOptions(options, placeholder, defaultPlaceholde) {
    return <>
        <option value="" selected>{placeholder || defaultPlaceholde}</option>
        {options.map(option => (
            <option value={option.value}>{option.text}</option>))}
    </>
}

function InputField(props) {

    return (
        <Container>
            {render(props)}
        </Container>

    );
}

export default InputField;