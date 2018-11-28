import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => (
  <div>
    <NavLink exact to="/" activeClassName="active" className="link-home">Home</NavLink>
    <NavLink exact to="/formnflow" activeClassName="active" className="link-formnflow">Formnflow</NavLink>
  </div>
);
