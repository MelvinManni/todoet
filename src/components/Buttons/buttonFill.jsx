/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import "./button.css";
import load from "../../assets/spinnerWhite.svg";

function ButtonFill(props) {
  const { ...rest } = props;
  return (
    <div className="buttonFill button-component">
      <button {...rest} disabled={props.loading} type={props.type} onClick={props.onClick}>
        <div className="riple">{props.loading ? <img src={load} alt="" /> : props.label}</div>
      </button>
    </div>
  );
}

export default ButtonFill;
