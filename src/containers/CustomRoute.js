import React from 'react';
// import { AuthService } from '../services/AuthService';
import { Route, Redirect } from 'react-router-dom';
import AuthenticationService from '../services/AuthService';

function buildCustomRoute(getState, redirectPath) {
  return function ({ component: Component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props => {
          return (
            getState() ? (
              <Component {...props} />
            ) : (
              <Redirect
                to={{
                  pathname: (typeof redirectPath === 'string') ?
                    redirectPath : redirectPath(),
                  state: { from: props.location }
                }}
              />
            )
          )
        }}
      />
    );
  };
}

export const AuthRoute = buildCustomRoute(() => !AuthenticationService.logged(), '/app');
export const PrivateRoute = buildCustomRoute(() => AuthenticationService.logged(), '/');
export const AdminRoute = buildCustomRoute(() => AuthenticationService.logged() && AuthenticationService.user.Name === 'admin', 
  () => {
    if(AuthenticationService.logged()) {
      if(!AuthenticationService.user.Username) {
        return '/app';
      }
    }
    else {
      return '/';
    }
  });