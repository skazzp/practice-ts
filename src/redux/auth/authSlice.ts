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
    });
    builder.addCase(register.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.error = null;
      state.isLoading = false;
      state.user = action.payload;
      state.token = action.payload.token;
    });
    // [login.pending]: (state, action) => {
    //   state.isLoading = true;
    // },
    // [login.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.user = action.payload.user;
    //   state.token = action.payload.token;
    //   state.isLoggedIn = true;
    // },
    // [login.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
    // [logout.pending]: (state, action) => {
    //   state.isLoading = true;
    // },
    // [logout.fulfilled]: (state, action) => {
    //   state.user = { name: null, email: null };
    //   state.token = null;
    //   state.isLoggedIn = false;
    //   state.isLoading = false;
    // },
    // [logout.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
    // [getCurrentUser.pending]: (state, action) => {
    //   state.isLoading = true;
    // },
    // [getCurrentUser.fulfilled]: (state, { payload }) => {
    //   state.isLoading = false;
    //   state.user = payload;
    //   state.isLoggedIn = true;
    //   console.log(payload);
    // },
    // [getCurrentUser.rejected]: (state, action) => {
    //   state.isLoading = false;
    // },
  },
});
export default authSlice.reducer;
