import React from 'react';
import { Link, } from 'react-router-dom'
import { Typography as Type, } from '@material-ui/core';

const NoMatch = () => (
  <Type>
    Page not found return
    <Link to='/'>Home</Link>
  </Type>
);

export default NoMatch;