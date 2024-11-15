import React, { useEffect } from 'react';
import bg from "../../assets/about/aboutUS.jpg";
import { CommonBanner } from '../../Component/Organization/CommonBanner';

export const AboutOurMission = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <section className=' overflow-x-hidden  '>
      <CommonBanner background={bg} title="Our Mission & Vision" />
      <div className="relative h-screen w-full bg-road-map bg-cover bg-center">
        {/* Mission Section */}
        <div className="absolute top-[130px] left-12 lg:left-72">
          <h2 className="relative bottom-24 text-lg lg:text-2xl bg-[#fef116] w-[180px] font-semibold mb-0 lg:mb-2">
            Our Mission...
          </h2>
          <div className='relative right-16 flex flex-row gap-12'>
            <div className='flex items-center border w-[300px] h-[140px] py-4 px-6 rounded-full'>
              <div className='flex  justify-center'>
                <p className='text-white p-2 rounded-full h-7 w-14 bg-customBlue flex items-center justify-center'>
                  1
                </p>
                <p className="sm:text-xs lg:text-sm text-[#2a4255] leading-relaxed ml-2">
                  To proactively engage our customers to seek better ways to serve their business needs.
                </p>
              </div>
            </div>
            <div className='flex items-center border w-[300px] h-[140px] py-4 px-6 rounded-full'>
              <div className='flex  justify-center'>
                <p className='text-black p-2 rounded-full h-7 w-14 bg-yellow flex items-center justify-center'>
                  2
                </p>
                <p className="sm:text-xs lg:text-sm text-[#2a4255] leading-relaxed ml-2">
                  To create an environment for employees to realize their full potential.
                </p>
              </div>
            </div>
            <div className='flex items-center border w-[300px] h-[140px] py-4 px-6 rounded-full'>
              <div className='flex i justify-center'>
                <p className='text-white p-2 rounded-full h-7 w-14 bg-dark_red flex items-center justify-center'>
                  3
                </p>
                <p className="sm:text-xs lg:text-sm text-[#2a4255] leading-relaxed ml-2">
                  To build long term relationships with business partners, suppliers, and financiers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="relative top-[410px] left-12 lg:left-72">
          <h2 className="text-lg lg:text-2xl font-semibold bg-[#fef116] w-[180px] mb-0 lg:mb-2">
            Our Vision...
          </h2>
          <div className='relative right-16 flex flex-row gap-12'>
            <div className='flex items-center border w-[300px] h-[140px] py-4 px-6 rounded-full'>
              <div className=''>
                <h2 className='text-center  font-bold p-2'>TO OUR CUSTOMERS</h2>
                <div className='flex justify-center'>
                  <p className='text-black p-2 rounded-full h-7 w-10 bg-light_yellow flex items-center justify-center'>
                    1
                  </p>
                  <p className="sm:text-xs lg:text-sm text-[#2a4255] leading-relaxed ml-2">
                    We deliver consistent services and excellent solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className='flex items-center border w-[300px] h-[140px] py-4 px-6 rounded-full'>
              <div className=''>
                <h2 className='text-center p-2 font-bold'>TO OUR EMPLOYEES</h2>
                <div className='flex justify-center'>
                  <p className='text-white p-2 rounded-full h-7 w-10 bg-dark_red flex items-center justify-center'>
                    2
                  </p>
                  <p className="sm:text-xs lg:text-sm text-[#2a4255] leading-relaxed ml-2">
                    We are an environment where employees feel secure to release their aspirations.
                  </p>
                </div>
              </div>
            </div>
            <div className='flex items-center border w-[300px] h-[140px] py-4 px-6 rounded-full'>
              <div className=''>
                <h2 className='text-center p-2 font-bold'>TO OUR INVESTORS</h2>
                <div className='flex justify-center'>
                  <p className='text-white p-2 rounded-full h-7 w-10 bg-customBlue flex items-center justify-center'>
                    3
                  </p>
                  <p className="sm:text-xs lg:text-sm text-[#2a4255] leading-relaxed ml-2">
                    We achieve attractive shareholder returns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative top-[520px] left-12 lg:left-72">
          <div className='relative right-16 flex flex-row gap-12'>
            <div className='flex items-center border w-[300px] h-[140px] py-4 px-6 rounded-full'>
              <div className=''>
                <h2 className='text-center p-2 font-bold'>TO OUR FINANCIERS</h2>
                <div className='flex justify-center'>
                  <p className='text-black p-2 rounded-full h-7 w-10 bg-yellow flex items-center justify-center'>
                    4
                  </p>
                  <p className="sm:text-xs lg:text-sm text-[#2a4255] leading-relaxed ml-2">
                    We are a growing, well-managed, and diversified business entity.
                  </p>
                </div>
              </div>
            </div>
            <div className='flex items-center border w-[300px] h-[140px] py-4 px-6 rounded-full'>
              <div className=''>
                <h2 className='text-center p-2 font-bold'>TO OUR SUPPLIERS</h2>
                <div className='flex justify-center'>
                  <p className='text-white p-2 rounded-full h-7 w-10 bg-customBlue flex items-center justify-center'>
                    5
                  </p>
                  <p className="sm:text-xs lg:text-sm text-[#2a4255] leading-relaxed ml-2">
                    We honor our commitment and we are a vehicle for their long-term growth.
                  </p>
                </div>
              </div>
            </div>
            <div className='flex items-center border w-[300px] h-[140px] py-4 px-6 rounded-full'>
              <div className=''>
                <h2 className='text-center p-2 font-bold'>TO OUR BUSINESS PARTNERS</h2>
                <div className='flex justify-center'>
                  <p className='text-white p-2 rounded-full h-7 w-10 bg-dark_red flex items-center justify-center'>
                    6
                  </p>
                  <p className="sm:text-xs lg:text-sm text-[#2a4255] leading-relaxed ml-2">
                    We are trustworthy to our partners to achieve their business goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
