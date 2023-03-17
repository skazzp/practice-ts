import React from 'react';
import { Routes, Route, Navigate } from 'react-router';
import { PrivateRoute } from './components/PrivateRoute';
import { PublicRoute } from './components/PublicRoute';
import Contacts from './pages/Contacts';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import Navigation from './components/Navigation/Navigation';
import { getIsLoading } from './redux/auth/authSelectors';
import { useAppSelector } from './redux/store';

const App: React.FC = () => {
  const isLoading = useAppSelector(getIsLoading);

  return (
    <>
      <Navigation />
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <Routes>
          <Route path="/login" element={<PublicRoute component={<Login />} />} />
          <Route path="/register" element={<PublicRoute component={<Registration />} />} />
          <Route path="/contacts" element={<PrivateRoute component={<Contacts />} />} />
          <Route path="*" element={<PublicRoute component={<Navigate to="/login" />} />} />
        </Routes>
      )}
    </>
  );
};

export default App;
