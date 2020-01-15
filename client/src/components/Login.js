import React from 'react';
import { AuthConsumer, } from '../providers/AuthProvider';
import { Button, Container, FormControl, InputLabel, Input, Typography as Type, } from '@material-ui/core';

class Login extends React.Component {
  state = { email: '', password: '', }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, } = this.state;
    this.props.auth.handleLogin({ email, password, }, this.props.history);
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value, });
  }
  render() {
    const { email, password, } = this.state;

    return (
      <>
        <br />
        <Container align='center' >
          <Type variant='h3' align='center'>Login</Type>
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
          <Button variant='contained' color='primary' type='submit' onClick={this.handleSubmit}>Submit</Button>
        </Container>
      </>
    );
  };
};

export default class ConnectedLogin extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth => <Login {...this.props} auth={auth} />}
      </AuthConsumer>
    );
  };
};