import React from "react";

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
    return (
      <div>  
        <label htmlFor={props.id}>{props.label}</label>
        <input className={`form-control ${props.additionalClasses}`} {...props} />
      </div>
    );
  }