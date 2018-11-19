import React, { Fragment } from 'react';
import { hot } from 'react-hot-loader';
import Button from './components/button';
import format from 'date-fns/format';
import addDays from 'date-fns/add_days';

const App = () => (
  <Fragment>
    <h1>Hello, world !!</h1>
    {format(new Date(), '[Today is] dddd')}
    <br />
    {format(addDays(new Date(), 1), '[Tomorrow is] dddd')}
    <br /> <br />
    <Button />
  </Fragment>
);

export default hot(module)(App);
