import { BsMicrosoft } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Comp(props){
  const date = props.last_date;
  return (
      <div className="flex flex-row justify-between">
        <BsMicrosoft size={30} />
        <p>{props.name}</p>
        <p>{props.position}</p>
        <p>{date.substring(0,10)}</p>
      </div>
  )
}

function FeatureCard(props) {
  const [campusdata, setCampusdata] = useState();
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const rp = await axios.get("http://localhost:8000/company_data/oncampuss");
          setCampusdata(rp.data); 
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    
      fetchData(); 
    }, []); 

  return (
    <div className="h-96 aspect-square bg-[#F6F8FE] rounded-lg px-4 flex flex-col">
      <div className="flex flex-row justify-between items-center pt-12 h-20">
        <h1>Upcoming Opportunities</h1>

        <span className="bg-[#E8EDFD] px-2 py-1 rounded-xl">
          {props.oncampus ? "Oncampus" : "Offcampus"}
        </span>
      </div>

      <div className="flex flex-col flex-1 gap-4 pt-6">
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