import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './details.css';

function Details() {
  const { id } = useParams();
  const [carDetails, setCarDetails] = useState([]);

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:3000/api/v1/cars/4');
        setCarDetails(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCarDetails();
  }, [id]);

  return (
    <section>
      {carDetails.map((item) => (
        <div key={item.id} className="card">
          <div className="cars-image">
            <img src={item.images} alt={item.name} />
            <p className="cars-description">{item.description}</p>
          </div>
          <div className="car-props">
            <div className="cars-name">{item.name}</div>
            <div className="cars-make">{item.make}</div>
            <div className="cars-type">{item.type}</div>
            <div className="cars-cost">
              $
              {item.cost}
            </div>
            <div className="cars-speed">{item.speed}</div>
            <div className="cars-color">
              Color:
              {item.color}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

// Details.propTypes = {
//   id: PropTypes.number.isRequired,
//   name: PropTypes.string.isRequired,
//   images: PropTypes.string.isRequired,
//   type: PropTypes.string.isRequired,
//   make: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   cost: PropTypes.number.isRequired,
//   speed: PropTypes.number.isRequired,
//   color: PropTypes.string.isRequired,
// };

export default Details;
