import React from 'react';
import err from './../../assets/404.gif';
import Nav from '../../components/Nav/nav';
import Container from '../../components/Container/container';
import './404.css';
import ButtonFill from '../../components/Buttons/buttonFill';

function Error404() {
  return (
    <div className='errorPage'>
      <Nav />
      <Container page='404'>
        <div className='w50-lg errorHolder w100-small '>
          <img src={err} className=' w50-lg w75-small' alt='' />
        </div>

        <div className='spaceY-lg w25-lg w50-small'>
          <a href='/dashboard'>
            <ButtonFill label='Return Home' />
          </a>
          <div className="spaceY-md"></div>
        </div>
      </Container>
    </div>
  );
}

export default Error404;
