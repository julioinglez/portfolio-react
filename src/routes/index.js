import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Formnflow from './Formnflow';
import Hatcher from './Hatcher';
import NexusPattern from './NexusPattern';
import SpeedyVocab from './SpeedyVocab';
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
            <Route path="/nexus-pattern" component={SpeedyVocab} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )} />
  </div>
);
