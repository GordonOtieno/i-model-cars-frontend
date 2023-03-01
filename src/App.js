import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import Details from './components/Details/Details';
import SignUpForm from './components/SignUp/SignUp';

const App = () => (
  <Routes>
    <Route path="/" element={<SignUpForm />} />
    <Route path="" element={<Main />} />
    <Route path="http://127.0.0.1:3000/api/v1/cars/:id" element={<Details />} />
  </Routes>
);

export default App;
