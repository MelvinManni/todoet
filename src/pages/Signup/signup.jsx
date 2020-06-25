import React from 'react';
import Header from '../../components/Header/headers';
import Container from '../../components/Container/container';
import Typograpy from '../../components/Typography/typograpy';
import StyledInput from '../../components/Inputs/input';
import mail from './../../assets/mail.svg';
import lock from './../../assets/lock.svg';
import user from './../../assets/user.svg';
import ButtonFill from '../../components/Buttons/buttonFill';

function SignUp() {
    return (
        <div className='SignUp'>
            <Header label='Sign Up' />
            <Container>
                <Typograpy type='title'>Create account</Typograpy>
                <div className='flex spaceY-md'>
                    <Typograpy>Already have an account ?</Typograpy>

                    <a href='/signup' className='spaceX-sm'>
                        <Typograpy type='link'>Sign In</Typograpy>
                    </a>
                </div>

                <form className='spaceY-lg w100-small w50-lg' action='/dashboard'>

                    <StyledInput label='First Name' type={'text'} icon={user} />
                    <div className='spaceY-md'></div>
                    <StyledInput label='Last Name' type={'text'} icon={user} />
                    <div className='spaceY-md'></div>
                    <StyledInput label='Email Address' type={'email'} icon={mail} />
                    <div className='spaceY-md'></div>
                    <StyledInput label='Password' type={'password'} icon={lock} />

                    <div className='spaceY-lg w25-lg w25-small ml-auto'>
                        <ButtonFill label={'Sign Up'} />
                    </div>
                </form>
            </Container>
        </div>
    );
}

export default SignUp;
