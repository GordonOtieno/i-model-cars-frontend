import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReservationsThunk } from '../../redux/reservationsSlice';
import locationIcon from '../../img/location_icon.png';
import calendarIcon from '../../img/calendar_icon.png';

export default function Reservations() {
  const reservations = useSelector((state) => state.reservations);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch((getReservationsThunk()));
  }, [dispatch]);
  return (
    <main id="resevations-page">
      <h1>Your Reservations</h1>
      <section id="resevations-list">
        {reservations.map((reservation) => (
          <div key={reservation.id} className="card">
            <h2>
              Car Id:
              {reservation.car_id}
              {' This should be Care Name'}
            </h2>
            <div className="card-footer">
              <div className="row">
                <img className="icon" src={locationIcon} alt="City name" />
                {reservation.city}
              </div>
              <div className="row">
                <img className="icon" src={calendarIcon} alt="Date" />
                {reservation.date}
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}