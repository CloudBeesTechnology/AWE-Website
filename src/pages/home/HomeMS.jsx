
import React from 'react';
import { services } from './HomeDataDetails';

export const HomeMS = () => {
  return (
    <div 
      className=" screen-size center flex-col mb-10 "
    >
              <h2 className="text-dark_red sm:mb-10 mb-5 text-[20px] text-center sm:text-[34px] font-semibold relative"><span className=' sm:absolute sm:w-[350px] sm:h-4 sm:top-11  sm:border-b-4 border-dark_red '></span>
              AWE’s Major Services Consist Of</h2>
     <div className='w-full flex justify-center items-center flex-wrap  gap-5'>
     {services.map((service, index) => (
        <div 
          key={index} 
          className="w-full sm:max-w-[250px] h-[220px] bg-cover homeMs-bg bg-center shadow-md rounded-lg p-6  flex-col center text-center "
        >
          <div className=" p-3 rounded-full mb-4">
            <img 
              src={service.icon} 
              alt={service.title} 
              className="w-14 h-14"
            />
          </div>
          <h3 className="text-[16px] font-medium">{service.title}</h3>
        </div>
      ))}
    </div></div>
  );
};

