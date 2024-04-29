import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App.js";
import { AvatarMenue, Body } from './pages/Student Portal/student_profile/account.js';
import HR from "./pages/HR_new.js";
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      {/* <AvatarMenue />
      <Body /> */}
      <HR/>
     {/* <App/> */}
    </React.StrictMode>
  </BrowserRouter>
);