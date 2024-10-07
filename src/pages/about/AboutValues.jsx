import React from 'react'
import { CommonBanner } from '../../Component/Organization/CommonBanner';
import bg from "../../assets/about/aboutUS.jpg";
import image from "../../assets/about/OurGuidingPrinciples.png";
import { useEffect } from 'react';

export const AboutValues = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <section>
            <CommonBanner background={bg} title="Values" />
<div className="screen-size container mx-auto sm:py-20 max-sm:my-14">
      <div className="flex flex-col md:flex-row  custom-gradient rounded-lg shadow-lg">
        
        {/* Left Column (Our Values) */}
        <div className="w-full md:w-1/2  p-8 rounded-l-lg min-[768px]:border-r-2 border-[grey]">
          <h2 className="text-2xl font-bold mb-4">OUR VALUES</h2>
          <p className="font-semibold text-xl">We believe in :</p>
          <div className="mt-4 space-y-2">
            <p className='flex flex-col gap-2 pt-2'><strong>SAFETY</strong><span className='text-[17px]'>Protecting our employees, assets & environment</span></p>
            <p className='flex flex-col gap-2 pt-3 '><strong>QUALITY</strong> <span className='text-[17px]'>Meeting requirements</span> </p>
            <p className='flex flex-col gap-2 pt-3'><strong>COMMITMENTS</strong> <span className='text-[17px]'>Keeping Promises</span> </p>
            <p className='flex flex-col gap-2 pt-3'><strong>INTEGRITY</strong> <span className='text-[17px]'>Adhering to ethical standards</span></p>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">OUR GOALS</h2>
          <ul className="space-y-2">
            <li>Target Zero-Continuous Health, Safety & Environment Improvements.</li>
            <li>On-Time delivery and as bid performance.</li>
            <li>Zero ethics violations.</li>
          </ul>
        </div>

        {/* Right Column (Our Guiding Principles) */}
        <div className="w-full md:w-1/2  p-8 rounded-r-lg max-sm:pt-5">
          <div className="flex justify-center ">
            <img
              src={image} // Replace with the actual image path
              alt="Guiding Principles"
              className="rounded-lg  "
            />
          </div>
          <p className="font-semibold text-[18px] mb-5 ">To be the professional contractor of choice</p>
          <div className=" grid sm:grid-cols-2 gap-4">
            <div>Professionalism</div>
            <div>Competency</div>
            <div>Leading by Example</div>
            <div>Effective Communication</div>
            <div>Positive Attitude</div>
            <div>Motivation</div>
            <div>Promoting Diversity</div>
            <div>Promoting Team Work</div>
            <div>Developing Employees</div>
            <div>Enjoying our Work</div>
          </div>
        </div>
      </div>
    </div>
    </section>
      );
};

