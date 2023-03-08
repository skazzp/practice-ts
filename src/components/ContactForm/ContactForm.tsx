import { useState } from 'react';
import { IContact } from '../../types/Contacts';
import { nanoid } from 'nanoid';
import { Btn, Form } from './ContactForm.styled';

interface IProps {
  saveContacts: (contact: IContact) => void;
  contacts: IContact[];
}

const ContactForm = ({ saveContacts, contacts }: IProps) => {
  const [name, setName] = useState<string>('');
  const [number, setNumber] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'name') setName(() => e.target.value);
    if (e.target.name === 'number') setNumber(() => e.target.value);
  };
  const resetForm = () => {
    setName(() => {
      return '';
    });
    setNumber(() => {
      return '';
    });
  };
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const contact = {
      name,
      number,
      id: nanoid(),
    };
    if (contacts.filter(elem => elem.name === name).length) {
      return alert(`${name} is already in contacts!`);
    }
    saveContacts(contact);
    resetForm();
  };
  return (
    <Form action="submit" onSubmit={handleFormSubmit}>
      <label htmlFor="name">
        <p>Name</p>
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="number">
        <p>Number</p>
        <input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={handleChange}
          required
        />
      </label>
      <Btn type="submit">Add contact</Btn>
    </Form>
  );
};

export default ContactForm;
