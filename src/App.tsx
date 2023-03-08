import React, { useState } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import { IContact } from './types/Contacts';
import Filter from './components/Filter/Filter';

const App: React.FC = () => {
  const [contacts, setContacts] = useState<IContact[]>([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState<string>('');
  const filterContacts = () => {
    const filterNormalized = filter.toLowerCase();
    return !filter
      ? contacts
      : contacts.filter(elem => elem.name.toLowerCase().includes(filterNormalized));
  };

  const saveContacts = (contact: IContact) => {
    setContacts(prevContacts => {
      return [...prevContacts, contact];
    });
  };

  const removeContact = (id: string) => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== id);
    });
  };

  const getFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFilter(() => {
      return value;
    });
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
