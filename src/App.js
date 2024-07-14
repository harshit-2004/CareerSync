import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import "./App.css";
import StudentPortal, { loader as infocardloader } from "./pages/student_portal/home/StudentPortal.js";
import Login from "./pages/Login/StudentLogin.js";
import Mainlogin from "./pages/Login/mainlogin.js";
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements, Routes, Navigate } from "react-router-dom";
import About from "./pages/Home Page/About.js";
import Table from "./pages/student_portal/application/Application.js";
import Notification from "./pages/student_portal/notification/Notification.js";
import { AvatarMenue } from "./pages/student_portal/student_profile/account.js";
import axios from "axios";
import { cookieSplitter } from "./pages/student_portal/utils";
import AlumniTPO from "./pages/Alumni Pages/Alumni TPO/alumni_tpo.js";
import RootHomePage from "./pages/Home Page/RootHomePage.jsx"
import TpoRoot from "./pages/TPO/TpoRoot.js";
import TpoLogin from "./pages/Login/TpoLogin.js";

import HR from "./pages/TPO/HR.js";

function App() {
  const [login, setLogin] = useState(false);
  const [tpologin,settpologin] = useState(false);

  useEffect(() => {
    const funTpo = async() => {
      try {
        const tokens = cookieSplitter(document.cookie);
        console.log("all cookies ",document.cookie);

        if (!tokens.jwtTpo) {
          settpologin(false);
        }

        const previousLoggedIn = await axios.get(`http://localhost:8000/tpo/checkLogin/${tokens.jwtTpo}`, {
          withCredentials: true,
          credentials: 'include'
        });
        console.log("inside first time login", previousLoggedIn);
        if (previousLoggedIn.status == 200) {
          settpologin(true);
        }
        console.log("status of tpo login is app.js ",tpologin);
      }
      catch (err) {
        settpologin(false);
      }
    }
    const fun = async () => {
      try {
        const tokens = cookieSplitter(document.cookie);

        if (!tokens.jwt) {
          setLogin(false);
        }

        const previousLoggedIn = await axios.get(`http://localhost:8000/checkLogin/${tokens.jwt}`, {
          withCredentials: true,
          credentials: 'include'
        });
        console.log("inside first time login", previousLoggedIn);
        if (previousLoggedIn.status == 200) {
          setLogin(true);
        }
      }
      catch (err) {
        setLogin(false);
      }
    }

    fun();
    funTpo();
  }, []);

  console.log(login);

  return (
    <Routes>
      {login &&
        <>
          <Route path="/student_portal">
            <Route index element={<StudentPortal setLogin={setLogin} />} />
            <Route path="notification" element={<Notification />}></Route>
            <Route path="profile" element={null} />
            <Route path="application" element={<Table />} />
          </Route>

        </>
      }
      {
        tpologin &&
        <>
          <Route path="/tpo_portal">
            <Route index settpologin={settpologin} tpologin={tpologin} element={<TpoRoot/>}></Route>
            <Route path="alumni" element={<AlumniTPO />}/>
          </Route>
        </>
      }
      <Route path="/main-login" element={<Mainlogin />} />
      <Route path="/login" element={!login ? <Login login={login} setLogin={setLogin} /> : <StudentPortal />} />
      <Route path="/tpoLogin" element={!tpologin ? <TpoLogin login={tpologin} setLogin={settpologin} /> : <TpoRoot settpologin={settpologin} tpologin={tpologin}/> } />
      <Route path="/*" element={<RootHomePage />} />
      <Route path="/table" element={Table}/>
    </Routes>
  )
}

export default App;