import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App.js";
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<GoogleOAuthProvider clientId="1006724253761-2g64m2c45a2b9opqj1ecsg42vr7jt5cl.apps.googleusercontent.com">
  <BrowserRouter>
      <App/> 
  </BrowserRouter>
</GoogleOAuthProvider>
);