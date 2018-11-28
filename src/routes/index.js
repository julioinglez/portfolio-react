import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import Formnflow from './Formnflow';
import Navigation from '../components/Navigation';
import { TransitionGroup, CSSTransition  } from 'react-transition-group';

export default () => (
  <div>
    <div>
      <Navigation />
    </div>
    <Route render={({location}) => (
      <TransitionGroup>
        <CSSTransition key={location.key} timeout={500} classNames="fade">
          <Switch location={location}>
            <Route exact path="/" component={Home} />
            <Route path="/formnflow" component={Formnflow} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )} />
  </div>
);
