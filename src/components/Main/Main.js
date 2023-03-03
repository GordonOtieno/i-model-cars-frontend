import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import './Main.css';

const Main = () => {
  const [cars, setCars] = useState([]);
  // Fetch data from the localhost api
  useEffect(() => {
    axios.get('http://127.0.0.1:3000/api/v1/cars')
      .then((response) => {
        setCars(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <section>
      <header>
        <h1 className="app-title">Latest i-Model Cars</h1>
        <p className="app-msg">Please select an i-model</p>
      </header>

      <Carousel className="cars-container" interval={null}>
        {cars.reduce((acc, car, index) => {
          if (index % 3 === 0) {
            acc.push([]);
          }
          acc[acc.length - 1].push(car);
          return acc;
        }, []).map((carGroup) => (
          <Carousel.Item key={uuidv4()} className="cars">
            <div className="d-flex justify-content-between">
              {carGroup.map((car) => (
                <div key={car.id} className="w-33">
                  <Link to={`/details/${car.id}`}>
                    {/* <img src={car.images.dark} alt={car.name}
                    style={{ height: '200px', width: '300px' }} /> */}
                  </Link>
                  <div className="car-info">
                    <h4>{car.name}</h4>
                    <span>{car.description.split('', 50)}</span>
                  </div>
                  <div className="social-icons">
                    <div className="icon">
                      <FaTwitter />
                    </div>

                    <div className="icon">
                      <FaFacebook />
                    </div>

                    <div className="icon">
                      <FaInstagram />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>

  );
};

export default Main;
