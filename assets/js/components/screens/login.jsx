import React from 'react';

import LoginForm from './login/loginForm';
import { NavBar } from '../shared';

export default function Login() {
  return (
    <>
      <NavBar title="Login" />
      <main>
        <LoginForm />
      </main>
    </>
  );
}