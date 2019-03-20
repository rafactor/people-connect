import React, { Component, Suspense } from "react";
// import Home from "./home";
import { useTranslation, withTranslation, Trans } from "react-i18next";



class Landing extends Component {

    state = {
        languageOptions: [
            {key: 'en', language: 'english', orientation: 'left'},
            {key: 'ar', language: 'عربى', orientation: 'right'},
            {key: 'pt', language: 'português', orientation: 'left'},
            {key: 'uk', language: 'yкраїнська', orientation: 'right'},
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

                    <div className="home-container__title h1">
                {t("Title")}
                <div className="home-container__subtitle h5">
                {t("Subtitle")}
                </div>
                </div>
            </div>
        )
    }
}

const Welcome = withTranslation()(Landing);


function LanguageSelector(props) {
    const { t, i18n } = useTranslation();
  
    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
    };

    return(
        <form>
          <div className="form-group row">
            <div className="col-5">
              <label htmlFor="language-select">{t("language")}</label>
            </div>
            <div className="col-6">
              <select className="form-control" 
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
        </form>
    )
}
// Component using the Trans component
function MyComponent() {
    return (
      <Trans i18nKey="Subtitle">
            Find a service provider who speaks <strong>your language</strong>
      </Trans>
    );
  }

  // page uses the hook
function Page() {
    const { t, i18n } = useTranslation();
  
    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
    };
  
    return (
        <div>
          <Welcome />
          <MyComponent />
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
  export default function HomePage() {
    return (
      <Suspense fallback={<Loader />}>
        <Page />
      </Suspense>
    );
  }