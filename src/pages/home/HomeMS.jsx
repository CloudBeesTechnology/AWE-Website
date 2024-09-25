
import React from 'react';
import { services } from './HomeDataDetails';

export const HomeMS = () => {
  return (
    <div 
      className=" screen-size center flex-col mb-10"
    >
        <h2 className='sm:my-10 text-[22px] text-center sm:text-[38px] font-semibold
        '>AWE’s major services consist of:</h2>
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

