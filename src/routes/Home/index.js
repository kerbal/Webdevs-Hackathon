import React from 'react';
import { LogoutButton } from '../../components/Buttons';
import { AuthService } from '../../services/AuthService';

export function Home() {
  return (
    <div>
      <h1>Welcome home</h1>
      <LogoutButton className="btn btn-primary" onClick={_ => AuthService.logout()}>Logout</LogoutButton>
    </div>
  )
}