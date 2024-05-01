import React from "react";
import "../../App.css";

function header({ setChild }) {

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
                      onClick={() => setChild("hr")}
                    >
                    HR
              </button>
            </li>
            <li>
              <button
                className="loginbutton font-inter font-bold px-4 py-2 rounded-full bg-blue-500 hover:bg-blue-600"
                onClick={() => setChild("analysis")}
              >
                Analysis
              </button>
            </li>
            <li>
              <button
                className="loginbutton font-inter font-bold px-4 py-2 rounded-full bg-blue-500 hover:bg-blue-600"
                onClick={() => setChild("alumniTpo")}
              >
                Alumni
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default header;
