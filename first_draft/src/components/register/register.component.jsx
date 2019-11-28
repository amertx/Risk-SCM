import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

// import './sign-in.styles.scss';

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
        <div className='sign-in'>
        <h2>I have never used this service before</h2>
        <span>Sign up with your name, email, and password</span>

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
             handleChange={this.handleChange}
             value={this.state.email}
             label='email'
             required
           />
          <FormInput
             name='password'
             type='password'
             value={this.state.password}
             handleChange={this.handleChange}
             label='password'
             required
           />
           <CustomButton type='submit'> Register </CustomButton>
         </form>
         </div>
      
    );
  }
}

export default Register;
