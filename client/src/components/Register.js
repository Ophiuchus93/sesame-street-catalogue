import React from 'react';
import { AuthConsumer, } from '../providers/AuthProvider';
import { Button, Container, FormControl, InputLabel, Input, Typography as Type, } from '@material-ui/core';

class Register extends React.Component {
  state = { email: '', password: '', passwordConfirmation: '', };

  handleSubmit = (e) => {
    e.preventDefault();
    debugger
    const { email, password, passwordConfirmation } = this.state;
    const { auth: { handleRegister, }, history, } = this.props;

    if (password === passwordConfirmation)
      handleRegister({ email, password, passwordConfirmation, }, history);
    else
      alert('Passwords Do Not Match!')
  }

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }

  render() {
    const { email, password, passwordConfirmation } = this.state;

    return (
      <>
        <br />
        <Container align='center'>
          <Type variant='h3' align='center'>Register</Type>
          <FormControl required='true'
            variant='filled'
            fullWidth='true'
            margin='normal'
            onSubmit={this.handleSubmit}
          >
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input
              autoFocus='true'
              id="my-input"
              aria-describedby="my-helper-text"
              name='email'
              value={email}
              onChange={this.handleChange}
            />
          </FormControl>
          <br />
          <FormControl
            required='true'
            variant='filled'
            fullWidth='true'
            margin='normal'
          >
            <InputLabel htmlFor="my-input">Password</InputLabel>
            <Input id="my-input"
              aria-describedby="my-helper-text"
              name='password'
              value={password}
              onChange={this.handleChange}
            />
          </FormControl>
          <br />
          <FormControl
            required='true'
            variant='filled'
            fullWidth='true'
            margin='normal'
          >
            <InputLabel htmlFor="my-input">Password Confirmation</InputLabel>
            <Input 
              name='passwordConfirmation'
              value={passwordConfirmation}
              onChange={this.handleChange}
            />
            <br />
          </FormControl>
          <Button variant='contained' color='primary' type='submit' onClick={this.handleSubmit}>Submit</Button>
        </Container>
      </>
    );
  };
};

export default class ConnectedRegister extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth => <Register {...this.props} auth={auth} />}
      </AuthConsumer>
    );
  };
};