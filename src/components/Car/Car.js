import React from 'react';
import PropTypes from 'prop-types';

const Car = (props) => {
  const {
    id,
    name,
    image,
    type,
    description,
    cost,
    speed,
    color,
  } = props;

  return (
    <>
      <div className="card">
        <div className="cars-image">
          <img src={image} alt={name} />
        </div>
        <div className="cars-name">{name}</div>
        <div className="cars-type">{type}</div>
        <div className="cars-description">{description}</div>
        <div className="cars-cost">{cost}</div>
        <div className="cars-speed">{speed}</div>
        <div className="cars-color">{color}</div>
      </div>
      <div>This is the Cars#show view</div>
      <button
        type="submit"
      >
        <a href={`/cars/${id}`}>Reserve</a>
      </button>
    </>
  );
};

Car.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default Car;
