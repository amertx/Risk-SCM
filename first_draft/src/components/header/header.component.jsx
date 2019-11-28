import React from 'react';
import { Link } from 'react-router-dom';

// import { ReactComponent as Logo } from '../../assets/ethereum-1.svg';
import { ReactComponent as Logo } from '../../assets/logo.svg';

import './header.styles.scss';

const Header = () => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/contact'>
        CONTACT
      </Link>
      <Link className='option' to='/signin'>
        LOGIN
      </Link>
    </div>
  </div>
);

export default Header;
