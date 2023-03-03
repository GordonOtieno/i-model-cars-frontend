import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NewReservationForm from './components/reservations/NewReservationForm';
import SignUpForm from './components/SignUp/SignUp';
import Details from './components/details/Details';
import './App.css';

const App = () => (
  <Routes>
    <Route path="/" element={<Details />} />
    <Route path="/main" element={<SignUpForm />} />
    <Route path="/reservations/new" element={<NewReservationForm />} />
  </Routes>
);

export default App;
