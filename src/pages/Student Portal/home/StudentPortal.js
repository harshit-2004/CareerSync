import React, { useEffect, useState } from "react";
import "./StudentPortal.css";
import VictoryCard from "./VictoryCard.js";
import InfoCards from "./InfoCards.js";
import FeatureCard from "./FeathuredCard.js";
import SideDrawer from "../SideDrawer.js";
import Navbar from "../Navbar.js";
// import {useLoaderData} from "react-router-dom";


function StudentPortal() {
  // const tp = useLoaderData();
  return (

    <div className="flex flex-row justify-between">
      <div className="app" style={{ position: "relative" , backgroundColor : 'white', zIndex : '100'}}>
        <SideDrawer />
      {/* <Navbar/> */}
      </div>
      
      <div className="flex flex-col pt-20">
        <div className="flex flex-col pt-10">
          <h1 className="text-5xl font-bold ">Overview</h1>
            <InfoCards />
        </div>
        <div className="flex flex-col pt-20">
          <h1 className="text-5xl font-bold ">Analytics</h1>
          <svg viewBox="0 0 450 350">
            <VictoryCard/>
          </svg>
        </div>
      </div>

      <div className="inline-block space-y-8 border-l-2 border-l-black pl-10 pt-20 w-1/3">
        <h1 className="text-5xl font-bold mt-5 mb-5">Opportunities</h1>
        <FeatureCard oncampus />
        <FeatureCard offcampus />
      </div>
    </div>
  );
}

export default StudentPortal;

// export async function loader(){
//   try {
//       const response = await axios.get("http://localhost:8000/student_portal/overview");
//       return response.data;
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       throw error; 
//   }
// }