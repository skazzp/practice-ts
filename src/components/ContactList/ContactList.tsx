import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { contactsSelector } from '../../redux/contacts/contactsSelectors';
import { removeContactReducer } from '../../redux/contacts/contactsSlice';
import { filterSelector } from '../../redux/filter/filterSelector';
import { IContact } from '../../types/Contacts';

// interface IProps {
//   filterContacts: () => IContact[];
//   removeContact: (id: string) => void;
// }
// { filterContacts, removeContact }: IProps

const ContactList = () => {
  const contacts = useSelector(contactsSelector);
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();

  const filterContacts = () => {
    const filterNormalized = filter.toLowerCase();
    return !filter
      ? contacts
      : contacts.filter(elem => elem.name.toLowerCase().includes(filterNormalized));
  };

  let filteredContacts = filterContacts();

  return (
    <ul>
      {filteredContacts.map(contact => {
        return (
          <li key={contact.id}>
            <span>{contact.name} : </span>
            <span>{contact.number}</span>
            <button type="button" onClick={() => dispatch(removeContactReducer(contact.id))}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
export default ContactList;
