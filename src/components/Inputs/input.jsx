/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import "./input.css";

function StyledInput(props) {
  const { helperText, ...rest } = props;
  const setlabelTransition = (e) => {
    e.preventDefault();
    if (e.target.value !== "") {
      e.target.classList.add("labelMove");
    } else {
      e.target.classList.remove("labelMove");
    }
  };

  return (
    <>
      <div className="styledInput">
        <input {...rest} type={props.type} onChange={props.onChange} name={props.name} value={props.value} id={props.name} onBlur={setlabelTransition} />
        <img src={props.icon} alt="" />
        <label htmlFor={props.name}>{props.label}</label>
      </div>
      <small className="helperText">{helperText}</small>
    </>
  );
}

export default StyledInput;
