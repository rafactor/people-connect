import React from "react";
import { useTranslation, withTranslation, Trans } from "react-i18next";
import { Link } from "react-router-dom";

export function Container({ fluid, children }) {
    return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}

export function FormValidation({children}){
    return(
        <form className="needs-validation" novalidate>
            {children}
        </form>
    )
}

export function FormRow({children}){
    return (
        <div className="form-row">
        {children}
        </div>
    )
}

export function Col({ size, children }) {
    return (
      <div
        className={size
          .split(" ")
          .map(size => "col-" + size)
          .join(" ")}
      >
        {children}
      </div>
    );
  }

 export function TextInput(props) {
  const { t, i18n } = useTranslation();
  
    return (
      <div>  
        <label className="form-label col-form-label-lg" 
               htmlFor={props.id}>{t(props.label)}</label>
        <input className={`form-control ${props.additionalClasses}`} 
               placeholder={`${t(props.placeholder)}`}
               {...props}/>
      </div>
    );
  }

  export function TextArea(props) {
    const { t, i18n } = useTranslation();
    
      return (
        <div>  
          <label className="form-label col-form-label-lg" 
                 htmlFor={props.id}>{t(props.label)}</label>
          <textarea row="3" className={`form-control ${props.additionalClasses}`} 
                 placeholder={`${t(props.placeholder)}`}
                 {...props}/>
        </div>
      );
    }

  export function Button(props) {
    const { t, i18n } = useTranslation();

    return (
  
         <button className={`btn  btn-lg  ${props.additionalClasses}`} {...props}>
                {t(props.label)}
          </button>
     
    )
  }


  export function Check(props) {
    const { t, i18n } = useTranslation();

    return (
      <div className="form-group form-check">
        <input  type="checkbox" 
                className={`form-check-input ${props.additionalClasses}`} 
                id={props.id}/>
        <label className="form-check-label col-form-label" 
               for={props.id}>
               {t(props.label)}
        </label>
      </div>
    )
  }

  export function Select(props) {
    const { t, i18n } = useTranslation();

    return(
      <div className="form-group">
        <label htmlFor={props.id} 
               className="form-check-label col-form-label-lg" >
               {t(props.label)}
        </label>
        <select className={`form-control ${props.additionalClasses}`} {...props}>
            {/* {console.log(props.options)} */}
            {props.options.map(doc =>{
              return (
                <option value={doc.value}>{t(doc.option)}</option>
                // console.log(doc)
                )
            })}
        </select>
      </div>
    )
  }

  export function LanguageList(props){
    const { t, i18n } = useTranslation();

    return(
      <div>
        <label htmlFor={props.id} 
               className="form-check-label col-form-label-lg" >
               {t(props.label)}
        </label>
        <div className="" id="selected-languages">
        Display the array of selected languages
        </div>
     
      <div className="input-group">

        <select className={`form-control ${props.additionalClasses}`} {...props}>
            <option value="" disabled>Select a Language</option>
            <option value=""></option>
            <option value="AF">Afrikanns</option>
            <option value="SQ">Albanian</option>
            <option value="AR">Arabic</option>
            <option value="HY">Armenian</option>
            <option value="EU">Basque</option>
            <option value="BN">Bengali</option>
            <option value="BG">Bulgarian</option>
            <option value="CA">Catalan</option>
            <option value="KM">Cambodian</option>
            <option value="ZH">Chinese (Mandarin)</option>
            <option value="HR">Croation</option>
            <option value="CS">Czech</option>
            <option value="DA">Danish</option>
            <option value="NL">Dutch</option>
            <option value="EN">English</option>
            <option value="ET">Estonian</option>
            <option value="FJ">Fiji</option>
            <option value="FI">Finnish</option>
            <option value="FR">French</option>
            <option value="KA">Georgian</option>
            <option value="DE">German</option>
            <option value="EL">Greek</option>
            <option value="GU">Gujarati</option>
            <option value="HE">Hebrew</option>
            <option value="HI">Hindi</option>
            <option value="HU">Hungarian</option>
            <option value="IS">Icelandic</option>
            <option value="ID">Indonesian</option>
            <option value="GA">Irish</option>
            <option value="IT">Italian</option>
            <option value="JA">Japanese</option>
            <option value="JW">Javanese</option>
            <option value="KO">Korean</option>
            <option value="LA">Latin</option>
            <option value="LV">Latvian</option>
            <option value="LT">Lithuanian</option>
            <option value="MK">Macedonian</option>
            <option value="MS">Malay</option>
            <option value="ML">Malayalam</option>
            <option value="MT">Maltese</option>
            <option value="MI">Maori</option>
            <option value="MR">Marathi</option>
            <option value="MN">Mongolian</option>
            <option value="NE">Nepali</option>
            <option value="NO">Norwegian</option>
            <option value="FA">Persian</option>
            <option value="PL">Polish</option>
            <option value="PT">Portuguese</option>
            <option value="PA">Punjabi</option>
            <option value="QU">Quechua</option>
            <option value="RO">Romanian</option>
            <option value="RU">Russian</option>
            <option value="SM">Samoan</option>
            <option value="SR">Serbian</option>
            <option value="SK">Slovak</option>
            <option value="SL">Slovenian</option>
            <option value="ES">Spanish</option>
            <option value="SW">Swahili</option>
            <option value="SV">Swedish </option>
            <option value="TA">Tamil</option>
            <option value="TT">Tatar</option>
            <option value="TE">Telugu</option>
            <option value="TH">Thai</option>
            <option value="BO">Tibetan</option>
            <option value="TO">Tonga</option>
            <option value="TR">Turkish</option>
            <option value="UK">Ukranian</option>
            <option value="UR">Urdu</option>
            <option value="UZ">Uzbek</option>
            <option value="VI">Vietnamese</option>
            <option value="CY">Welsh</option>
            <option value="XH">Xhosa</option>
        </select>
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" 
                  type="button">{t("Add")}</button>
        </div>
     </div>
     </div>
    )
  }