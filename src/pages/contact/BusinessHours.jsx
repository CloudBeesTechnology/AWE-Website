import React from 'react';
import { AiTwotoneCalendar } from "react-icons/ai";
import { IoIosCalendar } from "react-icons/io";
import image2 from "../../assets/contact/cal.svg";

export const BusinessHours = () => {
  return (
    <div className="screen-size   flex flex-col items-center justify-center  ">
      <h2 className="text-[30px] font-semibold mb-4 border-b-2 text-white ">Business Hours</h2>
      
      {/* Business Hours Grid */}
      <div className="  flex justify-center  gap-4  sm:p-6 p-2   ">
        {/* Head Office Hours border-double border-4*/}
        <div className="relative p-4  center flex-col ">
          {/* <h3 className="text-[40px] font-medium mb-2 max-sm:text-center">Head Office:</h3> */}
          <p className='text-[20px] font-semibold '>MONDAY – FRIDAY</p>
        <div className='flex gap-2 sm:gap-5 flex-wrap justify-center items-center mt-2'>
        <p className='text-[20px] font-light'><i>0730 hrs – 1200 hrs</i></p>
        <p className='text-[20px] font-light'><i>1300 hrs – 1630 hrs</i></p>
        </div>

       
          <p className='text-[20px] font-semibold mt-4'>SATURDAY</p>
          <p className='text-[20px] mt-2 font-light'><i>0730 hrs – 1200 hrs</i></p>

          <p className='text-[20px] font-semibold mt-4'>SUNDAY</p>
          <p className='text-[20px] font-light mt-2'><i>CLOSED</i></p>
{/* <div className=' w-full h-full  center max-sm:hidden '><p className=' border w-0 text-grey h-full '></p></div> */}
        {/* Seria Workshop and Other Areas Hours */}
        {/* <div className="p-4 ">
          <h3 className="text-[26px] font-bold mb-2">Seria Workshop and all other Construction areas:</h3>
          <p className='text-[20px] font-semibold sm:mt-3'>Monday – Saturday</p>
          <p className='text-[20px] '><i>0700 hrs – 1200 hrs</i></p>
          <p className='text-[20px]'><i>1300 hrs – 1800 hrs</i></p>
        </div> */}

        <div className=' absolute w-[450px] -bottom-8 '>
        <img
      src={image2} 
      alt="Office"
      className="w-full  rounded-lg shadow-md object-cover "
      // style={{ height:  }} 
    />
        </div>        
        </div>

      </div>
    </div>
  );
};

 
