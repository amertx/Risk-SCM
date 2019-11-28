import React from 'react';
import { Link } from 'react-router-dom';

import './social-media.styles.scss';
import { ReactComponent as Logo1 } from '../../assets/fb.svg';
import { ReactComponent as Logo2 } from '../../assets/t.svg';
import { ReactComponent as Logo3 } from '../../assets/lin.svg';
import { ReactComponent as Logo4 } from '../../assets/ig.svg';

const SocialMedia = () => (
  <div className='social-media'>
    <h1 className='title'>Connect with us!</h1>
    <Link className='logo-container' to='/'>
      <Logo1 className='logo'/>
    </Link>
    <Link className='logo-container' to='/'>
      <Logo2 className='logo'/>
    </Link>
    <Link className='logo-container' to='/'>
      <Logo3 className='logo'/>
    </Link>
    <Link className='logo-container' to='/'>
      <Logo4 className='logo'/>
    </Link>
  </div>
);

export default SocialMedia;
