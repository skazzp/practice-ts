import React from 'react';
import { Routes, Route, Navigate } from 'react-router';

import { IContact } from './types/Contacts';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { PrivateRoute } from './components/PrivateRoute';
import { PublicRoute } from './components/PublicRoute';
import Contacts from './pages/Contacts';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import Navigation from './components/Navigation/Navigation';

const App: React.FC = () => {
  return (
    <>
      <Navigation />
      {/*  {isLoading ? (
        <div>Loading</div>
      ) : ( */}
      <Routes>
        <Route path="/login" element={<PublicRoute component={<Login />} />} />
        <Route path="/register" element={<PublicRoute component={<Registration />} />} />
        <Route path="/contacts" element={<PrivateRoute component={<Contacts />} />} />
        <Route path="*" element={<PublicRoute component={<Navigate to="/login" />} />} />
      </Routes>
      {/* )} */}
    </>
  );
};

export default App;
