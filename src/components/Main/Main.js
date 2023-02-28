import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Sidebar from '../Details/Sidebar';

const Main = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // get cars from the api
    // update cars state
    axios.get('http://127.0.0.1:3000/api/v1/cars')
      .then((response) => {
        console.log(response.data);
        setCars(response.data);
      })
      .catch((response) => console.log(response));
  }, [cars.length]);

  return (
    <main>
      <Sidebar />
      {cars.map((car) => (
        <div key={car.id} className="content">
          <img src={car.image} alt={car.name} />
          <p>{car.name}</p>
          <hr />
          {' '}
          <p className="car-make">{car.make}</p>
          <Link to={`/Details/${car.id}`}>View</Link>
        </div>
      ))}
    </main>
  );
};

export default Main;
