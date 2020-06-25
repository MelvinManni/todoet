import React from 'react';
import './nav.css';
import icon from './../../assets/user.svg';

function Nav(props) {
  return (
    <nav>
      <div>
        <div className='circle'></div>
        <a href={props.link}>
          <img src={props.icon} alt='' />
        </a>
      </div>

      <div className='avatar'>
        {!props.name ? <p>Alias</p> : <p>{props.name}</p>}
        {!props.avatar ? (
          <img src={icon} alt='' />
        ) : (
          <img src={props.avatar} alt='' />
        )}
      </div>
    </nav>
  );
}

export default Nav;
