import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReservationsThunk } from '../../redux/reservationsSlice';

export default function Reservations() {
  const reservations = useSelector((state) => state.reservations);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch((getReservationsThunk()));
  }, []);
  return (
    <div>
      <h1>All Reservations</h1>
    </div>
  );
}
