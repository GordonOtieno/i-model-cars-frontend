export default function createReservationAPI(userID, reservation) {
  return fetch(`http://127.0.0.1:3000/api/v1/users/${userID}/reservations`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(reservation),
  });
}
