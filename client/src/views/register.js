import React, { Component, Suspense } from "react";
import { useTranslation, withTranslation, Trans } from "react-i18next";
import { Link } from "react-router-dom";
import { Container, FormValidation, FormRow, Col, LanguageList, TextInput, Button, Select } from "../components/forms"
import { Header } from "../components/header"


// Component using the Trans component
function RegisterForm() {
  const { t, i18n } = useTranslation();

    return (
          <Container>
          <Header heading="Register"/>
          <FormValidation>
              <FormRow>
                  <Col size="md-12">
                      <TextInput label="First Name" 
                                id="register-category-select"
                                additionalClasses="anotherclass"
                                />

                      <TextInput label="Last Name" 
                                id="register-last-name-input"
                                type="text"
                                placeholder="Wick"
                                additionalClasses="anotherclass"
                                />    

                      <TextInput label="Address 1" 
                                id="register-adress1-input"
                                type="text"
                                placeholder=""
                                additionalClasses="anotherclass"
                                />

                      <TextInput label="Address 2" 
                                id="register-adress2-input"
                                type="text"
                                placeholder=""
                                additionalClasses="anotherclass"
                                />

                      <TextInput label="City" 
                                id="register-city-input"
                                type="text"
                                placeholder=""
                                additionalClasses="anotherclass"
                                />

                      <TextInput label="Province" 
                                id="register-province-input"
                                type="text"
                                placeholder=""
                                additionalClasses="anotherclass"
                                />
                      
                      <TextInput label="Postal Code" 
                                id="register-postal-code-input"
                                type="text"
                                placeholder=""
                                additionalClasses="anotherclass"
                                />

                      <TextInput label="Phone" 
                                id="register-phone-input"
                                type="number"
                                placeholder=""
                                additionalClasses="anotherclass"
                                />

                      <TextInput label="Email" 
                                id="register-email-input"
                                type="email"
                                placeholder="enter your email"
                                additionalClasses="anotherclass"
                                />


                      <LanguageList label="Select your Languages" 
                                id="register-language-input"
                                additionalClasses="anotherclass"
                                />
                                
                      <TextInput label="Password" 
                                id="register-password-input"
                                type="password"
                                placeholder="password"
                                additionalClasses="anotherclass"
                                />

                      </Col>
              </FormRow>
                  <Button 
                      label="Sign Up"
                      type="submit"
                      additionalClasses="btn-primary"/>

                  <Link to="/login">{t("login")}</Link>
          </FormValidation>
         

      </Container>
    );
  }



  // page uses the hook
function Page() {
    const { t, i18n } = useTranslation();
  
    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
    };
  
    return (
        <div className="container">
          <RegisterForm />
      </div>
    );
  }



  // loading component for suspence fallback
const Loader = () => (
    <div className="App">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <div>loading...</div>
    </div>
  );
  
  // here app catches the suspense from page in case translations are not yet loaded
  export default function RegisterPage() {
    return (
      <Suspense fallback={<Loader />}>
        <Page />

      </Suspense>
    );
  }