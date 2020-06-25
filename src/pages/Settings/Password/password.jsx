import React from 'react';
import Nav from '../../../components/Nav/nav';
import Container from '../../../components/Container/container';
import Typograpy from '../../../components/Typography/typograpy';
import ButtonOutline from '../../../components/Buttons/buttonOutline';
import StyledInput from '../../../components/Inputs/input';
import lock from './../../../assets/lock.svg';
import home from './../../../assets/home.svg';

function Password() {
  return (
    <div>
      <Nav link={'/dashboard'} icon={home} />
      <Container>
        <Typograpy type={'title'}>Password</Typograpy>

        <form className='settingsBtn w50-lg w100-small spaceY-xl'>
          <StyledInput label={'Old password'} type={'password'} icon={lock} />

          <div className='spaceY-md'>
            <StyledInput label={'New password'} type={'password'} icon={lock} />
          </div>

          <div className='spaceY-md'>
            <StyledInput label={'Confirm password'} type={'password'} icon={lock} />
          </div>

          <div className='spaceY-lg'>
            <ButtonOutline label={'Update'} />
          </div>
        </form>
      </Container>
    </div>
  );
}

export default Password;
