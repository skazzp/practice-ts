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
  data: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContactReducer(state, action: PayloadAction<IContact>) {
      state.data = [...state.data, action.payload];
    },
    removeContactReducer(state, action: PayloadAction<string>) {
      state.data = state.data.filter(contact => contact.id !== action.payload);
    },
  },
  extraReducers: builder => {
    // builder.addCase(getUserNotices.fulfilled, (state, action) => {
    //   state.error = null;
    //   state.isLoading = false;
    //   state.notices = action.payload;
    // });
  },
});
export const { addContactReducer, removeContactReducer } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
