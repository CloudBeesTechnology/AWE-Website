import React from 'react';
import bg from "../../assets/about/44_main01.jpg";
import image from "../../assets/about/image9.png";
import { CommonBanner } from '../../Component/Organization/CommonBanner';

export const AboutOurMission = () => {
  return (
    <section>
            <CommonBanner background={bg} title="Our Mission" />
    <div className="screen-size bg-white pt-16 pb-12 px-2 lg:px-10">
      {/* Title */}
      <div className="mb-8">
        <h2 className="text-[28px] font-semibold bg-[#FEF116] text-center w-[220px] p-3">
          Our Mission...
        </h2>
      </div>
      
      {/* Content Section */}
      <div className="lg:flex lg:flex-col lg:items-start">
        {/* Text Content */}
        <div className="lg:w-full">
          <ul className="space-y-8 ">
            <li>
              <div className="flex items-start gap-2">
                <span className="text-dark_red ">⦿</span>
                <div>
                  <p>To proactively engage our customers to seek better ways to serve their business needs.</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-start gap-2">
                <span className="text-dark_red ">⦿</span>
                <div>
                  <p>To create an environment for employees to realize their full potential.</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-start gap-2">
                <span className="text-dark_red ">⦿</span>
                <div>
                  <p>To build long term relationships with business partners, suppliers, and financiers.</p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="mt-10 lg:w-full">
          <img 
            src={image}
            alt="Mission Image" 
            className="rounded-lg shadow-lg object-cover w-full h-48 lg:h-64"
          />
        </div>
      </div>
    </div></section>
  );
};


