import React, { useEffect, useState } from "react";
import "./App.css";
import AppPage from "./pages/first_page/AppPage";
import StudentPortal , {loader as infocardloader} from "./pages/Student Portal/home/StudentPortal.js";
import Login from "./login/StudentLogin.js";
import Mainlogin from "./login/mainlogin.js";
import {RouterProvider,Route, createBrowserRouter, createRoutesFromElements, Routes } from "react-router-dom";
import About from "./pages/first_page/About.js";
import Service from "./pages/first_page/Service.js";
import Table from "./pages/Student Portal/application/Application.js";
import Notification from "./pages/Student Portal/notification/Notification.js";

function App() {
  const [login, setlogin] = useState(false);

  // useEffect(() => {
  //   const fun = async () => {
  //       const isLoggedIn = await axios.post("http://localhost:8000/checkLogin");
    
  //       if(isLoggedIn.body.status == true){
  //         setlogin(true);
  //       }
  //       else{
  //         setlogin(false);
  //       }
  //   }

  //   fun();
  // })


  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/main-login" element={<Mainlogin />} />
      <Route path="/login" element={<Login login={login} setlogin={setlogin} />} />
      <Route path="/*" element={<Login />} />
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