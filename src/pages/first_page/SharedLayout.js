import React from "react";
import "../../App.css";


import { useNavigate, Link, Outlet } from "react-router-dom";

function SharedLayout({ setLogin, login , setChild }) {
  const navigate = useNavigate();

  return (
    <div className="body">
      <nav className="first-big-box">
        <div className="logoclass1">
          <img
            id="logoelement1"
            src="/careersynclogo.svg"
            alt="CareerSync Logo"
          />
          <div className="codemera font-bebas">CAREER SYNC</div>
        </div>
        <div className="loginclass">
          <ul className="flex space-x-4 text-black">
            <li>
              <button
                      className="loginbutton font-inter font-bold px-4 py-2 rounded-full bg-blue-500 hover:bg-blue-600"
                      onClick={() => setChild("home")}
                    >
                    Home
              </button>
            </li>
            <li>
              <button
                className="loginbutton font-inter font-bold px-4 py-2 rounded-full bg-blue-500 hover:bg-blue-600"
                onClick={() => setChild("about")}
              >
                About
              </button>
            </li>
            <li>
              <button
                className="loginbutton font-inter font-bold px-4 py-2 rounded-full bg-blue-500 hover:bg-blue-600"
                onClick={() => setChild("alumni")}
              >
                Alumni
              </button>
            </li>
            <li>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-inter mr-2 px-4 py-2 h-12 rounded-full text-xl font-bold"
                id="logbutton"
                onClick={() => navigate("/main-login")}
              >
                Login
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default SharedLayout;
