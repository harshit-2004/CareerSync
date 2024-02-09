import { Link,Outlet,useNavigate} from "react-router-dom";
import { Navigate } from "react-router-dom";
import Linemake from "./Linemake";
const Service = () => {
    const navigate = useNavigate();
  return (
    <div>
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
      

      <h1>Service Provided by Our Team -- Career Sync</h1>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Service;
