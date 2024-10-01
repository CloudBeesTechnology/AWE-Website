import React from 'react';
import { CommonBanner } from '../../Component/Organization/CommonBanner';
import bg from "../../assets/applyJob/applyJob-1.png";
import icon from "../../assets/applyJob/icon.png";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export const CareerSection = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <section>
            <CommonBanner background={bg} />
    <div className="flex flex-col  center md:items-start sm:justify-evenly  p-4 sm:p-10 space-y-6 md:space-y-0 md:space-x-10 my-10">
      {/* Career Section */}
      <div className=" mb-10">
        <h2 className="text-3xl font-bold">CAREER</h2>
        <p className="mt-4 text-lg max-sm:text-justify">
          It sounds like you're looking for information on career requirements.
          Could you specify which career or industry you're interested in?
          Different careers have varying requirements, such as specific
          educational backgrounds, skills, certifications, or experience. Let me
          know more details, and I can provide tailored information!
        </p>
      </div>

      {/* Employment Application Form */}

      <div className="flex-1 center  flex-col ">
        <h3 className="font-bold text-lg mb-4"><span></span>JOB VACANCIES</h3>
        <div className="space-y-4 p-2 sm:p-6 rounded-md shadow-md sm:w-[300px]">
<div className='flex justify-evenly items-center'>

            <img 
              src={icon} 
              alt="Welder" 
              className="object-cover w-20"
            />
<p className="font-bold text-lg mb-4">Welding </p>

  </div>          
  <h4 className="font-semibold">Description</h4>
          <p className=" text-[12px] font-medium ">Communicating effectively with clients, stakeholders, and project managers, both verbally and in writing.</p>
<div className=' flex-wrap flex justify-between items-center gap-2'><p className='border py-1 px-2 text-[12px]'>Experience 0-1</p> <p className='border py-1 px-4 text-[12px]'>LPA</p> <p className='border py-1 px-3 text-[12px]'>Full Time</p></div>
          <p>
            <div className='center mt-5'>
            <Link to="/addCandidates" className="bg-[#FEF116] text-black center font-bold py-1 px-4 rounded">
             APPLY JOB
            </Link>
            </div>
          </p>
        </div>
      </div>
    </div>
    </section>
  );
};


