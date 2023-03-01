import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUpForm from './components/SignUp/SignUp';

const App = () => (
  <Routes>
    <Route path="/" element={<SignUpForm />} />
  </Routes>
);

export default App;
