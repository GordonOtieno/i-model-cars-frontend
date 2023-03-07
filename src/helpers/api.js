export const baseURL = 'https://i-model-cars.onrender.com/api/v1';

export function createReservationAPI(userID, reservation) {
  return fetch(`${baseURL}/users/${userID}/reservations`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(reservation),
  });
}

export function getReservationsAPI(userID) {
  return fetch(`${baseURL}/users/${userID}/reservations`);
}
