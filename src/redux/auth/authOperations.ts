import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

interface UserToAuth {
  name?: string;
  email: string;
  password: string;
}
interface User {
  name: string;
  email: string;
}

interface AuthResponse {
  user: User;
  token: string;
}

export const register = createAsyncThunk<AuthResponse, UserToAuth, { state: RootState }>(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.post(`/users/signup`, user);
      token.set(data.token);
      console.log('reg response', data);
      return data;
    } catch (error) {
      if (error instanceof Error) return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk<AuthResponse, UserToAuth, { state: RootState }>(
  'auth/login',
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.post(`/users/login`, user);
      token.set(data.token);
      console.log('login response', data);
      return data;
    } catch (error) {
      if (error instanceof Error) return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk<void, void, { state: RootState }>(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await axios.post(`/users/logout`);
      token.unset();
    } catch (error) {
      if (error instanceof Error) return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk<AuthResponse, User, { state: RootState }>(
  'auth/refresh',
  async (_, thunkAPI) => {
    //   const { auth } = thunkAPI.getState();
    const authState = thunkAPI.getState().auth;
    if (!authState.token) {
      // console.log('no token', authState);
      return thunkAPI.rejectWithValue('no token');
    }
    console.log(authState.token);
    token.set(authState.token);
    try {
      const { data } = await axios.get(`/users/current`);
      console.log('get resp', data);
      return data;
    } catch (error) {
      if (error instanceof Error) return thunkAPI.rejectWithValue(error.message);
    }
  }
);
