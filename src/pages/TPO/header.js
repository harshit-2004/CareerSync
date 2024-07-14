import React from "react";
import "../../App.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { cookieSplitter } from '../student_portal/utils';
import { Link } from "react-router-dom";

function Header({ setChild, tpologin, settpologin }) {
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

  console.log("status of tpo login is ", tpologin);

  return (
    <div className="body">
      <nav className="first-big-box">
        <Link to="/home">
        <div className="logoclass1 cursor-pointer">
          <img
            id="logoelement1"
            src="/careersynclogo.svg"
            alt="CareerSync Logo"
          />
          <div className="codemera font-bebas">CAREER SYNC</div>
        </div>
      </Link>
        <div className="loginclass">
          <ul className="flex space-x-4 text-black">
            <li>
              <button
                className="loginbutton font-inter font-bold px-4 py-2 rounded-full bg-blue-500 hover:bg-blue-600"
                onClick={() => setChild("hr")}
              >
                HR
              </button>
            </li>
            <li>
              <button
                className="loginbutton font-inter font-bold px-4 py-2 rounded-full bg-blue-500 hover:bg-blue-600"
                onClick={() => window.open('http://localhost:8501', '_blank')}
              >
                Analysis
              </button>
            </li>
            <li>
              <button
                className="loginbutton font-inter font-bold px-4 py-2 rounded-full bg-blue-500 hover:bg-blue-600"
                onClick={() => setChild("alumniTpo")}
              >
                Alumni's
              </button>
            </li>
            <li>
              {tpologin && (
                <button
                  className="loginbutton font-inter font-bold px-4 py-2 rounded-full bg-blue-500 hover:bg-blue-600"
                  onClick={handleLogout}
                >
                  Log Out
                </button>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;