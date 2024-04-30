import React from 'react';
import axios from 'axios';
import OptionCard from '../../../components/OptionsCard';
import img6 from "../../../assets/Option6.svg";
import { useNavigate } from 'react-router-dom';
import { cookieSplitter } from '../utils';

const YourComponent = ({ collapsed, setLogin }) => {
    const navigate = useNavigate();
    
    const handleLogout = async () => {
      const tokens = cookieSplitter(document.cookie);
      try {
        const res = await axios.post(`http://localhost:8000/student_portal/logout/${tokens.jwt}`, {}, { withCredentials: true });
        setLogin(false);
        if(res.status === 200){
          navigate("/login");
        }
        console.log('Logout successful');
      } catch (error) {
        console.error('Logout failed', error);
      }
    };

  return (
    <div onClick={handleLogout}>
      <OptionCard
        optionImage={img6}
        optionLabel={"Logout"}
        collapsed={collapsed}
      />
    </div>
  );
};

export default YourComponent;
