import React, { Component } from 'react';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

export default () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);
