import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const AuthRoute = ({ element, ...rest }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  return isLoggedIn ? <Route {...rest} element={element} /> : <Navigate to="/login" />;
};

export default AuthRoute;
