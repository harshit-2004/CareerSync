import { Link,Outlet, useNavigate} from "react-router-dom"
import Linemake from "./Linemake";
import App from "../../App"


const About = ()=>{
    const navigate = useNavigate
    return (
      <div className="body">
        <Linemake thickness="90" />

        <section className="relative max-w-screen-xl mx-auto py-4 px-4 md:px-8">
          <div className="absolute top-0 left-0 w-full h-full bg-white opacity-40"></div>
          <div className="relative z-10 gap-5 items-center lg:flex">
            <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
              <h3 className="text-3xl text-gray-800 font-semibold md:text-4xl">
                build your Career with us{" "}
                <span className="text-indigo-600">Highly Trustable </span>
              </h3>
              <p className="text-gray-500 leading-relaxed mt-3">
                Nam erat risus, sodales sit amet lobortis ut, finibus eget
                metus. Cras aliquam ante ut tortor posuere feugiat. Duis sodales
                nisi id porta lacinia.
              </p>
              <a
                className="mt-5 px-4 py-2 text-indigo-600 font-medium bg-indigo-50 rounded-full inline-flex items-center"
                href="javascript:void()"
              >
                Try it out
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 ml-1 duration-150"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
            <div className="flex-1 mt-5 mx-auto sm:w-9/12 lg:mt-0 lg:w-auto">
              <img
                src="https://i.postimg.cc/kgd4WhyS/container.png"
                alt=""
                className="w-full"
              />
            </div>
          </div>
        </section>
        {/* <Link to="/"  className="font-inter mr-10 ml-5 rounded-xl text-xl font-bold">Home</Link> */}
        <Text/>
        <Footer/>
      </div>
    );
}


const Text = () =>{

     const jobs = [
       {
         title: "Career Guidance:",
         desc: "The T&P Cell offers personalized guidance and counseling to students, helping them identify their career goals, strengths, and areas for improvement. It assists students in making informed decisions about their career paths.",
       },
       {
         title: "Industry Interaction:",
         desc: "The T&P Cell establishes and maintains partnerships with various industries and organizations. It facilitates guest lectures, industrial visits, internships, and collaborative projects to expose students to real-world experiences, industry trends, and networking opportunities.",
       },
       {
         title: "Placement Assistance: ",
         desc: "One of the primary responsibilities of the T&P Cell is to facilitate job placements for graduating students. It coordinates with employers, arranges campus recruitment drives, conducts pre-placement talks, and assists students in preparing for interviews and aptitude tests.",
       },
       {
         title: "Alumni Engagement: ",
         desc: "The T&P Cell maintains a strong network with alumni who can provide valuable insights, mentorship, and career advice to current students. Alumni interactions, such as guest lectures and networking events, are organized to facilitate knowledge sharing and professional connections.",
       },
     ];

     return (
       <section className="mt-12 max-w-screen-lg mx-auto px-4 md:px-8">
         <div>
           <h1 className="text-gray-800 text-3xl font-semibold">
             All Information that you need to know
           </h1>
         </div>

         <ul className="mt-12 space-y-6">
           {jobs.map((item, idx) => (
             <li key={idx} className="p-5  rounded-md shadow-sm">
               <a href={item.href}>
                 <div>
                   <div className="justify-between sm:flex">
                     <div className="flex-1">
                       <h3 className="text-xl font-medium   text-indigo-600">
                         {item.title}
                       </h3>
                       <p className="text-gray-500 mt-2 pr-2">{item.desc}</p>
                     </div>
                    
                   </div>
                  
                 </div>
               </a>
             </li>
           ))}
         </ul>
       </section>
     );
}


const Footer = ()=>{
   const footerNavs = [
     {
       href: "javascript:void()",
       name: "Privacy",
     },
     {
       href: "javascript:void()",
       name: "About us",
     },
   ];
   return (
     <footer className="pt-10">
       <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
         <div className="justify-between sm:flex">
           {/* <div className="space-y-6">
             <p className="max-w-md text-right  hover:text-gray-800 text-lg">
               Get our beautiful newsletter straight to your Inbox
             </p>
             <ul className="flex flex-wrap items-center gap-4 text-sm sm:text-base">
               {footerNavs.map((item, idx) => (
                 <li className="text-gray-800 hover:text-gray-800 duration-150 flex justify-center">
                   <a key={idx} href={item.href}>
                     {item.name}
                   </a>
                 </li>
               ))}
             </ul>
           </div> */}
           <div className="mt-6">
             {/* <p className="text-gray-700 font-semibold">Get the app</p> */}
             <div className="flex items-center gap-3 mt-3 sm:block"></div>
           </div>
         </div>
         <div className="mt-10 py-10 border-t md:text-center ">
           <p className=" text-indigo-600">
             © 2024 Career Sync All rights reserved.
           </p>
         </div>
       </div>
     </footer>
   );
}
export default About





