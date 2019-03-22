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