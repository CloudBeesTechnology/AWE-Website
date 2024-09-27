import React from 'react';
import { CommonBanner } from '../../Component/Organization/CommonBanner';
import bg from "../../assets/applyJob/applyJob-1.png";
import { Link } from 'react-router-dom';

export const CareerSection = () => {
  return (
    <section>
            <CommonBanner background={bg} />
    <div className="flex flex-col md:flex-row center md:items-start sm:justify-between p-6 space-y-6 md:space-y-0 md:space-x-10 my-10">
      {/* Career Section */}
      <div className="flex-1">
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
      <div className="flex-1 center max-sm:text-center flex-col ">
        <h3 className="font-bold text-lg mb-4">EMPLOYMENT APPLICATION FORM</h3>
        <ul className="space-y-4 p-2 sm:p-6 rounded-md shadow-md">
          <li className="font-semibold">JOB VACANCIES</li>
          <li>
            <Link to="/addCandidates" className="bg-[#E5EC87] text-black font-bold  px-4 rounded-full">
              APPLY ONLINE
            </Link>
          </li>
          <li className="font-semibold">TRACK APPLICATION PROGRESS</li>
        </ul>
      </div>
    </div>
    </section>
  );
};


