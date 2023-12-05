import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import { routes } from './routes';
import { Login } from './pages';
import Layout from './layout/Layout/Layout';

function AuthenticatedRoutes() {
  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);

  return (
    <Routes>
      <Route path="/login" element={!isLoggedIn ? <Login /> : <Navigate to="/" />} />
      <Route path="/" element={isLoggedIn ? <Layout /> : <Navigate to="/login" />}>
        {routes.map((route) => (
          <Route path={route.path} element={<route.component />} key={route.name} />
        ))}
      </Route>
    </Routes>
  );
}

export default AuthenticatedRoutes;
