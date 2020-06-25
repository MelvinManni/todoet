import React from 'react';
import Header from '../../components/Header/headers';
import Container from '../../components/Container/container';
import Typograpy from '../../components/Typography/typograpy';
import StyledInput from '../../components/Inputs/input';
import mail from './../../assets/mail.svg';
import lock from './../../assets/lock.svg';
import ButtonFill from '../../components/Buttons/buttonFill';

function Login() {
  return (
    <div className='login'>
      <Header label='Log In' />
      <Container>
        <Typograpy type='title'>welcome</Typograpy>
        <div className='flex spaceY-md'>
          <Typograpy>Don't have an account ?</Typograpy>

          <a href='/signup' className='spaceX-sm'>
            <Typograpy type='link'>Sign Up</Typograpy>
          </a>
        </div>

        <form className='spaceY-lg w100-small w50-lg' action='/dashboard'>
          <StyledInput label='Email Address' type={'email'} icon={mail} />
          <div className='spaceY-md'></div>
          <StyledInput label='Password' type={'password'} icon={lock} />
                
          <div className='spaceY-lg w25-lg w25-small ml-auto'>
            <ButtonFill type={'reset'} label={'Log In'} />
          </div>
        </form>
      </Container>
    </div>
  );
}

export default Login;
