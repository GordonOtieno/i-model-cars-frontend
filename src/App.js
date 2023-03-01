import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import Details from './components/Details/Details';

const App = () => (
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/Details/:id" element={<Details />} />
  </Routes>
);

export default App;
