import React from 'react';

export const BusinessHours = () => {
  return (
    <div className="screen-size flex flex-col items-center justify-center py-10">
      {/* Heading */}
      <h2 className="text-[30px] font-semibold mb-6">Business Hours:</h2>
      
      {/* Business Hours Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-4 max-w-4xl w-full bg-white rounded-lg shadow-md sm:p-6 p-2  border">
        {/* Head Office Hours */}
        <div className=" p-4  ">
          <h3 className="text-[26px] font-bold mb-2">Head Office:</h3>
          <p className='text-[20px]'>Monday – Friday</p>
          <p className='text-[20px]'>0730 hrs – 1200 hrs</p>
          <p className='text-[20px]'>1300 hrs – 1630 hrs</p>
          <br />
          <p className='text-[20px]'>Saturday</p>
          <p className='text-[20px]'>0730 hrs – 1200 hrs</p>
        </div>
<div className=' w-full h-full  center max-sm:hidden '><p className=' border w-0 text-grey h-full '></p></div>
        {/* Seria Workshop and Other Areas Hours */}
        <div className="p-4 ">
          <h3 className="text-[26px] font-bold mb-2">Seria Workshop and all other Construction areas</h3>
          <p className='text-[20px]'>Monday – Saturday</p>
          <p className='text-[20px]'>0700 hrs – 1200 hrs</p>
          <p className='text-[20px]'>1300 hrs – 1800 hrs</p>
        </div>
      </div>
    </div>
  );
};

 
