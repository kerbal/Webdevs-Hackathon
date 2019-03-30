import React from 'react';
// import { AuthService } from '../services/AuthService';
import { Route, Redirect } from 'react-router-dom';
import { AuthService } from '../services/AuthService';

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

export const AuthRoute = buildCustomRoute(() => !AuthService.logged(), '/app');
export const PrivateRoute = buildCustomRoute(() => AuthService.logged(), '/');
export const AdminRoute = buildCustomRoute(() => AuthService.logged() && AuthService.user.IsAdmin, 
  () => {
    if(AuthService.logged()) {
      if(!AuthService.user.IsAdmin) {
        return '/app';
      }
    }
    else {
      return '/';
    }
  });