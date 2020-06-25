import React from 'react';
import './typography.css';

function Typograpy(props) {
  return (
    <div className='typography'>
      {props.type === 'title' ? (
        <p className='title'>{props.children}</p>
      ) : props.type === 'link' ? (
        <p className='link'>{props.children}</p>
      ) : (
        <p className='text'>{props.children}</p>
      )}
    </div>
  );
}

export default Typograpy;
