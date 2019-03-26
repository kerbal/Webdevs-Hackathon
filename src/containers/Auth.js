import React, { useState } from 'react';
import { AuthService } from '../services/AuthService';

export function Auth({ children }) {
  const [logged, setLogged] = useState(AuthService.logged);
  AuthService.$auth.subscribe(logged => {
    setLogged(logged)
  });
  return (
    <>
      {children(logged)}
    </>
  )
}