import React from "react"
import { useTranslation, Trans } from "react-i18next";


function Option(props) {
    return <option value={props.value}>{props.text}1</option>
}

export function Select(props) {
    const { t, i18n } = useTranslation();
    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
      };

      console.log(props.languageOpt)
      return(

        <div className="form-group">
        <label htmlFor={props.id}>{t(props.text)}</label>
        <select className={props.className} id={props.id}>
            {/* {props.languageOpt.map(option => {
                Option(option)
            })} */}
        </select>
        </div> 
      )
}