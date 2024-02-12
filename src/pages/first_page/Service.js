import { Link,Outlet,useNavigate} from "react-router-dom";
import { Navigate } from "react-router-dom";
import Linemake from "./Linemake";
const Service = () => {
    const navigate = useNavigate();
  return (
    <div className="body">
      <nav className="first-big-box">
        <div className="logoclass1">
          <img
            id="logoelement1"
            src="/careersynclogo.svg"
            alt="CareerSync Logo"
          />
          <div className="codemera font-bebas">CAREER SYNC</div>
        </div>
        <div className="loginclass">
          <Link to="/" className="loginbutton font-inter font-bold">
            Home
          </Link>
          <Link to="/about" className="loginbutton font-inter font-bold">
            About
          </Link>
          <Link to="/service" className="loginbutton font-inter font-bold">
            Service
          </Link>

          <Outlet></Outlet>

          <button
            className="font-inter mr-10 ml-5 rounded-xl text-xl font-bold"
            id="logbutton"
            onClick={() => navigate("/main-login")}
          >
            Login
          </button>
        </div>
      </nav>

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
              Nam erat risus, sodales sit amet lobortis ut, finibus eget metus.
              Cras aliquam ante ut tortor posuere feugiat. Duis sodales nisi id
              porta lacinia.
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
       <Text/>
      {/* <h1>Service Provided by Our Team -- Career Sync</h1>
      <Link to="/">Home</Link> */}
    </div>
  );
};


const Text = ()=>{
 
   const faqsList = [
     {
       label: "Placement Assistance:",
       qas: [
         {
           q: "Placement Drives:",
           a: "Conducting on-campus recruitment drives, job fairs, and mock interviews to connect students with potential employers and facilitate job placements.",
         },
         {
           q: "Internship Placement:",
           a: "Facilitating internships for students to gain practical experience, allowing them to apply classroom knowledge in professional settings and explore different career paths.",
         },
         {
           q: "Continuous Support:",
           a: "Providing ongoing support and guidance even after graduation, assisting alumni with job search strategies, career advancement opportunities, and skill upgradation.",
         },
       ],
     },
     {
       label: "Resume Builder",
       qas: [
         {
           q: "Templates and Guidelines: ",
           a: "Offering a variety of resume templates and guidelines tailored to different industries and career stages, ensuring students create visually appealing and well-organized resumes.",
         },
         {
           q: "Highlighting Achievements:",
           a: "Assisting students in identifying and highlighting their key accomplishments, projects, internships, and extracurricular activities to demonstrate their qualifications and potential contributions to prospective employers.",
         },
       ],
     },
     {
       label: "Alumni Networking",
       qas: [
         {
           q: "Alumni Mentorship Program:",
           a: "Establishing a structured mentorship program where alumni provide guidance, career advice, and industry insights to current students, helping them navigate career choices and professional challenges.",
         },
         {
           q: "Alumni Job Referrals:",
           a: "Facilitating job referrals and recommendations from alumni working in various organizations, giving current students a competitive edge in their job search process.",
         },
       ],
     },
   ];

   return (
     <section className="py-14">
       <div className="max-w-screen-xl mx-auto px-4 md:px-8">
         <div className="max-w-lg">
           <h3 className="mt-3 text-gray-800 text-3xl font-extrabold sm:text-4xl">
             Services Provided by{" "}
             <p className="text-indigo-600 font-semibold whitespace-nowrap text-left">
               Career Sync
             </p>
           </h3>
           <div className="mt-3 text-gray-600 dark:text-gray-400">
             <p className="text-left">
               Can’t find the answer you’re looking for? feel free to ask -
               <Link
                 to="/"
                 className="text-indigo-600 font-semibold whitespace-nowrap"
               >
                 contact us
               </Link>
               .
             </p>
           </div>
         </div>
         <div className="mt-12 divide-y sm:mt-20">
           {faqsList.map((list, idx) => (
             <div key={idx} className="py-5 gap-x-12 first:pt-0 sm:flex">
               <div className="max-w-sm pt-8 pb-6 sm:pt-0 lg:flex-grow">
                 <h4 className="text-gray-800 font-semibold  text-3xl font-extrabold sm:text-2xl">
                   {list.label}
                 </h4>
               </div>
               <ul className="flex-1 space-y-6 sm:last:pb-6 sm:space-y-8">
                 {list.qas.map((item, idx) => (
                   <li key={idx}>
                     <summary className="text-left flex items-center justify-between font-semibold text-gray-800 ">
                       {item.q}
                     </summary>
                     <p
                       dangerouslySetInnerHTML={{ __html: item.a }}
                       className="mt-3 text-gray-700 leading-relaxed text-left"
                     ></p>
                   </li>
                 ))}
               </ul>
             </div>
           ))}
         </div>
       </div>
     </section>
   );
}
export default Service;




