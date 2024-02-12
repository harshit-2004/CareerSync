import React from "react";
import "./StudentPortal.css";
import VictoryCard from "./VictoryCard.js";
import InfoCards from "./InfoCards.js";
import FeatureCard from "./FeathuredCard.js";
import SideDrawer from "../../SideDrawer";
import {useLoaderData} from "react-router-dom";
import axios from "axios";

function StudentPortal() {
  const fuck = useLoaderData();
  return (

    <div className="flex flex-row justify-between">
      <div className="app" style={{ position: "relative" , backgroundColor : 'white', zIndex : '100'}}>
        <SideDrawer />
      </div>
      <div className="flex flex-col pt-20">
        <div className="flex flex-col pt-10">
          <h1 className="text-5xl font-bold ">Overview</h1>
            <InfoCards data={fuck.data[0]} />
        </div>
        <div className="flex flex-col pt-20">
          <h1 className="text-5xl font-bold ">Analytics</h1>
          <svg viewBox="0 0 450 350">
            <VictoryCard/>
          </svg>
        </div>
        {/* <img src={require('./components/bar.png')} className="object-cover"/> */}
      </div>

      <div className="inline-block space-y-8 border-l-2 border-l-black pl-10">
        <h1 className="text-5xl font-bold pt-20 mt-5 mb-5">Opportunities</h1>
        <FeatureCard oncampus />
        <FeatureCard offcampus />
      </div>
      </div>
  );
}

export default StudentPortal;

export async function loader(){
  try {
      const response = await axios.get("http://localhost:8000/student_portal/overview");
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; 
  }
}