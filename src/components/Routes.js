import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';

// Components
import Login from './Login';
import Dashboard from './Dashboard';

const Routes = () => (
<Router>
    <Switch>
    <Route exact path="/" component={Login}/>
    <Route path="/dashboard" component={Dashboard}/>
  </Switch>
</Router>
  
);

export default Routes;