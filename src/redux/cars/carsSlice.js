/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCarsAPI } from '../helpers/cars-api';

export const getCarsThunk = createAsyncThunk('cars/fetchAll',
  async () => {
    const response = await getCarsAPI()
      .then((res) => res.json())
      .then((res) => res);
    return response;
  });
const carsSlice = createSlice({
  name: 'cars',
  initialState: { cars: {} },
  extraReducers: (builder) => {
    builder.addCase(getCarsThunk.fulfilled, (state, action) => {
      state.cars = action.payload;
    });
  },
});

export default carsSlice.reducer;
