import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import NewReservationForm from './components/reservations/NewReservationForm';
import SignUpForm from './components/SignUp/SignUp';
import './App.css';

const App = () => (
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/" element={<SignUpForm />} />
    <Route path="/reservations/new" element={<NewReservationForm />} />
  </Routes>
);

export default App;
