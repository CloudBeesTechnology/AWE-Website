import React from 'react';
import { services } from './HomeDataDetails';

export const HomeMS = () => {
  return (
    <div className="text-center screen-size center flex-col mb-10 sm:mt-20 md:px-24">
    
     <h2 className="mb-12 text-black sm:my-10 mb-5 text-[20px] text-center sm:text-[34px] font-semibold relative">
        <span className='w-full sm:absolute sm:w-[200px] sm:h-4 sm:top-11 sm:border-b-4 border-dark_red'></span>
        Our Services
      </h2>
      <div>


        <div className="px-4 sm:px-0 flex  flex-wrap items-center gap-5 w-full  px-24">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-light_yellow w-full sm:max-w-[224px] h-[220px] rounded-lg flex-col center text-center "
            >
              <div className="rounded-md overflow-hidden  w-full">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="object-cover sm:max-w-[224px] w-full h-[205px]"
                />
              </div>
              <div className="mt-4 w-full h-[108px] bg-light_yellow rounded-lg p-2">
                <h3 className="text-[16px] font-medium">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
