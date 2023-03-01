import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NewReservationForm from './components/reservations/new';
import SignUpForm from './components/SignUp/SignUp';

const App = () => (
  <Routes>
    <Route path="/" element={<SignUpForm />} />
    <Route path="/reservations/new" element={<NewReservationForm />} />
  </Routes>
);

export default App;
