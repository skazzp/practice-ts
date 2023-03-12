import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: string = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    addFilter(state, action: PayloadAction<string>) {
      return action.payload;
    },
  },
});
const filterReducer = filterSlice.reducer;
export const { addFilter } = filterSlice.actions;
export default filterReducer;
