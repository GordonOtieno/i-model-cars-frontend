/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseURL } from '../../helpers/api';

export const getCarsThunk = createAsyncThunk('cars/getCars', async () => {
  const response = await fetch(`${baseURL}/cars`);
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
