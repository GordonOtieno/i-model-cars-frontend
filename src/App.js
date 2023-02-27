import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Car from './components/Car/Car';
import Cars from './components/Cars/Cars';

const App = () => (
  <Routes>
    <Route path="/" element={<Cars />} />
    <Route path="/cars/" element={<Car />} />
  </Routes>
);

export default App;
