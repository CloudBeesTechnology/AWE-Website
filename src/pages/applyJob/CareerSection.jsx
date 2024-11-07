import React from "react";
import { CommonBanner } from "../../Component/Organization/CommonBanner";
import bg from "../../assets/applyJob/applyJob-1.jpeg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { CareerData } from "./CareerData";

export const CareerSection = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <section>
      <CommonBanner background={bg} title="Apply Job" />
      <div className="flex flex-col center p-4 sm:p-10 space-y-6 md:space-y-0 md:space-x-10 max-sm:my-2 apply my-10">
        {/* Career Section */}
        <div className=" max-sm:my-2 mb-10">
          <h2 className="text-3xl max-sm:text-[20px] font-bold">CAREER</h2>
          <p className="mt-4 text-[]18px] max-sm:text-[14px] max-sm:text-justify">
            Fast movement, unlimited challenges and excitement to explore. This
            is a right track for you. Having been established since 1980, Adinin
            Works & Engineering Sdn. Bhd. is a leading EPC: Oil and Gas Sector
            in Brunei Darussalam. Now we are opening career opportunities in
            many challenging areas and eagerly await any qualified and energetic
            candidates who have strong intention to join and share experiences
            with us. We are offering competitive salary package with other
            welfare and fringe benefits, dramatic career path, overseas training
            and international professional working environment. Your submitted
            CVs/Applications would be kept confidential in our recruitment
            database.
          </p>
        </div>

        <div className="space-y-4 ">
          {/* Title and description section */}
          <div className="text-center mb-6">
            <h1 className="text-2xl  max-sm:text-[20px] font-bold mb-4">
              Available Job Listings
            </h1>
            <p className="text-[18px] max-sm:text-[14px] ">
              Explore the latest job opportunities and find your next career
              move!
            </p>
          </div>

          <div className="flex max-[742px]:justify-center justify-between items-center flex-wrap gap-7 p-2 gap-y-10">
 
            {CareerData.map((job, index) => (
              <div
                key={`${job.id}-${index}`}
                className="space-y-4 p-2 rounded-md shadow-md max-w-xs w-full border-2 border-[red]"
              >
                <div className="flex gap-5 items-center">
                  {/* <img
                    src={job.icon}
                    alt={job.title}
                    className=" max-w-[10px] w-full border text-[red]"


                  /> */}
                  <p className="font-bold text-lg">{job.title}</p>
                </div>
                <h4 className="font-semibold">Description</h4>
                <p className="text-[12px] font-medium h-[60px]">
                  {job.description}
                </p>
                <div className="flex-wrap flex justify-between items-center gap-2">
                  <p className="border py-1 px-2 text-[12px]">
                    {job.experience}
                  </p>
                  <p className="border py-1 px-4 text-[12px]">{job.lpa}</p>
                  <p className="border py-1 px-3 text-[12px]">{job.type}</p>
                </div>
                <div className="center py-2">
                  <Link
                    to="/addCandidates"
                    state={{ position: job.title }}
                    className="bg-[#FEF116] text-black center font-bold py-1 px-4 rounded"
                  >
                    APPLY JOB
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

