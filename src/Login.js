import React from "react";
import "./Login.css";

import { useState, useEffect } from "react";

function Login() {

  const [error, setError] = useState(false);

  return (
    <div className="flex">
      <div className="m-9 p-10">
        <img alt="" src="/ezgif.gif"></img>
        <div className="flex flex-col ml-20">
          <div className="text-3xl font-oswald mb-5">
            Discover the Advantages:
          </div>
          <div className="inline-flex font-robot">
            <img src="/image13.png" /> Hassle Free Placement
          </div>
          <div className="inline-flex font-robot">
            <img src="/image13.png" /> Easy Profile Management
          </div>
          <div className="inline-flex font-robot">
            <img src="/image13.png" /> Resume Builder Template
          </div>
          <div className="inline-flex font-robot">
            <img src="/image13.png" /> Stay Updated with all the Latest Info
          </div>
        </div>
      </div>

        <div className="flex border-l-4 p-20 pt-10 flex-col flex-auto bg-[#F6F8FE] ">
          <div className="flex flex-col">
            <div className="flex mt-10 justify-start items-center">
              <img
                className="w-60 h-60 "
                src="/careersynclogo.svg"
                alt="CareerSync Logo"
              />

              <p className="text-6xl font-bebas flex justify-center relative right-5 py-3">
                CAREERSYNC
              </p>
            </div>
            <div className="text-6xl font-playFair mb-2">
              Unlock Your Future
            </div>
            <div className="text-1xl text-[#959595]">
              Enter your University Credentials{" "}
            </div>
          </div>
          <form action="http://localhost:8000/login" method="Post">
            <input type="email" name="email" className="bg-white border-[#00000091] my-3 p-5 w-full" placeholder="Enter the Email" />
            <input  pattern=".{8,}" title="Password must be at least 8 characters long"  type="password" name="password" className="bg-white border-[#00000091] my-3 p-5 w-full" placeholder="Enter the Password" />
            <div className="text-end mt-5">
              <button className="text-[rgb(149,149,149)]">Forgot Password ?</button>
            </div>
            <button className="text-3xl font-oswald text-center w-full mt-5 py-4 px-10 bg-black text-white" type="submit" >
              I'm Ready
            </button>
          </form>
          <button className="text-3xl text-center my-5 py-4 px-10 font-oswald bg-black text-white">
            <a href="http://localhost:8000/auth/google">Sign with Google</a>
          </button>
        </div>
       </div>
  );
}

export default Login;
