import React from 'react'
import './button.css'

function ButtonOutline(props) {
    return (
        <div className='buttonOutline button-component'>
            <button onClick={props.onClick}>
                {props.label}
            </button>
        </div>
    )
}

export default ButtonOutline
