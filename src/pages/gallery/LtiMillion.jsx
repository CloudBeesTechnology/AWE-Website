import React from 'react';
import slide1 from "../../assets/achievements/certificate1.png"; 

export const LtiMillion = ({ images = [], onClick }) => {
  // Use the first image from the images array or fallback to slide1
  const imageSrc = images.length > 0 ? images[0] : slide1;

  return (
    <section className="p-2 center flex-col" onClick={onClick} style={{ cursor: 'pointer' }}>
      <h2 className='text-[18px] mb-4'></h2>
      <div className='bg-white shadow-lg  rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300'>
        <div className='rounded-md  flex flex-col h-full'>
        {imageSrc && (
          <img
            src={imageSrc}
            alt="LTI Achievement"
            className="cursor-pointer rounded shadow-lg object-cover  w-full h-[275px]"
          />
        )}
           <div className='text-light_yellow font-bold text-center p-6 bg-dark_gray'>
            <p>25 MILLION HOURS WITHOUT LTI</p>
          </div>
    
        </div>
      </div>
    </section>
  );
};

 
