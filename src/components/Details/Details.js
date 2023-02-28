import React from 'react';
import PropTypes from 'prop-types';
import './Details.css';

const Details = (props) => {
  const {
    id,
    name,
    image,
    make,
    type,
    description,
    cost,
    speed,
    color,
  } = props;

  return (
    <>
      <div key={id} className="card">
        <div className="cars-image">
          <img src={image} alt={name} />
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
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  make: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default Details;
