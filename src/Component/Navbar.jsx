
import { Link, NavLink } from "react-router-dom";
import { useState , useEffect, useRef } from "react";
import logo from "../assets/logo/logo-with-name.svg";
import { RiMenuAddFill } from "react-icons/ri";
import { Sidebar } from "./Sidebar";
import { FaChevronDown } from "react-icons/fa";

export const Navbar = () => {
  const [showServicesList, setServicesList] = useState(false);
  const dropdownRef = useRef(null); // Define the ref for the dropdown
  const [showSidebar, setShowSidebar] = useState(false);
  
  const toggleServiceList = () => {
    setServicesList(!showServicesList);
  };

  const closeServiceList = () => {
    setServicesList(false);
  };
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeServiceList();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className="bg-white sticky top-0 shadow-md z-50">
      <div className="screen-size text-secondary flex justify-between items-center max-sm:gap-5 py-7 px-3">
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

          <div className="relative" ref={dropdownRef}>
      {/* About Us text with NavLink */}
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "border-b-4 border-dark_red font-bold" : ""
        }
      >
        About Us
      </NavLink>

      {/* Icon to toggle the service list */}
      <button onClick={toggleServiceList} className="ml-2 focus:outline-none">
        <FaChevronDown className="inline text-dark_red" />
      </button>

      {/* Dropdown service list, shown only when showServicesList is true */}
      {showServicesList && (
        <div className="absolute top-8 -left-10 bg-white flex flex-col text-[18px] p-4 gap-1 w-[170px] shadow-md rounded-md font-medium">
          <NavLink
            to="/ourMission"
            className="border-b border-grey p-1 text-dark_red text-[14px]"
            onClick={closeServiceList}
          >
            MISSION
          </NavLink>
          <NavLink
            to="/ourVision"
            className="border-b border-grey p-1 text-dark_red text-[14px]"
            onClick={closeServiceList}
          >
            VISION
          </NavLink>
          <NavLink
            to="/values" // Add the missing `to` prop for VALUES
            className="border-b border-grey p-1 text-dark_red text-[14px]"
            onClick={closeServiceList}
          >
            VALUES
          </NavLink>
          <NavLink
            to="/OurService"
            className="border-b border-grey p-1 text-dark_red text-[14px]"
            onClick={closeServiceList}
          >
            SERVICES
          </NavLink>
          <NavLink
            to="/ourWorkForce"
            className="border-b border-grey p-1 text-dark_red text-[14px]"
            onClick={closeServiceList}
          >
            WORKFORCE
          </NavLink>
          <NavLink
            to="/awards" // Add the missing `to` prop for AWARDS
            className="border-b border-grey p-1 text-dark_red text-[14px]"
            onClick={closeServiceList}
          >
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
            Contact Us
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
              className="text-[24px] font-bold block min-[1030px]:hidden  px-3"
              onClick={toggleSidebar}
            >
              <RiMenuAddFill />
            </div>
      </div>
      <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
    </section>
  );
};



// import { Link, NavLink } from "react-router-dom";
// import { useState } from "react";
// import logo from "../assets/logo/logo-with-name.svg";
// import { RiMenuAddFill } from "react-icons/ri";
// import { Sidebar } from "./Sidebar";

// export const Navbar = () => {
//   const [showServicesList, setServicesList] = useState(false);
//   const [showSidebar, setShowSidebar] = useState(false);

//   const serviceList = () => {
//     setServicesList(!showServicesList);
//   };
//   const toggleSidebar = () => {
//     setShowSidebar(!showSidebar);
//   };
  
//   return (
//     <section className="bg-white sticky top-0 shadow-md z-50">
//       <div className="screen-size text-secondary flex justify-between items-center gap-5 py-7 px-3">
//         <div>
//           <div>
//             <img
//               className="object-cover max-w-[250px] w-full h-full"
//               src={logo}
//               alt="CSS logo not found"
//             />
//           </div>
//         </div>
//         <div className=" flex justify-center items-center gap-10 max-[1260px]:hidden">
          
//           <NavLink
//             to="/"
//             className={({ isActive }) => (isActive ? "border-b-4 border-dark_red font-bold" : " ")}
//           >
//             Home
//           </NavLink>
//           <div className="relative">
//             <NavLink
//               to="/about"
//               className={({ isActive }) => (isActive ? "border-b-4 border-dark_red font-bold" : "")}
//               onClick={serviceList}
//             >
//              About Us
//             </NavLink>
//             {showServicesList && (
//               <div className="absolute top-8 -left-10 bg-white  flex flex-col text-[18px] p-4 gap-1 w-[170px] shadow-md rounded-md font-medium">
//                 <NavLink  to="ourMission" className=" border-b border-grey p-1 text-dark_red">
               
//                  MISSION
//                 </NavLink>
//                 <NavLink to="/ourVisiont" className=" border-b border-grey p-1 text-dark_red">
//                  VISION
//                 </NavLink>
//                 <NavLink  className=" border-b border-grey p-1 text-dark_red">
//                  VALUES
//                 </NavLink>
//                 <NavLink to="/OurService" className=" border-b border-grey p-1 text-dark_red">
//                  SERVICES
//                 </NavLink>
//                 <NavLink to="/ourWorkForce" className=" border-b border-grey p-1 text-dark_red">
//                  WORKFORCE
//                 </NavLink>
//                 <NavLink  className=" border-b border-grey p-1 text-dark_red">
//                  AWARDS
//                 </NavLink>
               
//               </div>
//             )}
//           </div>

//           <NavLink
//             to="/gallery"
//             className={({ isActive }) => (isActive ? "border-b-4 border-dark_red font-bold" : "")}
//           >
//            Gallery
//           </NavLink>
//           <NavLink
//             to="/organization"
//             className={({ isActive }) => (isActive ? "border-b-4 border-dark_red font-bold" : "")}
//           >
//             Organization
//           </NavLink>
//           <NavLink
//             to="/contact"
//             className={({ isActive }) => (isActive ? "border-b-4 border-dark_red font-bold" : "")}
//           >
//             Contact
//           </NavLink>

//           <NavLink to="/applyJob"             
//           className={({ isActive }) => (isActive ? "border-b-4 border-dark_red font-bold" : "")}>
//             Apply Job
//           </NavLink>

//           <div className="center   ">
//           <Link to="https://main.d3u6ge0j06uiob.amplifyapp.com/" className="btn font-medium" 
//           target="_blank" rel="noopener noreferrer">
//            Employee Login
//           </Link>
//          </div>
//         </div>
//         <div
//               className="text-[24px] font-bold block min-[1030px]:hidden  px-3"
//               onClick={toggleSidebar}
//             >
//               <RiMenuAddFill />
//             </div>
//       </div>
//       <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
//     </section>
//   );
// };