import React from "react";
import "./button.css";
import load from "../../assets/spinnerDark.svg";

function ButtonOutline(props) {
  const { ...rest } = props;
  return (
    <div className="buttonOutline button-component">
      <button {...rest} disabled={props.loading} type={props.type} onClick={props.onClick}>
        {props.loading ? <img src={load} alt="" /> : props.label}
      </button>
    </div>
  );
}

export default ButtonOutline;
