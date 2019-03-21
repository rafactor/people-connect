import React, { Component, Suspense } from "react";
import { useTranslation, withTranslation, Trans } from "react-i18next";
import { Link } from "react-router-dom";


// Component using the Trans component
function MyServices() {
  const { t, i18n } = useTranslation();

    return (
        <div>
        <h1>List of your Services</h1>
        <Link className="btn btn-secondary" to="/newservice">Offer New Service</Link>
        <Link className="" to="/service">ServiceDetail</Link>
        <Link className="" to="/landing">Home</Link>


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
  export default function MyServicesPage() {
    return (
      <Suspense fallback={<Loader />}>
        <MyServices />

      </Suspense>
    );
  }