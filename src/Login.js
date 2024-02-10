import React from "react";
import axios  from "axios";
import "./Login.css";

import { useState, useEffect } from "react";

const data = [
  {
    placeholder: "Email",
  },
  {
    placeholder: "Password",
  },
];

function Comp(props) {
  return (
    <div className="bg-white border-[#00000091] mt-5">
      <input
        type="text"
        placeholder={props.placeholder}
        className="px-5 py-3 w-full"
        onChange={(e) => props.Handlechange(e.target.value)}
      />{" "}
      <br />
      {props.error ? <p style={{ color: "red" }}>Enter a Valid Email </p> : " "}
    </div>
  );
}

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [error, setError] = useState(false);

  const ClickHandler2 = async () => {
    console.log('ehlo', email, password);
    try {
        const res = await axios.post("http://localhost:8000/login", {email,password}, {
          withCredentials : true,
        });
        console.log("response" , res);

    } catch (err) {
        console.error("Error:", err);
    }
};

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

          <Comp
            placeholder="Email"
            Handlechange={(val) => {
              setEmail(val)
              if (!val.includes("@nitj.ac.in")) {
                setError(true);
              } else {
                setError(false);
              }
            }}
            error={error}
          />

          <Comp placeholder="Password" error={false} Handlechange = {(val)=>{setPassword(val)}}/>
          <div className="text-end mt-5">
            <button className="text-[#959595]">Forgot Password ?</button>
          </div>
          <button className="text-3xl font-oswald text-center mt-5 py-4 px-10 bg-black text-white" onClick={ClickHandler2} >
            I'm Ready
          </button>

          <button className="text-3xl text-center my-5 py-4 px-10 font-oswald bg-black text-white">
            <a href="http://localhost:8000/auth/google">Sign with Google</a>
          </button>
        </div>
       </div>
  );
}

export default Login;
