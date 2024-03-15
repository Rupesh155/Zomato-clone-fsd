import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ path, element: Element }) => {
  const isLoggedIn = localStorage.getItem('token');

  return isLoggedIn ? (
    <Element />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
