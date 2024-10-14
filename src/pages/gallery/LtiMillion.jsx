import React from 'react';
import slide1 from "../../assets/achievements/certificate1.png"; 

export const LtiMillion = ({ images = [], onClick }) => {
  // Use the first image from the images array or fallback to slide1
  const imageSrc = images.length > 0 ? images[0] : slide1;

  return (
    <section className="p-2 center flex-col" onClick={onClick} style={{ cursor: 'pointer' }}>
      <h2 className='text-[18px] mb-4'>25 MILLION HOURS WITHOUT LTI</h2>
      <div className='border rounded-md border-[#f7c8c8] max-w-lg w-full max-h-[275px] h-full overflow-hidden'>
        <div className='p-2 rounded-md border-t-4 border-[#F93131] flex justify-center items-center h-full'>
          <img
            src={imageSrc}
            alt="LTI Achievement"
            className="cursor-pointer rounded shadow-lg object-cover min-w-[120px] w-full h-[275px] pb-4"
          />
        </div>
      </div>
    </section>
  );
};


