import React from "react";
import { Form, Col, Button, InputGroup } from 'react-bootstrap';
import fields from '../inputFields.json';
import { useTranslation } from "react-i18next";

function AppLanguage(props) {
    let field = fields["appLanguage"]
    const { i18n } = useTranslation()
    if (i18n.language !== props.state.AppLanguage) {
        props.state.changeLanguage(i18n.language);
    }
    return (
        <Form.Row>
            <Col xl={3} lg={4} md={4} sm={5} xs={12}>
                <Form.Group as={Form.Row}>
                    <InputGroup.Prepend style={{ width: "3em" }}>
                        <Button className="w-100 shadow bg-dark-blue" variant={field.prepend.variant}>
                            <i className={field.prepend.icon}></i>
                        </Button>
                    </InputGroup.Prepend>
                    <Col>
                        <InputGroup>
                            < Form.Control as={"select"} type={"text"} onChange={(event) => { props.state.changeLanguage(event.target.value); i18n.changeLanguage(event.target.value); }} className={"shadow border"} value={props.state.AppLanguage} >
                                {field.main[0][0].options.map((option, i) => (<option value={option.value} id={i + 1} key={i + 1} >{option.text}</option>))}
                            </Form.Control>
                        </InputGroup>
                    </Col>
                    <InputGroup.Append>
                    </InputGroup.Append>
                </Form.Group>
            </Col>
        </Form.Row>
    )
}

export default AppLanguage;
