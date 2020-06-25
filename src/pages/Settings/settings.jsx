import React from 'react';
import Typograpy from '../../components/Typography/typograpy';
import ButtonOutline from '../../components/Buttons/buttonOutline';
import Nav from '../../components/Nav/nav';
import Container from '../../components/Container/container';
import home from './../../assets/home.svg'

function Settings() {
  return (
    <div>
      <Nav
      link={'/dashboard'}
      icon={home}
      />
      <Container>
        <Typograpy type={'title'}>Settings</Typograpy>

        <div className='settingsBtn w50-lg w100-small spaceY-xl'>
          <a href='/settings/details'>
            <ButtonOutline label={'Change details'} />
          </a>
          <div className='spaceY-md'>
            <a href='/settings/password'>
              <ButtonOutline label={'Change Password'} />
            </a>
          </div>
          <div className='spaceY-md'>
            <a href='/login'>
              <ButtonOutline label={'Log out'} />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Settings;
