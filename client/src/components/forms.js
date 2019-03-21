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
        <label className="form-label col-form-label-lg" htmlFor={props.id}>{props.label}</label>
        <input className={`form-control ${props.additionalClasses}`} {...props}/>
      </div>
    );
  }

  export function Button(props) {
    return (
  
         <button className={`btn  btn-lg  ${props.additionalClasses}`} {...props}>
                {props.label}
          </button>
     
    )
  }


  export function Check(props) {
    return (
      <div className="form-group form-check">
        <input  type="checkbox" 
                className={`form-check-input ${props.additionalClasses}`} 
                id={props.id}/>
        <label className="form-check-label col-form-label" 
               for={props.id}>
               {props.label}
        </label>
      </div>
    )
  }