import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Main = () => {
  const [cars, setCars] = useState([]);
  // let's fetch data from Api
  useEffect(() => {
    axios.get('http://127.0.0.1:3000/api/v1/cars')
      .then((response) => {
        setCars(response.data);
      })
      .catch((response) => console.log(response));
  }, []);

  return (
    <>
      <section>
        <header>
          <h1>Latest i-Model Cars</h1>
        </header>
        {cars.map((car) => (
          <div key={car.id} className="cars">
            <img src={car.images.dark} alt={car.name} />
            <span>{car.name}</span>
          </div>
        ))}
      </section>
    </>
  );
};

export default Main;
