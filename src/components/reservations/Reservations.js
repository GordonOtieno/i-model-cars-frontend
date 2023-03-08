import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getReservationsThunk } from '../../redux/reservationsSlice';
import locationIcon from '../../img/location_icon.png';
import calendarIcon from '../../img/calendar_icon.png';
import { getCarsThunk } from '../../redux/cars/carsSlice';
import isUserSigned from '../../helpers/auth';

export default function Reservations() {
  const { reservations } = useSelector((state) => state.reservations);
  const { cars = null } = useSelector((state) => state.cars);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    let userId;
    if (!isUserSigned()) {
      navigate('/signin');
    } else {
    // Extract user details
      const { id } = JSON.parse(localStorage.getItem('user'));
      userId = id;
    }
    dispatch((getCarsThunk()));
    dispatch((getReservationsThunk(userId)));
  }, [dispatch, navigate]);
  function getCar(carId) {
    return cars.find((car) => car.id === carId);
  }
  return (
    <main id="resevations-page">
      <h1>Your Reservations</h1>
      <section id="resevations-list">
        {cars && reservations && reservations.map((reservation) => {
          const car = getCar(reservation.car_id);
          return (
            <div key={reservation.id} className="mycard">
              <h2>
                {car.name}
                {' '}
                {car.make}
              </h2>
              <div className="mycard-footer">
                <div className="myrow">
                  <img className="myicon" src={locationIcon} alt="City name" />
                  {reservation.city}
                </div>
                <div className="myrow">
                  <img className="myicon" src={calendarIcon} alt="Date" />
                  {reservation.date}
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
