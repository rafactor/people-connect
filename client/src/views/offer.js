import React, { Component, Suspense } from "react";
import { useTranslation, withTranslation, Trans } from "react-i18next";
import { Link } from "react-router-dom";


// Component using the Trans component
function OfferDetail() {
  const { t, i18n } = useTranslation();

    return (
        <div>
        <h1>Offer Detail</h1>
        <Link className="btn btn-secondary" to="/request">Request</Link>
        <Link className="" to="/myservices" to="/results">Back</Link>

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
  export default function OfferPage() {
    return (
      <Suspense fallback={<Loader />}>
        <OfferDetail />

      </Suspense>
    );
  }