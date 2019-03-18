import React from "react"
import { useTranslation, Trans } from "react-i18next";


export function Text(props) {

    const { t, i18n } = useTranslation();
    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
      };

    return <div className={props.className} id={props.id}>{t(props.text)}</div>;
  }
  
export function Label(props) {

    const { t, i18n } = useTranslation();
    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
      };

    return <label {...props}>{t(props.text)}</label>;
  }

  export function Span(props) {

    const { t, i18n } = useTranslation();
    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
      };

    return <span {...props}>{t(props.text)}</span>;
  }


export default { Text, Label, Span }