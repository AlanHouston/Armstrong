import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  return (
    <Router>
        <Home />
    </Router>
  );
}

export default App;
