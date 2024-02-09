import React, { useState } from "react";
import "./App.css";
import AppPage from "./pages/first_page/AppPage";
import StudentPortal from "./StudentPortal";
import Login from "./Login";
import Mainlogin from "./mainlogin.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideDrawer from "./SideDrawer.js";
import About  from "./pages/first_page/About.js";
import Service  from "./pages/first_page/Service.js";
import SharedLayout from "./pages/first_page/SharedLayout.js";

function App() {
  const [login, setLogin] = useState(true);

  return (
    <>
     
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={null} >
            <Route index element={<AppPage/>}/>
            <Route path={'/about'} element={<About/>}/>
            <Route path={'/service'} element={<Service/>}/>
          </Route>
          <Route path={"login"} element={<Login />} />
          <Route path={"main-login"} element={<Mainlogin />} />
          <Route path={"student-portal"} element={<StudentPortal />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
