import React from 'react';
import Characters from './Muppets';
import { Typography as Type, } from '@material-ui/core';

const Home = () => (
  <>
  <Type variant='h3' align='center'>Devise Auth App</Type>
    <Characters />
  </>
);

export default Home;