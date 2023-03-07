import { useState, useEffect } from 'react';
import { useNavigate, useHistory } from 'react-router-dom';
import { baseURL } from '../../helpers/api';
import Modal from '../addcar/resusable/modal/Modal';
import isUserSigned from '../../helpers/auth';

import styles from './RemoveCar.module.css';

function RemoveCar() {
  const [showModal, setShowModal] = useState({
    alert: false,
    message: '',
    type: '',
  });

  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const history = useHistory();

  useEffect(() => {
    fetch(`${baseURL}/cars`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => error);

    if (!isUserSigned()) {
      navigate('/signin');
    }
  }, [navigate]);

  const deleteRequestHandler = (carId, carName) => {
    fetch(`${baseURL}/cars/${carId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        mode: 'no-cors',
      },
      body: JSON.stringify({
        id: carId,
      }),
    })
      .then((response) => {
        if (response.ok) {
          setShowModal({
            alert: true,
            message: `Yaaaay! You successfully deleted ${carName}`,
            type: 'success',
          });
          history.push(location.pathname);
        }
      })
      .catch(() => {
        setShowModal({
          alert: true,
          message: `Oops! Something went wrong with deleting ${carName}`,
          type: 'error',
        });
      });
  };

  return (
    <>
      <div className={`${styles.deletecarContainer} flex flex-column center`}>
        <h2 className="detete-header hero">Delete Car</h2>
        <div className="grid gap">
          {data.map((car) => (
            <div key={car.id}>
              {car.images && <img src={car.images[Object.keys(car.images)[0]]} alt="car" />}
              <div className={`${styles.actions} flex`}>
                <h2>
                  {car.name}
                  {car.make}
                </h2>
                <button
                  type="button"
                  onClick={() => deleteRequestHandler(car.id, car.name)}
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
