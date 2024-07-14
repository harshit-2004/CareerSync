import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { cookieSplitter } from '../student_portal/utils';

const LogOutTpo = ({ settpologin }) => {
  const navigate = useNavigate();
  
  async function handleLogout() {
    const tokens = cookieSplitter(document.cookie);
    console.log("All cookies: ", document.cookie);
    console.log("Extracted JWT token: ", tokens.jwtTpo);

    try {
      const res = await axios.post(`http://localhost:8000/tpo/tpoLogOut/${tokens.jwtTpo}`, {}, { withCredentials: true });
      console.log('Response from server: ', res);
      settpologin(false);
      if (res.status === 200) {
        navigate("/tpoLogin");
      }
      console.log('Logout successful');
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return (
    <div onClick={handleLogout}>
      LogOut
    </div>
  );
};

export default LogOutTpo;
