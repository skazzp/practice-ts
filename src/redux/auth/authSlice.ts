import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { login, logout, register, getCurrentUser } from './authOperations';

interface User {
  name: string | null;
  email: string | null;
}

interface AuthError {
  message: string;
}
interface AuthState {
  user: User;
  token: string | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: AuthError | null;
}

const initialState: AuthState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

// const pendingHandlerAuth = (state, action) => {
//   state.isLoading = true;
//   state.error = null;
// };

// const rejectedHandler = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(register.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
      state.isLoggedIn = false;
    });
    builder.addCase(register.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isLoggedIn = false;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.error = null;
      state.isLoading = false;
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    });
  },
});
export const authReducer = authSlice.reducer;
