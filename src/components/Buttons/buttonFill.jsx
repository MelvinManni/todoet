/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import './button.css';

function ButtonFill(props) {

  return (
    <div className='buttonFill button-component'>
      <button type={props.type} onClick={props.onClick} >
        <div className='riple'>{props.label}</div>
      </button>
    </div>
  );
}

export default ButtonFill;
