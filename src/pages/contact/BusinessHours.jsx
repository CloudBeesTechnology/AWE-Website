import React from 'react';

export const BusinessHours = () => {
  return (
    <div className="screen-size flex flex-col items-center justify-center py-10">
      {/* Heading */}
      <h2 className="text-[30px] font-semibold mb-6">Business Hours</h2>
      
      {/* Business Hours Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center  gap-4 max-w-4xl w-full bg-white rounded-lg shadow-md sm:p-6 p-2  border">
        {/* Head Office Hours */}
        <div className=" p-4 border-r-2 ">
          <h3 className="text-[26px] font-bold mb-2">Head Office:</h3>
          <p className='text-[20px] font-semibold '>Monday – Friday</p>
          <p className='text-[20px]'><i>0730 hrs – 1200 hrs</i></p>
          <p className='text-[20px]'><i>1300 hrs – 1630 hrs</i></p>
          <br />
          <p className='text-[20px] font-semibold'>Saturday</p>
          <p className='text-[20px]'><i>0730 hrs – 1200 hrs</i></p>
        </div>
{/* <div className=' w-full h-full  center max-sm:hidden '><p className=' border w-0 text-grey h-full '></p></div> */}
        {/* Seria Workshop and Other Areas Hours */}
        <div className="p-4 ">
          <h3 className="text-[26px] font-bold mb-2">Seria Workshop and all other Construction areas:</h3>
          <p className='text-[20px] font-semibold sm:mt-3'>Monday – Saturday</p>
          <p className='text-[20px] '><i>0700 hrs – 1200 hrs</i></p>
          <p className='text-[20px]'><i>1300 hrs – 1800 hrs</i></p>
        </div>
      </div>
    </div>
  );
};

 
