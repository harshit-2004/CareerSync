import React, { useEffect, useState } from "react";
import "./StudentPortal.css";
import VictoryCard from "./VictoryCard.js";
import InfoCards from "./InfoCards.js";
import FeatureCard from "./FeathuredCard.js";
import SideDrawer from "../SideDrawer.js";
import Search from "../../../assets/search.png"
import Notif from "../../../assets/notif.png"
import Profile from "../../../assets/profile.png"
import Navbar from "../Navbar.js";
// import {useLoaderData} from "react-router-dom";


function StudentPortal({setLogin}) {
  // const tp = useLoaderData();
  return (
    <>
    <div className="flex flex-row">      
      <div className="app" style={{ position: "relative" , backgroundColor : 'white', zIndex : '100'}}>
        <SideDrawer setLogin={setLogin}/>
      {/* <Navbar/> */}
      </div>
      
      <div className="flex flex-col pt-5 pl-52 pr-32">
        <div className="flex flex-row justify-between">
        <div className="flex flex-col flex-1">
          <h1 className="text-6xl font-oswald">Student Nexus</h1>
          <text className="pt-4 text-2xl text-gray-500 font-inter">Hey there, User!</text>
        </div>
        <div className="flex flex-1 flex-row justify-end pt-3 align-middle ">
          <div className="w-1/2 bg-gray-200 h-8 rounded-md flex items-center flex-row justify-between">
            <text className="ml-4 text-gray-400 font-inter font-bold">Search</text>
            <img className="w-4 h-4 mr-4" src={Search}/>
          </div>
          <img src={Notif} className="ml-4 w-8 h-8"/>
          <text className="ml-4 font-bold font-inter text-2xl">User</text>
          <img src={Profile} className="ml-4 w-12 h-12"/>

        </div>
        </div>

        <div className="flex flex-row space-x-48">
          <div className="flex flex-col">
          <div className="flex flex-col pt-16">
          <h1 className="text-4xl font-robot font-bold">Overview</h1>
          <div className="flex flex-row">
            <InfoCards />
          </div>
            
          </div>
          <div className="flex flex-col pt-20">
          <h1 className="text-4xl font-bold font-robot">Analytics</h1>
          <svg viewBox="0 0 450 350">
            <VictoryCard/>
          </svg>
          </div>
          </div>
          <div className="inline-block space-y-8 border-l-2 border-l-black pl-24 w-fit">
        <h1 className="text-4xl font-bold mt-5 mb-5  font-robot">Opportunities</h1>
        <FeatureCard oncampus />
        <FeatureCard offcampus />
      </div>
        </div>
      </div>

     
        {/* <h1 className="text-6xl font-oswald">Student Nexus</h1>
        <text className="pt-4 text-2xl text-gray-500 font-inter">Hey there, User!</text> */}
        {/* <div className="flex flex-col pt-16">
          <h1 className="text-4xl font-robot font-bold">Overview</h1>
            <InfoCards />
        </div>
        <div className="flex flex-col pt-20">
          <h1 className="text-4xl font-bold font-robot">Analytics</h1>
          <svg viewBox="0 0 450 350">
            <VictoryCard/>
          </svg>
        </div> */}
      
{/* 
      <div className="inline-block space-y-8 border-l-2 border-l-black pl-24 pt-20 w-fit ">
        <h1 className="text-4xl font-bold mt-5 mb-5  font-robot">Opportunities</h1>
        <FeatureCard oncampus />
        <FeatureCard offcampus />
      </div> */}
    </div>
    </>
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