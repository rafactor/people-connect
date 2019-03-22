import React, { Component, Suspense } from "react";
import { useTranslation, withTranslation, Trans } from "react-i18next";
import { Link } from "react-router-dom";

import "./home.scss"
import Login from "./login"
import Register from "./register"

class Language extends Component {

    state = {
        languageOptions: [
            {key: 'en', language: 'english', orientation: 'left'},
            {key: 'ar', language: 'عربى', orientation: 'right'},
            {key: 'pt', language: 'português', orientation: 'left'},
            {key: 'ua', language: 'yкраїнська', orientation: 'right'},
        ],
        selectedLanguage: "en"
    }

    languageChange = (event) => {
        event.preventDefault()
        const { name, value } = event.target
        
        this.setState({[name]: value});

         console.log(this.state)
    }

    render () {
        const { t, i18n } = this.props;

        return(
            <div>
                <LanguageSelector state={this.state}/>   
            </div>
        )
    }
}

const Welcome = withTranslation()(Language);


function LanguageSelector(props) {
    const { t, i18n } = useTranslation();
  
    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
    };

    return(
        <div>
          <div className="language-selector row form-group">
            <div className="col-3 language-select__label">
              <label htmlFor="language-select">{t("language")}</label>
            </div>
            <div className="col">
              <select className="language-selector__select" 
                      name= "selectedLanguage"
                      id="language-select"
                    //   value=""
                      onChange={(event) => {
                          changeLanguage(event.target.value)
                        }}
                      >
                  {props.state.languageOptions.map(lang => {
                    return <option value={lang.key} key={lang.key}>{lang.language}</option>
                  })}
              </select>
            </div>
          </div>
        </div>
    )
}
// Component using the Trans component
function AppName() {
  const { t, i18n } = useTranslation();

    return (
      <div>
      <div className="home-container__title h1 mainfont">
        {t("Title")}
        <div className="home-container__subtitle h5">
          <Trans i18nKey="Subtitle">
            Find a service provider who speaks{" "}
            <strong>your language</strong>
          </Trans>
        </div>
      </div>
      </div>
    );
  }

  // page uses the hook
function Page() {
    const { t, i18n } = useTranslation();
  
    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
    };
  
    return (
        <div className="home-container">
          <AppName />
          <Language />
          <ActionButtons />
      </div>
    );
  }

function ActionButtons() {
  const { t, i18n } = useTranslation();

  return (
    <div className="home-container__buttons">
      <Link type="button" 
              className="btn btn-primary"
              to="/login"
              >{t("login")}</Link>
        <Link type="button" 
              className="btn btn-primary"
              to="/register"
              >Register</Link>
    </div>
  )

}

  // loading component for suspence fallback
const Loader = () => (
    <div className="App">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <div>loading...</div>
    </div>
  );
  
  // here app catches the suspense from page in case translations are not yet loaded
  export default function HomePage() {
    return (
      <Suspense fallback={<Loader />}>
        <Page />

      </Suspense>
    );
  }