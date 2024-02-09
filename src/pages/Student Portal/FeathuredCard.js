import { BsMicrosoft } from "react-icons/bs";
import { RiNetflixFill } from "react-icons/ri";
import { AiFillAmazonCircle, AiFillGoogleCircle } from "react-icons/ai";

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

export default FeatureCard;