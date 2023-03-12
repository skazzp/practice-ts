import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import { IContact } from './types/Contacts';
import Filter from './components/Filter/Filter';
import { useSelector } from 'react-redux';
import { contactsSelector } from './redux/contacts/contactsSelectors';
import { useDispatch } from 'react-redux';
import { addFilter } from './redux/filter/filterSlice';

import { PrivateRoute } from './components/PrivateRoute';
import { PublicRoute } from './components/PublicRoute';
import Contacts from './pages/Contacts';

const App: React.FC = () => {
  return (
    <>
      {/* <Navigation />
      {isLoading ? (
        <div>Loading</div>
      ) : ( */}
      <Routes>
        {/* <Route path="/login" element={<PublicRoute component={<Login />} />} /> */}
        {/* <Route path="/register" element={<PublicRoute component={<Registration />} />} /> */}
        <Route path="/contacts" element={<PrivateRoute component={<Contacts />} />} />
        <Route path="*" element={<PublicRoute component={<Navigate to="/login" />} />} />
      </Routes>
      {/* )} */}
    </>
  );
};

export default App;
