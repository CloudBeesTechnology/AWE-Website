import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo/logo-with-name.svg";
import { RiMenuAddFill } from "react-icons/ri";
import { Sidebar } from "./Sidebar";

export const Navbar = () => {
  const [showServicesList, setServicesList] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const serviceList = () => {
    setServicesList(!showServicesList);
  };
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  
  return (
    <section className="bg-white sticky top-0 shadow-md z-50">
      <div className="screen-size text-secondary flex justify-between items-center py-7 px-3">
        <div>
          <div>
            <img
              className="object-cover max-w-[250px] w-full h-full"
              src={logo}
              alt="CSS logo not found"
            />
          </div>
        </div>
        <div className=" flex justify-center items-center gap-10 max-[1260px]:hidden">
          
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "border-b-4 border-dark_red font-bold" : " ")}
          >
            Home
          </NavLink>
          <div className="relative">
            <NavLink
              // to="/services"
              // className={({ isActive }) => (isActive ? "border-b-4 border-dark_red font-bold" : "")}
              onClick={serviceList}
            >
             About Us
            </NavLink>
            {showServicesList && (
              <div className="absolute top-8 -left-10 bg-white  flex flex-col text-[18px] p-4 gap-1 w-[170px] shadow-md rounded-md font-medium">
                <NavLink   className=" border-b border-grey p-1 text-dark_red">
               
                 MISSION
                </NavLink>
                <NavLink className=" border-b border-grey p-1 text-dark_red">
                 VISION
                </NavLink>
                <NavLink  className=" border-b border-grey p-1 text-dark_red">
                 VALUES
                </NavLink>
                <NavLink  className=" border-b border-grey p-1 text-dark_red">
                 SERVICES
                </NavLink>
                <NavLink to="/ourWorkForce" className=" border-b border-grey p-1 text-dark_red">
                 WORKFORCE
                </NavLink>
                <NavLink  className=" border-b border-grey p-1 text-dark_red">
                 AWARDS
                </NavLink>
               
              </div>
            )}
          </div>

          <NavLink
            to="/gallery"
            className={({ isActive }) => (isActive ? "border-b-4 border-dark_red font-bold" : "")}
          >
           Gallery
          </NavLink>
          <NavLink
            to="/organization"
            className={({ isActive }) => (isActive ? "border-b-4 border-dark_red font-bold" : "")}
          >
            Organization
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "border-b-4 border-dark_red font-bold" : "")}
          >
            Contact
          </NavLink>

          <NavLink to="/applyJob"             
          className={({ isActive }) => (isActive ? "border-b-4 border-dark_red font-bold" : "")}>
            Apply Job
          </NavLink>

          <div className="center   ">
          <Link to="https://main.d3u6ge0j06uiob.amplifyapp.com/" className="btn font-medium" 
          target="_blank" rel="noopener noreferrer">
           Employee Login
          </Link>
         </div>
        </div>
        <div
              className="text-[24px] font-bold block min-[1030px]:hidden"
              onClick={toggleSidebar}
            >
              <RiMenuAddFill />
            </div>
      </div>
      <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
    </section>
  );
};
