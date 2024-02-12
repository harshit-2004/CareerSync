import SmallCard from "../../components/SmallCard";
import {useLoaderData} from "react-router-dom";
import axios from "axios";

function InfoCards(){
    const fuck = useLoaderData();
    const det = fuck.data[0];
    console.log("showing the data ",det);
    return (
        <div className="flex flex-row items-center justify-start pl-6 pt-6 gap-20">
            <SmallCard
                first
                heading= {det.overview.placement.name}
                images="/image1.svg"
                topboxcolor="#CFD7F7"
                bottomboxcolor="#E0E6FA"
                percentage={det.overview.placement.percentage}
                contentbox={det.overview.placement.info}
            />
            <SmallCard
                second
                heading={det.overview.highest_packages.name}
                images="/image2.svg"
                topboxcolor="#D5C6F6"
                bottomboxcolor="#E2D7F9F0"
                percentage={det.overview.highest_packages.percentage}
                contentbox={det.overview.highest_packages.info}
            />
            <SmallCard
                third
                heading={det.overview.total_intern_hired.name}
                images="/image3.svg"
                topboxcolor="#BDE5C5"
                bottomboxcolor="#DAF1DF"
                percentage={det.overview.total_intern_hired.percentage}
                subText="out of 80"
                contentbox={det.overview.total_intern_hired.info}
            />
        </div>
    );
};

export default InfoCards;

export async function loader(){
    try {
        const response = await axios.get("http://localhost:8000/student_portal/overview");
        return response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error; 
    }
  }