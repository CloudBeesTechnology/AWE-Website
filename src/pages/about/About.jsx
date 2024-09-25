import React from 'react';
import bg from "../../assets/about/44_main01.jpg";
import image from "../../assets/about/AboutImg.png";
import { CommonBanner } from '../../Component/Organization/CommonBanner';
import { TeamImage } from '../../Component/Organization/TeamImage';

export const About = () => {
  return (
    <>
    <section>
      <CommonBanner background={bg} title="About" />

      <section className="screen-size mx-auto my-10">
      <div className="bg-white py-10  lg:px-10">
      {/* Title */}
      <div className="mb-8">
        <h2 className="text-center text-[28px] font-semibold bg-[#FEF116] w-[250px] p-3">
          Who We are...
        </h2>
      </div>
      
      {/* Content Section */}
      <div className="lg:flex lg:justify-between lg:gap-20">
        {/* Text Content */}
        <div className="lg:w-2/3">
          <p className=" mb-4">
            ADININ WORKS & ENGINEERING SDN BHD (AWE) was established in 1980 and is a member of the Adinin Group of Companies (AGC).
          </p>
          <p className=" mb-4">
            It grew from a modest machining business to being one of the country's most professional and successful mechanical contractors having the capacity to carry out major projects such as fabrication of offshore structures, maintenance of plants and EPC Contracts.
          </p>
          <p className=" mb-4">
            In this period, AWE is proud to have successfully provided support and services to Brunei Shell Petroleum Company, Sdn. Bhd. (BSP), Brunei Liquefied Natural Gas Company (BLNG), Brunei Methanol company (BMC), Brunei Government, and Total E&P Borneo.
          </p>
          <p className=" mb-4">
            AWE has the distinction of being the first local company to have successfully performed an EPC project for the Industrial Gas Terminal and fabricated a CONTAINERIZED room, offshore Platforms, and living quarters for BSP in Brunei Darussalam.
          </p>
          <p className=" mb-4">
            Also being the planning, logistical and manpower partner for the world’s first change-out of the four Main Cryogenic Heat Exchangers (MCHE) for BLNG.
          </p>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/3 center flex-col gap-4 mt-8 lg:mt-0">
          {/* First Image */}
          <div className="relative">
            <img 
              src={image} 
              alt="Offshore Fabrication" 
              className="object-cover w-full"
            />
          </div>
        </div>
      </div>
    </div>
      </section>
    </section>
  
    </>
  
  );
};


