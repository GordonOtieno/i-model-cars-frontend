import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './details.css';

function Details() {
  const { id } = useParams();
  const [carDetails, setCarDetails] = useState({});

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:3000/api/v1/cars/${id}`);
        setCarDetails(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCarDetails();
  }, [id]);

  return (
    <section>
      <div key={carDetails.id} className="card">
        <div className="cars-image">
          <img src={carDetails.images.dark} alt={carDetails.name} />
          <p className="cars-description">{carDetails.description}</p>
        </div>
        <div className="car-props">
          <div className="cars-name">
            <h3>{carDetails.name}</h3>
            <span>
              <i>
                $-
                {carDetails.cost}
                {' '}
                upon reservations!
              </i>
            </span>
          </div>
          <div className="cars-make">{carDetails.make}</div>
          <div className="cars-type">{carDetails.type}</div>
          <div className="cars-cost">
            $
            {carDetails.cost}
          </div>
          <div className="cars-speed">{carDetails.speed}</div>
          <div className="cars-color">
            Color:
            {carDetails.color}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Details;
