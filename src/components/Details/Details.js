import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Details.css';

const Details = (props) => {
  const {
    name,
    images,
    make,
    type,
    description,
    cost,
    speed,
    color,
  } = props;
  const { id } = useParams();

  useEffect(() => {
    // get cars from the api
    // update cars state
    axios.get(`http://127.0.0.1:3000/api/v1/cars/${id}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="card">
        <div className="cars-image">
          <img src={images} alt={name} />
          <p className="cars-description">{description}</p>
        </div>
        <div className="car-props">
          <div className="cars-name">{name}</div>
          <div className="cars-make">{make}</div>
          <div className="cars-type">{type}</div>
          <div className="cars-cost">
            {' '}
            $
            {cost}
          </div>
          <div className="cars-speed">{speed}</div>
          <div className="cars-color">
            Color:
            {' '}
            {color}
          </div>
        </div>
      </div>
    </>
  );
};

Details.propTypes = {
  name: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  make: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default Details;
