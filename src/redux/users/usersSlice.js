import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const SIGNUP_URL = 'http://localhost:3000/signup';
const LOGIN_URL = 'http://localhost:3000/login';
const LOGOUT_URL = 'http://localhost:3000/logout';
const USER_SIGNED_UP = 'user_signup';
const USER_LOGGED_IN = 'user_login';
const USER_LOGGED_OUT = 'user_logged_out';


const user = async (url, userData) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error('Failed to authenticate');
    }

    const token = response.headers.get('authorized');
    localStorage.setItem('token', JSON.stringify(token));

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};


// Sign up user
export const userSignUp = createAsyncThunk(USER_SIGNED_UP, async (userData) => {
  const data = await user (SIGNUP_URL, userData);
  return data;
});

// Sign in user
export const userLogin = createAsyncThunk(USER_LOGGED_IN, async (userData) => {
  const data = await user (LOGIN_URL, userData);
  return data;
})

// Log out user
export const userLogout = createAsyncThunk(USER_LOGGED_OUT, async () => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('No token found in localStorage');
  }
  
  const response = fetch(LOGOUT_URL, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token,
    },
  });
  
  const data = (await response).json();
  localStorage.removeItem('token');
  return data;
});

const userSlice = createSlice({
  name: 'users',
  initialState: {message: '', data: {}, isLogged: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userSignUp.fulfilled, (state, action) => {
        state.message = action.payload.status.message;
        state.data = action.payload.data;
        state.isLogged = true;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.message = action.payload.status.message;
        state.data = action.payload.data;
        state.isLogged = true;
      })
      .addCase(userLogout.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.data = {};
        state.isLogged = false;
      });
  },
});

export default userSlice.reducer;