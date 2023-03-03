import { useState } from 'react';

import styles from './RemoveCar.module.css';

function RemoveCar({ data, onRequest }) {
  const [showModal, setShowModal] = useState({
    alert: false,
    message: '',
    type: '',
  });

  const deleteRequestHandler = (carId) => {
    fetch('/api/v1/cars/9',
      { method: 'GET' })
      .then((response) => {
        // handle response
        console.log(response.data);
      })
      .then((data) => {
        // handle data
        console.log(data);
      })
      .catch((error) => {
        // handle error
      });
  };

  return (
    <>
      <div className={`${styles.deleteCarContainer} flex flex-column center`}>
        <div className="grid gap">
          <button onClick={() => deleteRequestHandler(9)}>delete</button>
          {/* {data.map((car) => (
            <div key={car.id}>
              <img src={car.images[Object.keys(car.images)[0]]} />
              <div className={`${styles.actions} flex`}>
                <h2>
                  {car.name}
                  {car.type}
                </h2>
                <button
                  onClick={() => deleteRequestHandler(car.id, car.name)}
                >
                  Detele
                </button>
              </div>
            </div>
          ))} */}
        </div>
      </div>
      {/* {showModal.alert && (
            <Modal
              message={showModal.message}
              type={showModal.type}
              onClose={() => setShowModal({ alert: false })}
            />
          )} */}
    </>
  );
}

export default RemoveCar;
