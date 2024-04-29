import React, { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./pages/first_page/AppPage";
import StudentPortal , {loader as infocardloader} from "./pages/Student Portal/home/StudentPortal.js";
import Login from "./login/StudentLogin.js";
import Mainlogin from "./login/mainlogin.js";
import {RouterProvider,Route, createBrowserRouter, createRoutesFromElements, Routes, Navigate } from "react-router-dom";
import About from "./pages/first_page/About.js";
import Service from "./pages/first_page/Service.js";
import Table from "./pages/Student Portal/application/Application.js";
import Notification from "./pages/Student Portal/notification/Notification.js";
import axios from "axios";

function App() {
  const [login, setlogin] = useState(false);

  useEffect(() => {
    const fun = async () => {
      try{
        const previousLoggedIn = await axios.get("http://localhost:8000/checkLogin");
        console.log("insied first time login",previousLoggedIn);
        if(previousLoggedIn.status == 200){
          setlogin(true);
        }
      }
      catch(err){
        setlogin(false);
      }
    }
    fun();
  },[]);


  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/main-login" element={<Mainlogin />} />
      <Route path="/login" element={<Login login={login} setlogin={setlogin} />} />
      <Route path="/*" element={<HomePage />} />
    {login && <Route path="/student_portal">
      <Route index element={<StudentPortal />}/>
      {login &&<Route path="notification" element={<Notification />} />}
      <Route path="profile" element={null} /> 
      <Route path="resume-builder" element={null} />
      <Route path="application" element={<Table />} />
    </Route>}
    </Routes>
  )
}

export default App;