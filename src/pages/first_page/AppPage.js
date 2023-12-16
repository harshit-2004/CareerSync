import React from "react";
import "../../App.css";
import Linemake from "./Linemake.js";

import { useNavigate } from "react-router-dom";

function AppPage({ setLogin }) {
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
          <button className="loginbutton font-inter font-bold" src="/">
            Home
          </button>
          <div className="widthbox">|</div>
          <button className="loginbutton font-inter font-bold" src="/">
            Services
          </button>
          <div className="widthbox">|</div>
          <button className="loginbutton font-inter font-bold" src="/">
            About
          </button>
          <button
            className="font-inter mr-10 ml-5 rounded-xl text-xl font-bold"
            id="logbutton"
            onClick={() => navigate("/main-login")}
          >
            Login
          </button>
        </div>
      </nav>
      <Linemake thickness="90" />
      <div className="gif-and-text">
        <img src="/staffing.gif"></img>
        <div className="text-1024">
          <div id="text-1">
            <b className="font-oswald">Crafting</b>{" "}
            <u className="font-libre">Careers</u>
          </div>
          <div id="text-1">
            <b className="font-oswald">Connecting</b>{" "}
            <u className="font-libre">Futures</u>
          </div>
        </div>
      </div>
      <Linemake thickness="95" />
      <div className="line2">
        <div id="line2making" />
      </div>
      <div className="line2">
        <div id="line3making" />
      </div>

      <Linemake thickness="40" />
      <div className="bigbox">
        <div className="text2">
          <div id="text2-1" className="font-oswald">
            Keep track of All Your
          </div>
          <div id="text2-2" className="font-playfair">
            Applications
          </div>
          <div id="text2-3" className="font-oswald">
            At One Place
          </div>
        </div>
        <img id="setimage3" src="/202101-Talent-Trends-1_bi4qgd.gif"></img>
      </div>

      <Linemake thickness="40" />
      <div className="line2">
        <div id="line4making" />
      </div>
      <Linemake thickness="95" />

      <div className="line2">
        <div id="line5making" />
      </div>

      <Linemake thickness="60" />

      <div className="bigbox2">
        <img id="setimage4" src="/Candidate-Assesments.gif"></img>
        <div className="text2">
          <div id="text3-1" className="font-oswald">
            Single Source of
          </div>
          <div id="text3-2">
            <b>Truth</b>
          </div>
          <div id="text3-3" className="font-oswald">
            For all companies
          </div>
        </div>
      </div>

      <Linemake thickness="50" />
      <div className="line5">
        <div id="line6making" />
      </div>

      <Linemake thickness="95" />

      <div className="bigtext font-oswald">ONE PLATFORM , ONE GOAL</div>
      <Linemake thickness="95" />
      <div className=" flex-row">
        <div className="textend2 font-quick">By | Team CareerSync</div>
      </div>
    </div>
  );
}
export default AppPage;
