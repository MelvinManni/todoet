import React from 'react'
import './button.css'

function ButtonOutline(props) {
    return (
      <div className='buttonOutline button-component'>
        <button type={props.type} onClick={props.onClick}>
          {props.label}
        </button>
      </div>
    );
}

export default ButtonOutline
