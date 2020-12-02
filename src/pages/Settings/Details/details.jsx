import React from 'react';
import Nav from '../../../components/Nav/nav';
import Container from '../../../components/Container/container';
import Typograpy from '../../../components/Typography/typograpy';
import ButtonOutline from '../../../components/Buttons/buttonOutline';
import StyledInput from '../../../components/Inputs/input';
import home from './../../../assets/home.svg';
import user from './../../../assets/user.svg';
import mail from './../../../assets/mail.svg';

function Details() {
  return (
    <div>
      <Nav link={'/dashboard'} icon={home} />
      <Container>
        <Typograpy type={'title'}>Details</Typograpy>

        <form className='settingsBtn w50-lg w100-small spaceY-xl'>
          <StyledInput label={'first name'} type={'text'} icon={user} />

          <div className='spaceY-md'>
            <StyledInput label={'Last name'} type={'text'} icon={user} />
          </div>

          <div className='spaceY-md'>
            <StyledInput label={'Email adddress'} type={'email'} icon={mail} />
          </div>

          <div className='spaceY-lg'>
            <ButtonOutline type={'submit'} label={'Update'} />
          </div>
        </form>
      </Container>
    </div>
  );
}

export default Details;
