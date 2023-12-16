import React from "react";
import SmallCard from "./components/SmallCard";
import "./StudentPortal.css";
import {
  VictoryBar,
  VictoryPie,
  VictorySharedEvents,
  VictoryLabel,
} from "victory";

import { BsMicrosoft } from "react-icons/bs";
import { RiNetflixFill } from "react-icons/ri";
import { AiFillAmazonCircle, AiFillGoogleCircle } from "react-icons/ai";

import SideDrawer from "./SideDrawer";


const InfoCards = () => {
  return (
    <div className="flex flex-row items-center justify-start pl-6 pt-6 gap-20">
      <SmallCard
        first
        heading="Placements"
        images="/image1.svg"
        topboxcolor="#CFD7F7"
        bottomboxcolor="#E0E6FA"
        percentage="98.6%"
        contentbox="+ 5% from last year"
      />
      <SmallCard
        second
        heading="Highest Package"
        images="/image2.svg"
        topboxcolor="#D5C6F6"
        bottomboxcolor="#E2D7F9F0"
        percentage="48 LPA"
        contentbox="32 LPA For 2022"
      />
      <SmallCard
        third
        heading="Total Intern Hired"
        images="/image3.svg"
        topboxcolor="#BDE5C5"
        bottomboxcolor="#DAF1DF"
        percentage="42"
        subText="out of 80"
        contentbox="20 more than last year"
      />
    </div>
  );
};

const FeatureCard = (props) => {
  return (

    <div className="h-96 aspect-square bg-[#F6F8FE] rounded-lg px-4 flex flex-col">
      <div className="flex flex-row justify-between items-center pt-12 h-20">
        <h1>Upcoming Opportunities</h1>

        <span className="bg-[#E8EDFD] px-2 py-1 rounded-xl">
          {props.oncampus ? "Oncampus" : "Offcampus"}
        </span>
      </div>

      <div className="flex flex-col flex-1 gap-4 pt-6">
        <div className="flex flex-row justify-between">
          <BsMicrosoft size={30} />
          <p>Microsoft</p>
          <p>Data Analyst</p>
          <p>15-10-2023</p>
        </div>

        <div className="flex flex-row justify-between items-center">
          <AiFillAmazonCircle size={30} />
          <p>Amazon</p>
          <p>Jr. Developer</p>
          <p>15-10-2023</p>
        </div>

        <div className="flex flex-row justify-between items-center">
          <AiFillGoogleCircle size={30} />
          <p>Google</p>
          <p>SDE-II</p>
          <p>15-10-2023</p>
        </div>
        <div className="flex flex-row justify-between items-center">
          <RiNetflixFill size={30} />
          <p>Netflix</p>
          <p>SDE-III</p>
          <p>15-10-2023</p>
        </div>
      </div>
    </div>
  );
};

function StudentPortal() {
  return (

    <div className="flex flex-row justify-between px-10">
      <div className="app" style={{ position: "relative" , backgroundColor : 'white', zIndex : '100'}}>
        <SideDrawer />
      </div>
      <div className="flex flex-col pt-20">
        <div className="flex flex-col pt-10">
          <h1 className="text-5xl font-bold ">Overview</h1>
          <InfoCards />
        </div>
        <div className="flex flex-col pt-20">
          <h1 className="text-5xl font-bold ">Analytics</h1>
          <svg viewBox="0 0 450 350">
            <VictorySharedEvents
              events={[
                {
                  childName: ["pie", "bar"],
                  target: "data",
                  eventHandlers: {
                    onMouseOver: () => {
                      return [
                        {
                          childName: ["pie", "bar"],
                          mutation: (props) => {
                            return {
                              style: Object.assign({}, props.style, {
                                fill: "tomato",
                              }),
                            };
                          },
                        },
                      ];
                    },
                    onMouseOut: () => {
                      return [
                        {
                          childName: ["pie", "bar"],
                          mutation: () => {
                            return null;
                          },
                        },
                      ];
                    },
                  },
                },
              ]}
            >
              <g transform={"translate(150, 50)"}>
                <VictoryBar
                  name="bar"
                  width={300}
                  standalone={false}
                  style={{
                    data: { width: 20 },
                    labels: { fontSize: 15 },
                  }}
                  data={[
                    { x: "2019", y: 2 },
                    { x: "2020", y: 3 },
                    { x: "2021", y: 5 },
                    { x: "2022", y: 4 },
                  ]}
                  labels={["2019", "2020", "2021", "2022"]}
                  labelComponent={<VictoryLabel y={290} />}
                />
              </g>
              <g transform={"translate(0, -75)"}>
                <VictoryPie
                  name="pie"
                  width={250}
                  standalone={false}
                  style={{ labels: { fontSize: 15, padding: 10 } }}
                  data={[
                    { x: "2019", y: 1 },
                    { x: "2020", y: 4 },
                    { x: "2021", y: 5 },
                    { x: "2022", y: 7 },
                  ]}
                />
              </g>
            </VictorySharedEvents>
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
