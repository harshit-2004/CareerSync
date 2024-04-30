import React, { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./pages/first_page/AppPage.js";
import StudentPortal, { loader as infocardloader } from "./pages/Student Portal/home/StudentPortal.js";
import Login from "./login/StudentLogin.js";
import Mainlogin from "./login/mainlogin.js";
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements, Routes, Navigate } from "react-router-dom";
import About from "./pages/first_page/About.js";
import Service from "./pages/first_page/Service.js";
import Table from "./pages/Student Portal/application/Application.js";
import Notification from "./pages/Student Portal/notification/Notification.js";
import axios from "axios";
import { cookieSplitter } from "./pages/Student Portal/utils";
import Alumni from "./pages/alumniPage/alumni.js";
import HR from "./pages/HR";

function App() {
  const [login, setlogin] = useState(false);
  console.log(document.cookie);

  useEffect(() => {
    const fun = async () => {
      try {
        const tokens = cookieSplitter(document.cookie);

        if (!tokens.jwt) {
          setlogin(false);
        }

        const previousLoggedIn = await axios.get(`http://localhost:8000/checkLogin/${tokens.jwt}`, {
          withCredentials: true,
          credentials: 'include'
        });
        console.log("insied first time login", previousLoggedIn);
        if (previousLoggedIn.status == 200) {
          setlogin(true);
        }
      }
      catch (err) {
        setlogin(false);
      }
    }

    fun();
  }, []);

  console.log(login);

  return (
    <Routes>
      {login &&
        <>
          <Route path="/student_portal">
            <Route index element={<StudentPortal setLogin={setlogin} />} />
            <Route path="notification" element={<Notification />}></Route>
            <Route path="profile" element={null} />
            <Route path="resume-builder" element={null} />
            <Route path="application" element={<Table />} />
          </Route>

          <Route path="/tpo_portal" element={<HR_new/>}></Route>
        </>
      }
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/main-login" element={<Mainlogin />} />
      <Route path="/login" element={!login ? <Login login={login} setlogin={setlogin} /> : <StudentPortal />} />
      <Route path="/*" element={<HomePage />} />
      <Route path="/alumni" element={<Alumni />} />
    </Routes>
  )
}

export default App;