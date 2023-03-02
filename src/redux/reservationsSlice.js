/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getReservationsAPI } from '../helpers/api';

export const getReservationsThunk = createAsyncThunk('reservations/fetchAll',
  async () => {
    const response = await getReservationsAPI(1)
      .then((res) => res.json())
      .then((res) => res);
    return response;
  });
const reservationsSlice = createSlice({
  name: 'Reservations',
  initialState: { reservations: [] },
  extraReducers: (builder) => {
    builder.addCase(getReservationsThunk.fulfilled, (state, action) => {
      state.reservations = action.payload;
    });
  },
});

export default reservationsSlice.reducer;
