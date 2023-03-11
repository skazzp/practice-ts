import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { addContact, getContacts, removeContact } from './operations';
import { IContact } from '../../types/Contacts';

export interface ContactsError {
  message: string;
}

export interface ContactsState {
  data: IContact[];
  isLoading: boolean;
  error: ContactsError | null;
}

export const initialState: ContactsState = {
  data: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // builder.addCase(getUserNotices.fulfilled, (state, action) => {
    //   state.error = null;
    //   state.isLoading = false;
    //   state.notices = action.payload;
    // });
  },
});
// export const { addContact, removeContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
