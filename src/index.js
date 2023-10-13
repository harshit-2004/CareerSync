import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import StudentPortal from './StudentPortal.js';
import App from './App.js'
import Login from './Login.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Login/> */}
    <App />
    {/* <StudentPortal /> */}
  </React.StrictMode>
);