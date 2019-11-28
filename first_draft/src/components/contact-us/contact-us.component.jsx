import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

// import './sign-in.styles.scss';

class ContactUs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      phone: '',
      comments: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', phone: '', comments: '' });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value});
  };

  render() {
    return (
        <div className='contact-us-form'>
        <h2>Please let us know your thoughts...</h2>
        <span>Leave your details and we will get back to you as soon as we can!</span>

        <form onSubmit={this.handleSubmit}>
           <FormInput
             name='name'
             type='name'
             handleChange={this.handleChange}
             value={this.state.name}
             label='name'
             required
           />
          <FormInput
             name='email'
             type='email'
             value={this.state.email}
             handleChange={this.handleChange}
             label='email'
             required
           />
           <FormInput
             name='phone'
             type='phone'
             value={this.state.phone}
             handleChange={this.handleChange}
             label='phone'
             required
           />
           <FormInput
             name='comments'
             type='comments'
             value={this.state.comments}
             handleChange={this.handleChange}
             label='comments'
             required
           />
           <CustomButton type='submit'> Submit </CustomButton>
         </form>
         </div>
      
    );
  }
}

export default ContactUs;