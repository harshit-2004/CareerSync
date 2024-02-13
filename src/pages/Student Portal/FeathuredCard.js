import { BsMicrosoft } from "react-icons/bs";
import { RiNetflixFill } from "react-icons/ri";
import { AiFillAmazonCircle, AiFillGoogleCircle } from "react-icons/ai";

function Comp(props){
  console.log("inside props ",props);
  const date = new Date(props.last_date);
  return (
      <div className="flex flex-row justify-between">
        <BsMicrosoft size={30} />
        <p>{props.name}</p>
        <p>{props.position}</p>
        <p>{date.getDate()}</p>
      </div>
  )
}

function FeatureCard(props) {
  const data = props.campusdata;

  return (
    <div className="h-96 aspect-square bg-[#F6F8FE] rounded-lg px-4 flex flex-col">
      <div className="flex flex-row justify-between items-center pt-12 h-20">
        <h1>Upcoming Opportunities</h1>

        <span className="bg-[#E8EDFD] px-2 py-1 rounded-xl">
          {props.oncampus ? "Oncampus" : "Offcampus"}
        </span>
      </div>

      <div className="flex flex-col flex-1 gap-4 pt-6">
        {data &&
          data.map((element) => (
            <Comp
              key={element.id} // Don't forget to add a unique key prop when rendering lists
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