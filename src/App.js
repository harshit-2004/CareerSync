import React, { useState } from "react";
import "./App.css";
import AppPage from "./pages/first_page/AppPage";
import StudentPortal , {loader as infocardloader} from "./pages/Student Portal/StudentPortal.js";
import Login from "./Login";
import Mainlogin from "./mainlogin.js";
import {RouterProvider,Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import About from "./pages/first_page/About.js";
import Service from "./pages/first_page/Service.js";
import { Navbar, Table } from "./pages/inner_page/Application.js";
import Notification from "./pages/inner_page/Notification.js";

function App() {
  const [login, setLogin] = useState(true);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<AppPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main-login" element={<Mainlogin />} />
        <Route path="/student-portal">
          <Route index element={<StudentPortal />} loader={infocardloader} />
          <Route path="notification" element={<Notification />} />
          <Route path="profile" element={null} /> 
          <Route path="logout" element={null} /> 
          <Route path="resume-builder" element={null} />
          <Route path="application" element={<Table />} />
        </Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
