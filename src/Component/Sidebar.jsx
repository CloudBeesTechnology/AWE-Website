import { Link, NavLink, useLocation } from "react-router-dom";
import { RiCloseFill } from "react-icons/ri"; // Corrected the import to the proper close icon
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export const Sidebar = ({ showSidebar, toggleSidebar }) => {
  const recruitmentPaths = [
    "/applyJob",
    "/addCandidates",
    "/addCandidates/personalDetails",
    "/addCandidates/educationDetails",
    "/addCandidates/otherDetails",
  ];
  
  const aboutPaths = [
    "/ourWorkForce",
    "/about",
    "/values",
    "/ourVision",
    "/ourMission",
    "/OurService",
  ];

  const [showServicesList, setServicesList] = useState(false);

  const toggleServiceList = () => {
    setServicesList(!showServicesList);
  };

  const closeServiceList = () => {
    setServicesList(false);
  };
  // Check if the current path is part of recruitmentPaths
  const isRecruitmentActive = () => {
    return recruitmentPaths.some(path => location.pathname.startsWith(path));
  };

  // Check if the current path is part of aboutPaths
  const isAboutActive = () => {
    return aboutPaths.some(path => location.pathname.startsWith(path));
  };
  return (
    <>
      <div
        className={`fixed top-0 bg-white bg-gradient-1 h-screen z-50 p-5 block min-[1030px]:hidden ${
          showSidebar
            ? "right-0 transition-all duration-700 ease-out"
            : "-right-64 transition-all duration-700 ease-out"
        }`}
      >
        <div className="pb-7 px-2 mt-5 flex justify-between items-center">
          <button
            onClick={toggleSidebar}
            className="text-secondary text-[22px] focus:outline-none"
          >
            <RiCloseFill />
          </button>
        </div>
        <nav className="flex flex-col p-5 gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? " text-dark_red font-bold " : ""
            }
            onClick={toggleSidebar}
            >
            Home
          </NavLink>
          <div className="relative">
      {/* About Us text with NavLink */}
      <NavLink
        to="/about"
        className={isAboutActive() ? "text-dark_red font-bold" : ""}
         onClick={toggleSidebar}
      >
        About Us
      </NavLink>
      {/* Icon to toggle the service list */}
      <button onClick={toggleServiceList} className="ml-2 focus:outline-none">
        <FaChevronDown className="inline text-dark_red" />
      </button>

      {/* Dropdown service list, shown only when showServicesList is true */}
      {showServicesList && (
        <div className=" top-8 -left-4 bg-white flex flex-col text-[18px] p-4 gap-1 w-[170px] shadow-md rounded-md font-medium">
        <NavLink to="/ourMission" className="border-b border-grey p-1 text-dark_red text-[14px]" onClick={() => {
  closeServiceList();
  toggleSidebar();
}} >MISSION</NavLink>
                <NavLink to="/ourVision" className="border-b border-grey p-1 text-dark_red text-[14px]" onClick={() => {
  closeServiceList();
  toggleSidebar();
}} >VISION</NavLink>
                <NavLink to="/values" className="border-b border-grey p-1 text-dark_red text-[14px]" onClick={() => {
  closeServiceList();
  toggleSidebar();
}} >VALUES</NavLink>
                <NavLink to="/OurService" className="border-b border-grey p-1 text-dark_red text-[14px]" onClick={() => {
  closeServiceList();
  toggleSidebar();
}} >SERVICES</NavLink>
                <NavLink to="/ourWorkForce" className="border-b border-grey p-1 text-dark_red text-[14px]" onClick={() => {
  closeServiceList();
  toggleSidebar();
}} >WORKFORCE</NavLink>
                <NavLink to="/awards" className="border-b border-grey p-1 text-dark_red text-[14px]" onClick={() => {
  closeServiceList();
  toggleSidebar();
}} >AWARDS</NavLink>
              </div>
      )}
    </div>

          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive ? " text-dark_red font-bold" : ""
            }          
            onClick={toggleSidebar}
          >
            Gallery
          </NavLink>
          <NavLink
            to="/organization"
            className={({ isActive }) =>
              isActive ? " text-dark_red font-bold" : ""
            }
            onClick={toggleSidebar}
          >
            Organization
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? " text-dark_red font-bold" : ""
            }
            onClick={toggleSidebar}
          >
            Contact
          </NavLink>
          <NavLink
            to="/applyJob"
            className={isRecruitmentActive() ? "text-dark_red font-bold" : ""}
            onClick={toggleSidebar}
          >
            Apply Job
          </NavLink>

          <div className="center">
            <Link
              to="https://main.d3u6ge0j06uiob.amplifyapp.com/"
              className="text-[16px] bg-yellow rounded-full px-2 py-2 "
              target="_blank"
              rel="noopener noreferrer"
            >
              Employee Login
            </Link>
          </div>
        </nav>
      </div>

      {showSidebar && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

{/* <NavLink
to="/"
className={({ isActive }) =>
  isActive ? "text-primary" : "text-secondary"
}
onClick={toggleSidebar}
>
Home
</NavLink>
<div className="">
<NavLink
  to="/services"
  className={({ isActive }) => (isActive ? "text-primary" : "")}
  onClick={serviceList}
>
  Services
</NavLink>
{showServicesList && (
  <div className="  flex flex-col text-[14px] p-3 gap-2 rounded-md bg-[#FFD883] ">
    <NavLink
      to="/services/houseKeeper"
      onClick={() => {
        serviceList();
        toggleSidebar();
      }}
    >
      House Keeper
    </NavLink>
    <NavLink to="/services/electrician" onClick={() => {
        serviceList();
        toggleSidebar();
      }}>
      Electrician
    </NavLink>
    <NavLink to="/services/chef" onClick={() => {
        serviceList();
        toggleSidebar();
      }}>
      Chef
    </NavLink>
    <NavLink to="/services/plumber" onClick={() => {
        serviceList();
        toggleSidebar();
      }}>
      Plumber
    </NavLink>
    <NavLink to="/services/barber" onClick={() => {
        serviceList();
        toggleSidebar();
      }}>
      Barber
    </NavLink>
    <NavLink to="/services/security" onClick={() => {
        serviceList();
        toggleSidebar();
      }}>
      Security
    </NavLink>
    <NavLink to="/services" onClick={() => {
        serviceList();
        toggleSidebar();
      }}>
      Mechanic
    </NavLink>
    <NavLink to="/services/elderCare" onClick={() => {
        serviceList();
        toggleSidebar();
      }}>
      Elder Care
    </NavLink>
    <NavLink to="/services/childCare" onClick={() => {
        serviceList();
        toggleSidebar();
      }}>
      Child Care
    </NavLink>
  </div>
)}
{/* </div> */}
{/* <NavLink
to="/about"
className={({ isActive }) =>
  isActive ? "text-primary" : "text-secondary"
}
onClick={toggleSidebar}
>
About
</NavLink>
<NavLink
to="/becomeStaff"
className={({ isActive }) =>
  isActive ? "text-primary" : "text-secondary"
}
onClick={toggleSidebar}
>
Endroll my Services
</NavLink>
<NavLink
to="/contact"
className={({ isActive }) =>
  isActive ? "text-primary" : "text-secondary"
}
onClick={toggleSidebar}
>
Contact
</NavLink>
<Link to="/login" className="btn mt-4" onClick={toggleSidebar}>
Login
</Link>  */}
