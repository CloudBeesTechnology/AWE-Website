import React from 'react'
import { CommonBanner } from '../../Component/Organization/CommonBanner';
import bg from "../../assets/about/44_main01.jpg";
import image from "../../assets/about/valuesImg.png";

export const AboutValues = () => {
  return (
    <section>
            <CommonBanner background={bg} title="Values" />
<div className="screen-size container mx-auto sm:py-20 max-sm:my-14">
      <div className="flex flex-col md:flex-row  custom-gradient rounded-lg shadow-lg">
        
        {/* Left Column (Our Values) */}
        <div className="w-full md:w-1/2  p-8 rounded-l-lg min-[768px]:border-r-2 border-[grey]">
          <h2 className="text-2xl font-bold mb-4">OUR VALUES</h2>
          <p className="font-semibold">We believe in:</p>
          <ul className="mt-4 space-y-2">
            <li><strong>SAFETY</strong> <br />Protecting our employees, assets & environment</li>
            <li><strong>QUALITY</strong> <br />Meeting requirements</li>
            <li><strong>COMMITMENTS</strong> <br />Keeping Promises</li>
            <li><strong>INTEGRITY</strong> <br />Adhering to ethical standards</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">OUR GOALS</h2>
          <ul className="space-y-2">
            <li>Target Zero-Continuous Health, Safety & Environment Improvements.</li>
            <li>On-Time delivery and as bid performance.</li>
            <li>Zero ethics violations.</li>
          </ul>
        </div>

        {/* Right Column (Our Guiding Principles) */}
        <div className="w-full md:w-1/2  p-8 rounded-r-lg max-sm:pt-5">
          <div className="flex justify-center">
            <img
              src={image} // Replace with the actual image path
              alt="Guiding Principles"
              className="rounded-lg  mb-7"
            />
          </div>
          <p className="font-semibold  mb-4 ">TO be the professional contractor of choice</p>
          <ul className="space-y-2 grid sm:grid-cols-2 ">
            <li>Professionalism</li>
            <li>Competency</li>
            <li>Leading by Example</li>
            <li>Effective Communication</li>
            <li>Positive Attitude</li>
            <li>Motivation</li>
            <li>Promoting Diversity</li>
            <li>Promoting Team Work</li>
            <li>Developing Employees</li>
            <li>Enjoying our Work</li>
          </ul>
        </div>
      </div>
    </div>
    </section>
      );
};

