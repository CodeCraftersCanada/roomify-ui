import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import store from './stores/store';
import AuthenticatedRoutes from './AuthenticatedRoutes'; // Import the new component

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AuthenticatedRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;

