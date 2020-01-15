import React from 'react';
import FetchUser from './components/FetchUser'
import Home from './components/Home';
import Login from './components/Login';
import NoMatch from './components/NoMatch';
import Register from './components/Register';
import Sidenav from './components/Sidenav';
import { Switch, Route, } from 'react-router-dom';
import { Container, } from '@material-ui/core';

const App = () => (
  <>
  <Sidenav />
    <FetchUser>
      <Container>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </FetchUser>
  </>
);

export default App;
