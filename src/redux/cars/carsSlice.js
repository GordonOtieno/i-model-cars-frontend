import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCarsThunk = createAsyncThunk('cars/fetchAll', async () => {
  const response = await axios.get('http://127.0.0.1:3000/api/v1/cars');
  return response.data;
});

const carsSlice = createSlice({
  name: 'cars',
  initialState: { cars: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCarsThunk.fulfilled, (state, action) => {
      state.cars = action.payload;
    });
  },
});

export const selectCars = (state) => state.cars.cars;

export default carsSlice.reducer;
