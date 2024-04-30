
const data ={
    name:"harshit",

}

function StudentNavbar(){
    return (
        <>
        <div className="flex flex-row">
            <div className="flex flex-row">
                <input />
            </div>
            <div className="">
                // Notification icon
            </div>
            <div>
                {data.name}
            </div>
            <div className="flex flex-col">
                <div>
                    Student Nexus
                </div>
                <div>
                    Hey there , {data.name};
                </div>
            </div>
        </div>
        </>
    )
}

export default StudentNavbar;