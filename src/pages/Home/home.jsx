import React from 'react';
import Container from '../../components/Container/container';
import Header from '../../components/Header/headers';
import Nav from '../../components/Nav/nav';
import Logo from '../../components/Logo/logo';
import ButtonOutline from '../../components/Buttons/buttonOutline';
import ButtonFill from '../../components/Buttons/buttonFill';

function Home() {
  return (
    <div className='home'>
      <Nav />
      <Container>
        <div className='logo'>
          <Logo />
        </div>

        <div className='w50-lg w100-small spaceY-xl'>
          <a href='/login'>
            <ButtonOutline label={'Login'} />
          </a>
          <div className='spaceY-md'></div>
          <a href='/signup'>
            <ButtonFill label='Signup' />
          </a>
        </div>
      </Container>
    </div>
  );
}

export default Home;
