import React from 'react';
import ContactUs from '../../components/contact-us/contact-us.component';
import SocialMedia from '../../components/social-media/social-media.component';

// import './sign-in-and-sign-up.styles.scss';

const ContactUsPage = () => (
  <div style={{display:'flex', justifyContent: 'space-around'}}>
    <SocialMedia />
    <ContactUs />
    </div>
);

export default ContactUsPage;
