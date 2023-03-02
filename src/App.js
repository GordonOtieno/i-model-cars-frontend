import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NewReservationForm from './components/reservations/NewReservationForm';
import SignUpForm from './components/SignUp/SignUp';
import './App.css';
import Reservations from './components/reservations/Reservations';

const App = () => (
  <Routes>
    <Route path="/" element={<SignUpForm />} />
    <Route path="/reservations" element={<Reservations />} />
    <Route path="/reservations/new" element={<NewReservationForm />} />
  </Routes>
);

export default App;
