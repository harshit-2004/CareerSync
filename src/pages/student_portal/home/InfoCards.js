import { useEffect, useState } from "react";
import SmallCard from "../../../components/SmallCard";
import axios from "axios";
import {cookieSplitter} from '../utils';

function InfoCards() {
    const [overview, setOverview] = useState([]);

    useEffect(() => {
        const fuck = async () => {
            try {
                const rp = await axios.get("http://localhost:8000/student_portal/overview");
                setOverview(rp.data.student_data);
                console.log(rp);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fuck();
    }, [])

    return (
        <div className="flex flex-row items-center justify-start pl-6 pt-6 gap-20">
            <SmallCard
                first
                heading={overview.length && overview[0].name}
                images="/image1.svg"
                topboxcolor="#CFD7F7"
                bottomboxcolor="#E0E6FA"
                percentage={overview.length && overview[0].percentage}
                contentbox={overview.length && overview[0].info}
            />
            <SmallCard
                second
                heading={overview.length && overview[1].name}
                images="/image2.svg"
                topboxcolor="#D5C6F6"
                bottomboxcolor="#E2D7F9F0"
                percentage={overview.length > 1 && overview[1].percentage}
                contentbox={overview.length > 1 && overview[1].info}
            />
            <SmallCard
                third
                heading={overview.length > 2 && overview[2].name}
                images="/image3.svg"
                topboxcolor="#BDE5C5"
                bottomboxcolor="#DAF1DF"
                percentage={overview.length > 2 && overview[2].percentage}
                subText="out of 80"
                contentbox={overview.length > 2 && overview[2].info}
            />
        </div>
    );
};

export default InfoCards;