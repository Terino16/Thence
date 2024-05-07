import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/Logo.svg"

const Navbar = () => {
  const location = useLocation();
 
  return (
    <div className="flex items-center justify-between py-4 px-5 border  rounded-full ">
      <div >
       <img src={Logo}/>
      </div>

      <div className="flex items-center space-x-2">
      <Link
          to="/projects"
          className={`px-7 py-6  border rounded-full font-Manrope text-[15px] font-medium ${
            location.pathname === "/projects" ? "bg-black text-white" : "text-black bg-white"
          }`}
        >
          Get Projects
        </Link>

        <Link
          to="/"
          className={`px-7 py-6  border rounded-full font-Manrope text-[15px] font-medium ${
            location.pathname === "/" ? "bg-black text-white" : "text-black bg-white "
          }`}
        >
          OnBoard Talent
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
