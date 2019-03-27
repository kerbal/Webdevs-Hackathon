import React from 'react';
import { AuthService } from '../services/AuthService';
import { Route, Redirect } from 'react-router-dom';

function buildCustomRoute(getState, redirectPath) {
  return function ({ component: Component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          getState() ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: redirectPath,
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  };
}

export const AuthRoute = buildCustomRoute(() => !AuthService.logged, '/home');
export const PrivateRoute = buildCustomRoute(() => AuthService.logged, '/');