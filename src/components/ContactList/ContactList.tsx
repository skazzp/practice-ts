import React from 'react';
import { IContact } from '../../types/Contacts';

interface IProps {
  filterContacts: () => IContact[];
  removeContact: (id: string) => void;
}

const ContactList = ({ filterContacts, removeContact }: IProps) => {
  let filteredContacts = filterContacts();
  return (
    <ul>
      {filteredContacts.map(contact => {
        return (
          <li key={contact.id}>
            <span>{contact.name} : </span>
            <span>{contact.number}</span>
            <button type="button" onClick={() => removeContact(contact.id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
export default ContactList;
