import React from 'react'
import ContactsForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';



const Contacts: React.FC = () => {
  return (
    <>
      <div>
        <h2>Add contact</h2>
        <ContactsForm />
      </div>
      <div>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </>
  );
};

export default Contacts