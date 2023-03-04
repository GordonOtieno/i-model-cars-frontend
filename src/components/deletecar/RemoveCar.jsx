import { useState, useEffect } from 'react';
import Modal from '../addcar/resusable/modal/Modal';

import styles from './RemoveCar.module.css';

function RemoveCar() {
  const [showModal, setShowModal] = useState({
    alert: false,
    message: '',
    type: '',
  });

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/cars')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  const deleteRequestHandler = (carId) => {
    fetch(`http://localhost:3000/api/v1/cars/${carId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        mode: 'no-cors'
      },
      body: JSON.stringify({
        id: carId,
      }),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Resource deleted successfully');
        } else {
          console.error('Error deleting resource');
        }
      })
      .catch((error) => {
        console.error('Error deleting resource:', error);
      });
  };

  return (
    <>
      <div className={`${styles.deletecarContainer} flex flex-column center`}>
        <h2 className="detete-header hero">Delet Items</h2>
        <div className="grid gap">
          {data.map((car) => (
            <div key={car.id}>
              {car.images && <img src={car.images[Object.keys(car.images)[0]]} alt="car-image" />}
              <div className={`${styles.actions} flex`}>
                <h2>
                  {car.name}
                  {car.make}
                </h2>
                <button
                  type="button"
                  onClick={() => deleteRequestHandler(car.id)}
                >
                  Detele
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showModal.alert && (
        <Modal
          message={showModal.message}
          type={showModal.type}
          onClose={() => setShowModal({ alert: false })}
        />
      )}
    </>
  );
}

export default RemoveCar;
