export const baseURL = 'https://i-model-cars.onrender.com/api/v1';

export const createReservationAPI = (userID, reservation) => fetch(`${baseURL}/users/${userID}/reservations`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(reservation),
});

export const getReservationsAPI = (userID) => fetch(`${baseURL}/users/${userID}/reservations`);
