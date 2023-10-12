
import React from 'react'
import './Login.css'

const data=[
    {
        placeholder:"Email",
    },
    {
        placeholder:"Password",
    },
];

function Comp(props){
    return(
       <div>
          <input  type="text" placeholder={props.placeholder} id='comp'/> <br />
       </div>
    );
}

function Login() {
  return (
      <div id='main'>
           
           <div id='box'>
               <img alt='' src="/ezgif.gif" ></img>
               <div id='box1'>
                  <h1>Discover the Advantages</h1>
                  <h3>►Hassle Free Placement</h3>
                  <h3>►Easy Profile Management</h3>
                  <h3>►Resume Builder Template</h3>
                  <h3>►Stay Updated with all the Latest Info</h3>
               </div>
          </div>
          

          <div id='login'>
                <div id='left'>
                   <img id='logo' src="/careersynclogo.svg" alt="CareerSync Logo" />
                   <h1>CAREER SYNC</h1>
                   <h1 id='head'>Unlock Your Future</h1>
                   <h4 id='faint'>Enter your University Credentials </h4>
                </div>
               <Comp
                 placeholder="Email"
                />
               
               <Comp
                 placeholder="Password"
                />
                <h5>Forgot Password ?</h5>
               <button id='btn'>I'm Ready</button>
           </div>

          
      </div>
  );
}

export default Login;