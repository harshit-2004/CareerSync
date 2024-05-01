import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import "./App.css";
import StudentPortal, { loader as infocardloader } from "./pages/student_portal/home/StudentPortal.js";
import Login from "./login/StudentLogin.js";
import Mainlogin from "./login/mainlogin.js";
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements, Routes, Navigate } from "react-router-dom";
import About from "./pages/first_page/About.js";
import Table from "./pages/student_portal/application/Application.js";
import Notification from "./pages/student_portal/notification/Notification.js";
import { AvatarMenue } from "./pages/student_portal/student_profile/account.js";
import axios from "axios";
import { cookieSplitter } from "./pages/student_portal/utils";
import AlumniTPO from "./pages/alumniPage/alumni_tpo.js";
import RootHomePage from "./pages/first_page/RootHomePage.jsx"

import HR from "./pages/HR";

function App() {
  const [login, setlogin] = useState(false);

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
        console.log("inside first time login", previousLoggedIn);
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
            <Route path="application" element={<Table />} />
          </Route>

          <Route path="/tpo_portal" element={<HR/>}></Route>
        </>
      }
      <Route path="/main-login" element={<Mainlogin />} />
      <Route path="/login" element={!login ? <Login login={login} setlogin={setlogin} /> : <StudentPortal />} />
      <Route path="/*" element={<RootHomePage />} />
      <Route path="/alumni" element={<AlumniTPO />}/>
    </Routes>
  )
}

export default App;