import React from "react";
import { useTranslation, Trans } from "react-i18next";


export default function Home(props) {

    const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
      i18n.changeLanguage(lng); 
  }
  return(
      <div className="App">
        <div className="home-container">
     
          <div className="home-container__title h1">
            {t("Title")}
            <div className="home-container__subtitle h5">
            {t("Subtitle")}
            </div>
          </div>
        
        <form>
          <div className="form-group row">
            <div className="col-5">
              <label htmlFor="language-select">{t("language")}</label>
            </div>
            <div className="col-6">
              <select className="form-control" 
                      name= "selectedLanguage"
                      id="language-select"
                      value=""
                      onChange={props.languageChange}
                      >
                  {props.state.languageOptions.map(lang => {
                    return <option value={lang.key} key={lang.key}>{lang.language}</option>
                  })}
              </select>
            </div>

          </div>
        </form>



        
        
        <button onClick={() => changeLanguage("pt")}>pt</button>
        <button onClick={() => changeLanguage("en")}>en</button>
           
     
     
      </div>


      <div className="App-intro">
        <Trans>
          To get started, edit <code>src/App.js</code> and save to reload.
        </Trans>
        <Trans i18nKey="welcome">trans</Trans>
      </div>
      <div style={{ marginTop: 40 }}>
        Learn more:&nbsp;
        <a href="https://react.i18next.com">https://react.i18next.js</a>
      </div>
    </div>
    )
  }
