import SmallCard from "../../components/SmallCard";

const contentboxdata = [
    {
        id:"1",
        heading:"Placements",
        images:"/image1.svg",
        topboxcolor:"#CFD7F7",
        bottomboxcolor:"#E0E6FA",
        percentage:"98.6%",
        contentbox:"+5% from last year"
    },
    {
        id:"2",
        heading:"Highest Package",
        images:"/image2.svg",
        topboxcolor:"#D5C6F6",
        bottomboxcolor:"#E2D7F9F0",
        percentage:"48 LPA%",
        contentbox:"32 LPA For 2022"
    },
    {
        id:"3",
        heading:"Total Intern Hired",
        images:"/image3.svg",
        topboxcolor:"#BDE5C5",
        bottomboxcolor:"#DAF1DF",
        percentage:"42%",
        subText:"out of 80",
        contentbox:"20 more than last year"
    },

]

function InfoCards(){
    return (
        <div className="flex flex-row items-center justify-start pl-6 pt-6 gap-20">
            <SmallCard
                first
                heading="Placements"
                images="/image1.svg"
                topboxcolor="#CFD7F7"
                bottomboxcolor="#E0E6FA"
                percentage="98.6%"
                contentbox="+5% from last year"
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

export default InfoCards;