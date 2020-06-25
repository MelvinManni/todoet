import React from 'react'
import ButtonFill from '../Buttons/buttonFill'
import './input.css'

function AddInput( props) {
    return (
      <div className='addInput'>
        <input
          type={props.type}
          onChange={props.onChange}
          name={props.name}
          value={props.value}
          id={props.id}
          placeholder={props.placeholder}
        />

        <ButtonFill
        label={'Add +'}
        onClick={props.onClick}
        />
      </div>
    );
}

export default AddInput
