import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { MdCall } from "react-icons/md";


export const HomeHeader = () => {
  return (
    <section className="max-sm:pt-14 max-sm:pb-10 sm:center homeHeader-bg min-h-screen py-28 relative mb-20">
<div className="screen-size  max-sm:mt-32">
    <div className="flex overflow-hidden  justify-start items-start md:ml-20 ">
          <div className="w-full flex items-center max-sm:gap-2 max-sm:flex-col ">
            <div className="space-y-10 ">
              <h1 className="text-white max-sm:center max-md:text-center max-sm:text-[25px] text-[60px] font-bold ">
              Industrial<br/>
              Resource & Oil Exploration.
              </h1>
              <p className="max-sm:center max-md:text-center text-[16px] sm:para text-white ">We Stand as the ultimate link to excellence in the oil energy sector,
             <br className='max-md:hidden block' /> driving intellectual progress for sustainable future.</p>
              <div className="my-5 flex max-md:justify-center">
                <button className="btn-header max-sm:text-[16px]">
                DISCOVER MORE
                </button>
              </div>
            </div>
          </div>
          
    </div>
</div>

{/* <div className="absolute sm:-bottom-24 -bottom-16 flex max-md:items-start justify-between gap-2 text-sm bg-[#FEF563] max-sm:max-w-[95%] right-0 px-1 sm:py-12  py-4 rounded-l-lg">
      <div className="center text-center gap-2 max-md:flex-col p-2">
        <span className="text-black text-start sm:text-2xl border sm:p-2 p-1 rounded-full"><FaLocationDot/></span>
        <div>
          <h4 className="text-black font-semibold mb-1">Location</h4>
          <p className="text-black  ">
           <span className='flex max-md:flex-col max-md:gap-1 max-md:mb-1'> P. O. Box 78, <span>Kuala Belait KA 1189,</span></span> 
           Brunei Darussalam
          </p>
        </div>
      </div>
      <div className="center text-center max-md:flex-col">
        <span className="text-black text-start sm:text-2xl border sm:p-2 p-1 rounded-full"><MdCall/></span>
        <div>
          <h4 className="text-black font-semibold mb-2 m-2">Contact</h4>
          <p className="text-black ">+673 3331001</p>
        </div>
      </div>
    </div> */}
{/* <div className=" bg-yellow rounded-md px-6 md:p-2 md:rounded-l-2xl md:w-1/2 h-[180px] mx-auto flex justify-between items-center gap-10 absolute -bottom-24 md:right-0 ">
      <div className="flex items-center sm:space-x-5 space-x-2 ">
        <span className="text-black text-[18px] sm:text-2xl border p-2 rounded-full"><FaLocationDot/></span>
        <div>
          <h4 className="text-black font-semibold mb-1">Location</h4>
          <p className="text-black max-sm:text-[14px] ">
           <span className='flex max-md:flex-col max-md:gap-2 max-md:mb-2'> P. O. Box 78, <span>Kuala Belait KA 1189</span></span> 
           Brunei Darussalam
          </p>
        </div>
      </div>
      <div className="flex items-center sm:space-x-5 space-x-2">
        <span className="text-black text-[18px] sm:text-2xl border p-2 rounded-full"><MdCall/></span>
        <div>
          <h4 className="text-black font-semibold mb-2">Contact</h4>
          <p className="text-black max-sm:text-[14px]">+673 3331001</p>
        </div>
      </div>
    </div> */}
</section>
  )
}


