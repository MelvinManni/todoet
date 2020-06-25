import React from 'react';
import './headers.css';

function Header(props) {
  return (
    <header>
      <div className='header'>
        <p>{props.label}</p>
      </div>
    </header>
  );
}

export default Header;
