import { useState } from 'react';
import { createReservationAPI } from '../../helpers/api';

export default function NewReservationForm(props) {
  // Get the car
  // eslint-disable-next-line react/prop-types, no-unused-vars
  const { carId } = props;

  // Set initial fields values
  const [reservation, setReservation] = useState({
    car_id: 0,
    date: '',
    city: '',
  });

  // Set message
  const [msg, setMsg] = useState({
    type: '',
    text: '',
  });

  // Send the reservation details to the API
  const handleSubmit = (e) => {
    e.preventDefault();
    createReservationAPI(1, reservation)
      .then((response) => {
        if (response.status === 200) {
          setMsg({ type: 'msg-sucss', text: 'The car has been booked' });
        } else {
          setMsg({ type: 'msg-fail', text: 'Something went wrong!' });
        }
      });
  };

  // Update the state after each change in the fields values
  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setReservation({ ...reservation, [name]: value });
  };
  return (
    <div id="rsrv-page">
      <h1>BOOK ONE OF OUR CARS FOR A TEST DRIVE</h1>
      <form>
        <input type="number" name="car_id" placeholder="Car Id" value={reservation.car_id} onChange={handleFieldChange} />
        <input type="date" name="date" placeholder="date" value={reservation.date} onChange={handleFieldChange} />
        <input type="text" name="city" placeholder="city" value={reservation.city} onChange={handleFieldChange} />
        <input className="buttn" type="submit" value="Book Now" onClick={handleSubmit} />
      </form>
      <span className={msg.type}>{ msg.text }</span>
    </div>
  );
}