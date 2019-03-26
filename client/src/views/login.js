import React, { Component } from "react";
import { useTranslation, withTranslation, Trans } from "react-i18next";
import { Container, FormValidation, FormRow, Col, TextInput, Button, Check } from "../components/forms"
import { Header } from "../components/header";
import { Link } from "react-router-dom";


export default class Login extends Component {

    state ={
        email:"",
        password:"",
        rememberMe:""
    }
    render() {
        // const { t, i18n } = this.props;

        return (
            <div>
                <Container>
                    <Header heading="appName"/>
                    <FormValidation action="/api/auth/login">
                        <FormRow>
                            <Col size="md-12">
                                <TextInput label="Email" 
                                           id="login-email-input"
                                           type="email"
                                           placeholder="enter your email"
                                           additionalClasses="anotherclass"
                                           name="email"
                                           />
                                <TextInput label="Password" 
                                           id="login-password-input"
                                           type="password"
                                           placeholder="password"
                                           additionalClasses="anotherclass"
                                           name="password"
                                           />
                                <Check label="Remember Me" 
                                           id="login-check-remember"
                                           additionalClasses="anotherclass"
                                           />
                                </Col>
                        </FormRow>
                            <Button 
                                label="Sign In"
                                type="submit"
                                additionalClasses="btn-primary"/>

                        <Link to="/register">Sign Up</Link>

                    </FormValidation>
                    <hr/>
                    <Button 
                                label="Google +"
                                type="button"
                                additionalClasses="btn-primary btn-danger btn-login-with"/>
                    
                    <Button 
                                label="Facebook"
                                type="button"
                                additionalClasses="btn-primary btn-login-with"/>
                    
                    <Button 
                                label="Github"
                                type="button"
                                additionalClasses="btn-dark btn-login-with"/>
                  

                </Container>
                
            </div>
        )
    }
}