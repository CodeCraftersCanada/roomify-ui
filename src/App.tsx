import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import { routes } from './routes';
import { Login } from './pages';
import Layout from './layout/Layout/Layout';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(localStorage.getItem("userToken") !== null);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={!loggedIn ? <Login /> : <Navigate to="/" />} />

        <Route path="/" element={loggedIn ? <Layout /> : <Navigate to="/login" />}>
          {routes.map(route => (
            <Route
              path={route.path}
              element={<route.component />}
              key={route.name}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
