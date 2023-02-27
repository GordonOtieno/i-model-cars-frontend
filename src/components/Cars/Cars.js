import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Car from '../Car/Car';

const Cars = () => {
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

  const list = cars.map((car) => (
    <li key={car.id}>
      <Car
        name={car.name}
        image={car.image}
        description={car.description}
        type={car.type}
        cost={car.cost}
        speed={car.speed}
        color={car.color}
      />
    </li>
  ));

  return (
    <div className="home">
      <div className="header">
        <h1>LATEST i-MODEL CARS</h1>
        <div className="subheader">
          Experience Luxury
        </div>
      </div>
      <div className="list" />
      <div>This is the Cars#index view</div>
      <ul>{list}</ul>
    </div>
  );
};

export default Cars;
