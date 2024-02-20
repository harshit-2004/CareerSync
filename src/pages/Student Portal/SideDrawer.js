// SideDrawer.js
// import option1 from "./option1.svg";
// import option1 from "./assets/option1.svg";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import {Link} from 'react-router-dom'
import "./SideDrawer.css";
import OptionCard from "../../components/OptionsCard";
import img1 from "../../assets/Option1.svg"
import img2 from "../../assets/Option2.svg";
import img3 from "../../assets/Option3.svg";
import img4 from "../../assets/Option4.svg";
import img5 from "../../assets/Option5.svg";
import img6 from "../../assets/Option6.svg";
import Login from "../../login/StudentLogin";

const SideDrawer = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleDrawer = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      className={`side-drawer ${collapsed ? "collapsed" : "uncollapsed"}`}
      style={{ height: "100%" }}
    >
      <div className="drawer-icon" onClick={toggleDrawer}>
        <img src={require("../../image.jpg")} className="object-cover" />
      </div>
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#f6f8fe",
        }}
      >
        <div
          className=" ml-2 mr-2"
          style={{ position: "relative", top: "10%" }}
        >
          <Link to="/student-portal" className="font-inter font-bold">
            <OptionCard
              optionImage={img1}
              optionLabel={"Home"}
              collapsed={collapsed}
            />
          </Link>

          <Link to="/student-portal/application">
            <OptionCard
              optionImage={img2}
              optionLabel={"Applications"}
              collapsed={collapsed}
            />
          </Link>

          <Link to="/student-portal/resume-builder">
            <OptionCard
              optionImage={img3}
              optionLabel={"Resume-Builder"}
              collapsed={collapsed}
            />
          </Link>

          <Link to="/student-portal/notification">
            <OptionCard
              optionImage={img4}
              optionLabel={"Notifications"}
              collapsed={collapsed}
            />
          </Link>

          <Link to="/student-portal/profile">
            <OptionCard
              optionImage={img5}
              optionLabel={"Profile"}
              collapsed={collapsed}
            />
          </Link>

          <Link to="http://localhost:8000/logout">
            <OptionCard
              optionImage={img6}
              optionLabel={"Logout"}
              collapsed={collapsed}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideDrawer;
