// SideDrawer.js
// import option1 from "./option1.svg";
// import option1 from "./assets/option1.svg";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import {Link, useNavigate} from 'react-router-dom'
import "./SideDrawer.css";
import OptionCard from "../../components/OptionsCard";
import img1 from "../../assets/Option1.svg"
import img2 from "../../assets/Option2.svg";
import img3 from "../../assets/Option3.svg";
import img4 from "../../assets/Option4.svg";
import img5 from "../../assets/Option5.svg";
import YourComponent from "./home/YourComponent";
import Backdrop from "../../components/backgrop";

const SideDrawer = ({setLogin}) => {
  const [collapsed, setCollapsed] = useState(true);
  const navigator = useNavigate();
  const toggleDrawer = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
<Backdrop show={!collapsed} onClick={toggleDrawer} />

<div className={`side-drawer ${collapsed ? "collapsed" : "uncollapsed"}`} style={{ height: "100%" , zIndex:100}}>
  <div className="drawer-icon" onClick={toggleDrawer}>
    <img src={require("../../image.jpg")} className="object-cover h-16 w-14" />
  </div>
  <div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", backgroundColor: "#f6f8fe" }}>
    <div className="ml-2 mr-2" style={{ position: "relative", top: "15%" }}>
      <Link to="/student_portal" className="font-inter">
        <OptionCard optionImage={img1} optionLabel={"Home"} collapsed={collapsed} />
      </Link>

      <Link to="/student_portal/application">
        <OptionCard optionImage={img2} optionLabel={"Applications"} collapsed={collapsed} />
      </Link>

      <Link to="/student_portal/resume-builder" onClick={() => {
        document.location.href = 'http://127.0.0.1:5500/index.html';
      }
      }>
        <OptionCard optionImage={img3} optionLabel={"Resume-Builder"} collapsed={collapsed} />
      </Link>

      <Link to="/student_portal/notification">
        <OptionCard optionImage={img4} optionLabel={"Notifications"} collapsed={collapsed} />
      </Link>

      <Link to="/student_portal/profile">
        <OptionCard optionImage={img5} optionLabel={"Profile"} collapsed={collapsed} />
      </Link>

      <YourComponent collapsed={collapsed} setLogin={setLogin} />
    </div>
  </div>
</div>
    </>
  );
};

export default SideDrawer;
