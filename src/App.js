import React from 'react';
import Routes from './routes';
import { Router } from 'react-router-dom';
import history from './history';

export default () => (
  <Router history={history}>
    <Routes />
  </Router>
);
