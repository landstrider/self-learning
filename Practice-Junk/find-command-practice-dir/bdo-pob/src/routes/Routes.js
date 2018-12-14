import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import DashboardWithFetching from '../Pages/Dashboard/Dashboard';
import Login from '../Pages/Login/Login';
import ForgotContainer from '../Pages/Login/Components/ForgotContainer/ForgotContainer';

const Routes = () => (
  <Switch>
	<Route
	  exact
	  path="/"
	  render={() => (
		<Redirect to="/login" />
	  )}
	/>
	<Route exact path="/login" component={Login} />
	<Route exact path="/dashboard" component={ DashboardWithFetching } />
	<Route exact path="/forgotPassword" component= { ForgotContainer } />
  </Switch>
);

export default Routes;
