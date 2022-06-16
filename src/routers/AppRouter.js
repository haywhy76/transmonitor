import React, { useEffect, useReducer} from 'react';
import {BrowserRouter,Routes, Route,Switch, useLocation} from 'react-router-dom'
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import Dashboard from '../components/Dashboard';
import Signin from '../components/Signin';
import Pof from '../components/Pof';
import Loanstatus from '../components/Loanstatus';
import Approvedloans from '../components/Approvedloans';
import Businessloan from '../components/Businessloan';


const AppRouter = () => {
  return (
  <BrowserRouter>
  <div>



    <Route render={({location}) => (
    <TransitionGroup>
    <CSSTransition key={location.key} timeout={450} classNames="fade">
         <Switch  location={location}>
  <Route path="/" component={Signin} exact={true} />
  <Route path="/home" component={Dashboard} exact={true} />
  <Route path="/pof" component={Pof} exact={true} />
  <Route path="/loanstatus" component={Loanstatus} exact={true} />
  <Route path="/approvedloans" component={Approvedloans} exact={true} />
  <Route path="/businessloan" component={Businessloan} exact={true} />



     </Switch>
     </CSSTransition>
  </TransitionGroup>
  )} />
      </div>
</BrowserRouter>

)

};

export default AppRouter;
