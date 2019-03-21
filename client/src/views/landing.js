import React, { Component, Suspense } from "react";
import { useTranslation, withTranslation, Trans } from "react-i18next";
import { Link } from "react-router-dom";


// Component using the Trans component
function Landing() {
  const { t, i18n } = useTranslation();

    return (
        <div>
        <Link class="btn btn-primary" to="/myservices">Offer a Service</Link>
        <Link class="btn btn-secondary" to="/search">Find a Service Provider</Link>
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
  export default function LandingPage() {
    return (
      <Suspense fallback={<Loader />}>
        <Landing />

      </Suspense>
    );
  }