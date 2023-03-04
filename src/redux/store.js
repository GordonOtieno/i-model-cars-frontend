import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import carsReducer from './cars/carsSlice';
import userReducer from './users/usersSlice';

const middleware = [thunk];

const store = configureStore({
  reducer: {
    cars: carsReducer,
    user: userReducer,
  },
  middleware,
});

export default store;
