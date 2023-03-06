/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getCarsThunk = createAsyncThunk('cars/getCars', async () => {
  const response = await fetch('http://127.0.0.1:3000/api/v1/cars');
  const data = await response.json();
  return data;
});

const carsSlice = createSlice({
  name: 'cars',
  initialState: { cars: null, status: 'idle' },
  extraReducers: (builder) => {
    builder.addCase(getCarsThunk.fulfilled, (state, action) => {
      state.status = 'succeded';
      state.cars = action.payload;
    });
  },
});

export default carsSlice.reducer;
