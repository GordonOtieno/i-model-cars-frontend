export default function createReservationAPI(reservation) {
  fetch('http://127.0.0.1:3000/api/v1/users/1/reservations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(reservation),
  });
}
