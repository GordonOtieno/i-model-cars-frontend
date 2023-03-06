import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReservationsThunk } from '../../redux/reservationsSlice';
import locationIcon from '../../img/location_icon.png';
import calendarIcon from '../../img/calendar_icon.png';
import { getCarsThunk } from '../../redux/cars/carsSlice';

export default function Reservations() {
  const { reservations } = useSelector((state) => state.reservations);
  const { cars = [] } = useSelector((state) => state.cars);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch((getReservationsThunk()));
    dispatch((getCarsThunk()));
  }, [dispatch]);
  function getCar(carId) {
    return cars.filter((car) => car.id === carId).pop();
  }
  return (
    <main id="resevations-page">
      <h1>Your Reservations</h1>
      <section id="resevations-list">
        {reservations.map((reservation) => (
          <div key={reservation.id} className="mycard">
            <h2>
              {getCar(reservation.car_id).name}
              {' '}
              {getCar(reservation.car_id).make}
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
        ))}
      </section>
    </main>
  );
}
