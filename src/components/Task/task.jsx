/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState } from 'react';
import del from './../../assets/delete.svg';
import './task.css';

function Task(props) {
  const [checkEffect, setCheckEffect] = useState(false);

  const handleChange = (e) => {
    if (e.target.checked) {
      setCheckEffect(true);
      e.target.parentNode.className = 'checked';
    } else {
      setCheckEffect(false);
      e.target.parentNode.className = '';
    }
  };

  return (
    <div className='taskComponent'>
      <div className='taskButton'>
        {checkEffect ? (
          <img
            onClick={props.delete}
            id={props.deleteId}
            className='showTaskIcon'
            src={del}
            alt=''
          />
        ) : (
          <img onClick={props.onClick} id={props.deleteId} src={del} alt='' />
        )}
      </div>
      {checkEffect ? (
        <div className='taskItem'>
          <div className='check'>
            <label>
              <input onChange={handleChange} type='checkbox' name='check'/>
            </label>
          </div>
          <div className='taskContent'>
            {checkEffect ? (
              <p className='strikeThrough'>{props.task}</p>
            ) : (
              <p>{props.task}</p>
            )}
          </div>
        </div>
      ) : (
        <div className='taskItem deleteHidden'>
          <div className='check'>
            <label>
              <input onChange={handleChange} type='checkbox' name='check' />
            </label>
          </div>
          <div className='taskContent'>
            {checkEffect ? (
              <p className='strikeThrough'>{props.task}</p>
            ) : (
              <p>{props.task}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Task;
