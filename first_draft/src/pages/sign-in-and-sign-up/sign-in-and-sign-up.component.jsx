import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import Register from '../../components/register/register.component';

import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUpPage = () => (
  <div className='sign-in-and-sign-up' style={{display:'flex', justifyContent: 'space-around'}}>
    <SignIn />
    <Register />
  </div>
);

export default SignInAndSignUpPage;
