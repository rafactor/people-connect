import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, FormValidation, FormRow, Col, TextInput, Button, Check } from "../components/forms"

export default class Login extends Component {
    render() {
        return (
            <div>
                <Container>
                    <FormValidation>
                        <FormRow>
                            <Col size="md-12">
                                <TextInput label="Email" 
                                           id="login-email-input"
                                           type="email"
                                           placeholder="enter your email"
                                           additionalClasses="anotherclass"
                                           />
                                <TextInput label="Password" 
                                           id="login-password-input"
                                           type="password"
                                           placeholder="password"
                                           additionalClasses="anotherclass"
                                           />
                                <Check label="Remember Me" 
                                           id="login-check-remember"
                                           type="password"
                                           additionalClasses="anotherclass"
                                           />
                                </Col>
                        </FormRow>
                            <Button 
                                label="Log In"
                                type="submit"
                                additionalClasses="btn-primary"/>
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
                {/* <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <Link className="btn btn-primary" to="/landing">Login</Link>
                <Link className="btn btn-secondary" to="/">Cancel</Link>
                </form> */}
            </div>
        )
    }
}