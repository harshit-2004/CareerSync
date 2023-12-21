import React from "react";
import { useNavigate } from "react-router-dom";

import './Login.css'

import { useState, useEffect } from "react";

const URL = `http://localhost:8000/auth/google`;

const getdata = async () => {
  const response = await fetch(URL,{
    method: "GET",
  });

  console.log(response);
 console.log("Hello")
};


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

function EmailPasswordLogin(){
    
}

function Login() {
    const navigate = useNavigate();
    
    const onClickHandler = () => {
        getdata();
    };

  return (
    <div className="flex ">
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

               <Comp placeholder="Email"/>
               
               <Comp
                 placeholder="Password"
                />
                <div className='text-end mt-5'>
                    <button>
                        Forgot Password ?
                    </button>
                    
                    </div>
               <button className='text-3xl text-center my-5 py-3 px-10 bg-black text-white' onClick={() => {
                setTimeout(() => {
                    navigate('/student-portal')
                }, (2000));
               }}>I'm Ready</button>

        <button
          className="text-3xl text-center my-5 py-3 px-10 font-oswald bg-black text-white"
          onClick={onClickHandler}
        >
          Join with Google
        </button>
      {/* </div> */}
    </div>
    // <div className="flex-row">
    //   <div className="m-9 p-10">
    //     <img alt="" src="/ezgif.gif"></img>
    //     <div className="flex flex-col ml-20">
    //       <div className="text-3xl mb-5 font-oswald">
    //         Discover the Advantages:
    //       </div>
    //       <div className="inline-flex font-sans ">
    //         <div className="text-3xl mb-5">Discover the Advantages:</div>
    //         <div className="inline-flex">
    //           <img src="/image13.png" /> Hassle Free Placement
    //         </div>
    //         <div className="inline-flex">
    //           <img src="/image13.png" /> Easy Profile Manag
    //         </div>
    //         <div className="inline-flex">
    //           <img src="/image13.png" /> Resume Builder Template
    //         </div>
    //         <div className="inline-flex">
    //           <img src="/image13.png" /> Stay Updated with all the Latest Info
    //         </div>
    //       </div>
    //     </div>

    //     <div className="flex border-l-4 p-20 flex-col bg-[#F6F8FE]">
    //       <div className="flex flex-col">
    //         <div className="flex mt-10 justify-start items-center">
    //           <img
    //             className="w-60 h-60 "
    //             src="/careersynclogo.svg"
    //             alt="CareerSync Logo"
    //           />

    //           <p className="text-6xl font-bebas flex justify-center relative right-5 py-3">
    //             CAREERSYNC
    //           </p>
    //         </div>
    //         <div className="text-6xl font-playFair mb-2">
    //           Unlock Your Future
    //         </div>
    //         <div className="text-1xl text-[#959595]">
    //           Enter your University Credentials{" "}
    //         </div>
    //       </div>

    //       <Comp
    //         placeholder="Email"
    //         Handlechange={(val) => {
    //           if (!val.includes("@nitj.ac.in")) {
    //             setError(true);
    //           } else {
    //             setError(false);
    //           }
    //           console.log(val);
    //         }}
    //         error={error}
    //       />

    //       <Comp placeholder="Password" error={false} Handlechange={() => {}} />
    //       <div className="text-end mt-5">
    //         <button className="text-[#959595]">Forgot Password ?</button>
    //       </div>
    //       <button
    //         className="text-3xl font-oswald text-center my-10 py-5 px-10 bg-black text-white"
    //         onClick={() => {
    //           setTimeout(() => {
    //             navigate("/student-portal");
    //           }, 2000);
    //         }}
    //       >
    //         I'm Ready
    //       </button>

    //       <button
    //         className="text-3xl text-center my-5 py-3 px-10 bg-black text-white"
    //         onClick={onClickHandler}
    //       >
    //         Sign with Google
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Login;
