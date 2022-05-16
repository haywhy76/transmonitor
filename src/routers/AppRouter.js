import React, { useEffect, useReducer} from 'react';
import {BrowserRouter,Routes, Route,Switch, useLocation} from 'react-router-dom'
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

import Home from '../components/Home';


const AppRouter = () => {
  return (
  <BrowserRouter>
  <div>



    <Route render={({location}) => (
    <TransitionGroup>
    <CSSTransition key={location.key} timeout={450} classNames="fade">
         <Switch  location={location}>
  <Route path="/" component={Home} exact={true} />

     </Switch>
     </CSSTransition>
  </TransitionGroup>
  )} />
      </div>
</BrowserRouter>

)

};

export default AppRouter;
