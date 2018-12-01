import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Formnflow from './Formnflow';
import Hatcher from './Hatcher';
import { TransitionGroup, CSSTransition  } from 'react-transition-group';

export default () => (
  <div>
    <Route render={({location}) => (
      <TransitionGroup>
        <CSSTransition key={location.key} timeout={5000} classNames="fade">
          <Switch location={location}>
            <Route exact path="/" component={Home} />
            <Route path="/formnflow" component={Formnflow} />
            <Route path="/hatcher" component={Hatcher} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )} />
  </div>
);
