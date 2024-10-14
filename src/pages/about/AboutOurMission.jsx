import React from 'react';
import bg from "../../assets/about/aboutUS.jpg";
// import image from "../../assets/about/image9.png";
import { CommonBanner } from '../../Component/Organization/CommonBanner';
import { useEffect } from 'react';

export const AboutOurMission = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <section>
      <CommonBanner background={bg} title="Our Mission & Vision" />
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
          {/* <div className="mt-10 lg:w-full">
          <img 
            src={image}
            alt="Mission Image" 
            className="rounded-lg shadow-lg object-cover w-full h-48 lg:h-64"
          />
        </div> */}
        </div>

        <div className="mb-8 mt-16">
          <h2 className="text-[28px] font-semibold bg-[#FEF116] text-center w-[220px] p-3">
            Our Vision...
          </h2>
        </div>

        {/* Content Section */}
        <div className="lg:flex lg:justify-between lg:gap-12">
          {/* Text Content */}
          <div className="lg:w-2/3">
            <h3 className="sm:text-[30px] text-[24px] font-medium mb-4 max-sm:text-center">
              To be the professional contractor of choice
            </h3>

            <ul className="space-y-8 ">
              <li>
                <div className="flex items-start gap-2">
                  <span className="text-dark_red ">⦿</span>
                  <div>
                    <p className="font-medium text-[20px] mb-2">TO OUR CUSTOMERS</p>
                    <p className='ml-8'>We deliver consistent services and excellent solutions.</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-2">
                  <span className="text-dark_red">⦿</span>
                  <div>
                    <p className="font-medium text-[20px] mb-2">TO OUR EMPLOYEES</p>
                    <p className='ml-8'>We are an environment where employees feel secure to release their aspirations.</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-2">
                  <span className="text-dark_red">⦿</span>
                  <div>
                    <p className="font-medium text-[20px] mb-2">TO OUR INVESTORS</p>
                    <p className='ml-8'>We achieve attractive shareholder returns.</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-2">
                  <span className="text-dark_red">⦿</span>
                  <div>
                    <p className="font-medium text-[20px] mb-2">TO OUR FINANCIERS</p>
                    <p className='ml-8'>We are a growing, well-managed, and diversified business entity.</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-2">
                  <span className="text-dark_red">⦿</span>
                  <div>
                    <p className="font-medium text-[20px] mb-2">TO OUR SUPPLIERS</p>
                    <p className='ml-8'>We honor our commitment and we are a vehicle for their long-term growth.</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-2">
                  <span className="text-dark_red">⦿</span>
                  <div>
                    <p className="font-medium text-[20px] mb-2">TO OUR BUSINESS PARTNERS</p>
                    <p className='text-[16px] ml-8'>We are trustworthy to our partners to achieve their business goals.</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};


