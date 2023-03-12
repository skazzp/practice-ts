import React, { useState } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import { IContact } from './types/Contacts';
import Filter from './components/Filter/Filter';
import { useSelector } from 'react-redux';
import { contactsSelector } from './redux/contacts/contactsSelectors';
import { useDispatch } from 'react-redux';
import { addFilter } from './redux/filter/filterSlice';
import { addContactReducer, removeContactReducer } from './redux/contacts/contactsSlice';

import { filterSelector } from './redux/filter/filterSelector';

const App: React.FC = () => {
  const contacts = useSelector(contactsSelector);
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();

  const filterContacts = () => {
    const filterNormalized = filter.toLowerCase();
    return !filter
      ? contacts
      : contacts.filter(elem => elem.name.toLowerCase().includes(filterNormalized));
  };

  const saveContacts = (contact: IContact) => {
    dispatch(addContactReducer(contact));
  };

  const removeContact = (id: string) => {
    dispatch(removeContactReducer(id));
  };

  const getFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(addFilter(value));
  };

  return (
    <div style={{ marginLeft: '20px' }}>
      <h1>Phonebook</h1>
      <ContactForm saveContacts={saveContacts} contacts={contacts} />
      <h2>Contacts</h2>
      <Filter setFilter={getFilter} filterState={filter} />
      <ContactList filterContacts={filterContacts} removeContact={removeContact} />
    </div>
  );
};

export default App;
