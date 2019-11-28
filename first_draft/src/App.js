import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import ContactUs from './pages/contact-us/contact-us.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
        <Route path='/contact' component={ContactUs} />
      </Switch>
    </div>
  );
}

export default App;
