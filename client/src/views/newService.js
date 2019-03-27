import React, { Component, Suspense } from "react";
import { useTranslation, withTranslation, Trans } from "react-i18next";
import { Link } from "react-router-dom";
import { Container, FormValidation, FormRow, Col, LanguageList, TextInput, TextArea, Button, Select } from "../components/forms"
import { Header } from "../components/header"


// Component using the Trans component
function NewService() {
  const { t, i18n } = useTranslation();
  const categories = [
    { value:"", option: "select a category", disable: true},
    { value: "Lawyer", option: "Lawyer"},
    { value: "House Keeper", option: "House Keeper"},
    { value: "Baby Sitter", option: "Baby Sitter"},
    { value: "Doctor", option: "Doctor"},
    { value: "Contractor", option: "Contractor"},
    { value: "Plumber", option: "Plumber"},
    { value: "Electrician", option: "Electrician"}
  ]

  const coverage = [
    { value: "Oakville", option: "Oakville"},
    { value: "Toronto", option: "Toronto"},
    { value: "Mississauga", option: "Mississauga"},
    { value: "Brampton", option: "Brampton"},
    { value: "Markham", option: "Markham"},
    { value: "Etobicoke", option: "Etobicoke"},
    { value: "Vaughan", option: "Vaughan"},
    { value: "Burlington", option: "Burlington"},
    { value: "Milton", option: "Milton"},
  ]

    return (
      <Container>
      <Header heading="New Service"/>
      <FormValidation>
          <FormRow>
              <Col size="md-12">
                  <Select label="Category" 
                                id="register-category-select"
                                additionalClasses="anotherclass"
                                options={categories}
                                />

                  {/* <Select label="Subcategory" 
                                id="register-subcategory-select"
                                additionalClasses="anotherclass"
                                options={categories}
                                />    */}

                  <Select label="Coverage" 
                            id="register-coverage-input"
                            additionalClasses="anotherclass"
                            options={coverage}
                            />

                  <TextInput label="Date of Birth (MM-DD-YYYY)" 
                            id="register-age-input"
                            type="text"
                            placeholder=""
                            additionalClasses="anotherclass"
                            />

                  <TextArea label="Decription" 
                            id="register-notes-input"
                            type="text"
                            placeholder=""
                            additionalClasses="anotherclass"
                            />
              

                  </Col>
          </FormRow>
              <Button 
                  label="Save"
                  type="submit"
                  additionalClasses="btn-primary"/>

              <Link to="/login">{t("login")}</Link>
      </FormValidation>
      {/* <Link className="btn btn-secondary" to="/request">Request</Link>
        <Link className="" to="/myservices" to="/results">Back</Link> */}

  </Container>
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
  export default function MyServicesPage() {
    return (
      <Suspense fallback={<Loader />}>
        <NewService />

      </Suspense>
    );
  }