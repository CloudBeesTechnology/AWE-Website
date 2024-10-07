
import React from 'react';
import { Link } from 'react-router-dom';

export const HomeNR = () => {
  return (
    <section className="screen-size relative  bg-bottom " >
      {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}

      <div className="relative z-10 flex flex-col lg:flex-row border gap-5 justify-between items-start lg:items-center p-8 lg:p-16">
        {/* Left Section - Main Heading */}
        <div className="text-white max-w-lg ">
          <h2 className="text-[20px] md:text-[24px] font-bold">Preserve and conserve</h2>
          <h1 className="text-[24px] md:text-[36px] font-extrabold mt-4">A Vital Energy Resource For A Better Tomorrow</h1>
          <p className="mt-4 text-[12px] sm:text-[14px]">Energy is the capacity to do work and is required for life processes. An energy resource is something that can produce heat, move objects, or produce electricity.</p>
          
          <button className=" mt-4 sm:mt-8 bg-yellow text-black max-sm:text-[14px] font-semibold py-2 px-6 rounded-lg ">
            DISCOVER MORE
          </button>
        </div>

        {/* Right Section - Aspiration, Vision, Mission */}
        <div className="text-white lg:mt-0 space-y-4 lg:space-y-14 ">
          <div className="flex items-start">
            <div className=" rounded-full px-2 py-1 center text-[16px] bg-white text-dark_red">➤</div>
            <div className="ml-4">
              <h3 className="text-[20px] sm:text-[24px] font-semibold ">Aspiration</h3>
              <p className=" text-[14px] sm:text-[16px] mt-2 sm:mt-4">We deliver consistent services and excellent solutions to our customers.</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className=" rounded-full px-2 py-1 center text-[16px] bg-white text-dark_red">➤</div>
            <div className="ml-4">
              <h3 className="text-xl sm:text-[24px] font-semibold">Vision</h3>
              <p className="text-[14px] sm:text-[16px] mt-2 sm:mt-4">Metus montes cras massa venenatis id dignissim suspendisse purus nibh. Mollis sapien facilisis luctus.
                <span className=' text-[14px] text-yellow border-b'> <Link to="/ourVision" >Read More</Link></span></p>
            </div>
          </div>

          <div className="flex items-start">
            <div className=" rounded-full px-2 py-1 center text-[16px] bg-white text-dark_red">➤</div>
            <div className="ml-4">
              <h3 className="text-xl sm:text-[24px] font-semibold">Mission</h3>
              <p className="text-[14px] sm:text-[16px] mt-2 sm:mt-4">Metus montes cras massa venenatis id dignissim suspendisse purus nibh. Mollis sapien facilisis luctus.
              <span className=' text-[14px] text-yellow border-b'> <Link to="/ourMission" >Read More</Link></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


