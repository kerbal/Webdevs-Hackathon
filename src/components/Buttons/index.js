import React from 'react';
import { withRouter } from 'react-router-dom';

function build(path) {
  return withRouter(({ history, onClick, children, ...rest }) => (
    <button {...rest} onClick={_ => {
      if (onClick()) {
        history.push(path);
      }
    }}>{children}</button>
  ));
}

export const AuthButton = build('/home');
export const LogoutButton = build('/');