import { RootState } from '../store';

export const contactsSelector = (state: RootState) => state.contacts.data;
