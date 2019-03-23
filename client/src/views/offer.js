import React, { Component, Suspense } from "react";
import { useTranslation, withTranslation, Trans } from "react-i18next";
import { Container, FormValidation, FormRow, Col, LanguageList, TextInput, TextArea, Button, Select } from "../components/forms"
import { Header } from "../components/header"

import { Link } from "react-router-dom";


// Component using the Trans component
function OfferDetail() {
  const { t, i18n } = useTranslation();
  const categories = [
    { value:"", option: "select a category", disable: true},
    { value: "value 1", option: "category1"},
    { value: "value 2", option: "category2"},
    { value: "value 3", option: "category3"}
    ]

    return (
      <Container>
      <Header heading="Offer a Service"/>
      <FormValidation>
          <FormRow>
              <Col size="md-12">
                  <Select label="Category" 
                                id="register-category-select"
                                additionalClasses="anotherclass"
                                options={categories}
                                />

                  <Select label="Subcategory" 
                                id="register-subcategory-select"
                                additionalClasses="anotherclass"
                                options={categories}
                                />   

                  <Select label="Coverage" 
                            id="register-coverage-input"
                            additionalClasses="anotherclass"
                            options={categories}
                            />

                  <TextInput label="Age" 
                            id="register-age-input"
                            type="text"
                            placeholder=""
                            additionalClasses="anotherclass"
                            />

                  <TextArea label="Notes" 
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
  export default function OfferPage() {
    return (
      <Suspense fallback={<Loader />}>
        <OfferDetail />

      </Suspense>
    );
  }