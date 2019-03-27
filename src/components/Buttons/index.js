import React from 'react';
import { withRouter } from 'react-router-dom';

function build(path) {
  return withRouter(({ history, onClick, children, staticContext, ...rest }) => (
    <button {...rest} onClick={_ => {
      if (onClick()) {
        history.push(path);
      }
    }}>{children}</button>
  ));
}

export const AuthButton = build('/app');
export const LogoutButton = build('/');