import React from 'react';
import { Router } from '@reach/router';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.less';

function App() {
  return (
    <Router>
      <Home path="/" />
      <Login path="/login" />
      <Register path="/register" />
    </Router>
  );
}

export default App;
