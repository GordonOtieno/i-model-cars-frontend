import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import NewReservationForm from './components/reservations/NewReservationForm';
import SignUpForm from './components/SignUp/SignUp';
import './App.css';
import Reservations from './components/reservations/Reservations';
import reservationReducer from './redux/reservationsSlice';

const store = configureStore({
  reducer: reservationReducer,
});

const App = () => (
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/signup" element={<SignUpForm />} />
    <Route path="/reservations" element={<Reservations />} />
    <Route path="/reservations/new" element={<NewReservationForm />} />
    </Routes>
  </Provider>
);

export default App;
