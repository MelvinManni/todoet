/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import './input.css';

function StyledInput(props) {
  const setlabelTransition = (e) => {
    e.preventDefault();
    if (e.target.value !== '') {
      e.target.classList.add('labelMove');
    } else {
      e.target.classList.remove('labelMove');
    }
  };

  return (
    <div className='styledInput'>
      <input
        type={props.type}
        onChange={props.onChange}
        name={props.name}
        value={props.value}
        htmlFor={props.id}
        onChange={setlabelTransition}
      />
      <img src={props.icon} alt='' />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
}

export default StyledInput;
