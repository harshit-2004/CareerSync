import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js'
import Login from './Login.js';
import {Navbar,Table} from './pages/inner_page/Application.js';
import Notification from './pages/inner_page/Notification.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Login/> */}
    <App />
    {/* <Navbar /> */}
    {/* <Table /> */}
    {/* <Notification/> */}
    {/* <StudentPortal /> */}
  </React.StrictMode>
);