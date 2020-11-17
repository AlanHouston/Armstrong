import React from 'react';
// add Component if needed
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import LoginBtn from './components/LoginBtn';
import LogoutBtn from './components/LogoutBtn';
import Profile from './components/Profile';
// import Today from './components/Today';
// import Today from './components/Today';
// import { useAuth0 } from '@auth0/auth0-react';

function App() {
  return (
    <div className='appOuter'>
        <LoginBtn />
        <LogoutBtn />
        <Profile />
    </div>
  );
}

export default App;
