import { BsMicrosoft } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Comp(props){
  const date = props.last_date;
  return (
      <div className="flex flex-row justify-between">
        <BsMicrosoft className="mr-5" size={30} />
        <p className="mx-6 font-inter font-bold text-lg">{props.name}</p>
        <p className="mx-6 font-inter font-bold text-lg">{props.position}</p>
        <p className="ml-6 font-inter font-bold text-lg text-gray-500">{date.substring(0,10)}</p>
      </div>
  )
}

function FeatureCard(props) {
  const [campusdata, setCampusdata] = useState();

  console.log(campusdata);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const rp = await axios.get("http://localhost:8000/student_portal/company_data/oncampuss");
          setCampusdata(rp.data.data); 
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    
      fetchData(); 
    }, []); 

  return (
    <div className="bg-[#F6F8FE] rounded-2xl px-8 flex flex-col">
      <div className="flex flex-row justify-between items-center pt-8">
        <h1 className="font-quick font-bold text-xl">Upcoming Opportunities</h1>

        <span className="bg-[#E8EDFD] px-2 py-1 rounded-xl">
          {props.oncampus ? "Oncampus" : "Offcampus"}
        </span>
      </div>

      <div className="flex flex-col flex-1 gap-4 pt-6 pb-8">
        {campusdata &&
          campusdata.map((element,index) => (
            <Comp
              key={index}
              name={element.companyName}
              position={element.position}
              last_date={element.last_date}
            />
          ))}
      </div>
    </div>
  );
}


export default FeatureCard;