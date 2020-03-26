import React from 'react';

import SignupForm from './signup/signupForm';
import { NavBar } from '../shared';

export default function Signup() {
  return (
    <>
      <NavBar title="Signup" />
      <main>
        <SignupForm />
      </main>
    </>
  );
}