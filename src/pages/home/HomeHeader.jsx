import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { MdCall } from "react-icons/md";


export const HomeHeader = () => {
  return (
    <section className="max-sm:pt-14 max-sm:pb-10 center homeHeader-bg min-h-screen py-28 relative mb-40">
<div className="screen-size m-0 ">
    <div className="flex overflow-hidden  justify-start items-start sm:ml-20 ">
          <div className="w-full flex max-sm:gap-2 max-sm:flex-col ">
            <div className="space-y-10 ">
              <h1 className="text-white max-sm:text-[25px] text-[60px] font-bold ">
              Industrial<br/>
              Resource & Oil Exploration.
              </h1>
              <p className=" text-[16px] sm:para text-white ">We Stand as the ultimate link to excellence in the oil energy sector,<br/>
              driving intellectual progress for sustainable future.</p>
              <div className="my-5 flex max-sm:justify-center ">
                <button className="btn-header">
                DISCOVER MORE
                </button>
              </div>
            </div>
          </div>
          
    </div>
</div>

<div className="absolute -bottom-24 flex max-md:items-start gap-2 text-sm bg-yellow max-w-[95%] w-full px-2 py-4 rounded-lg">
      <div className="center text-center gap-2 max-md:flex-col">
        <span className="text-black text-start sm:text-2xl border sm:p-2 p-1 rounded-full"><FaLocationDot/></span>
        <div>
          <h4 className="text-black font-semibold mb-1">Location</h4>
          <p className="text-black  ">
           <span className='flex max-md:flex-col max-md:gap-1 max-md:mb-1'> P. O. Box 78, <span>Kuala Belait KA 1189,</span></span> 
           Brunei Darussalam
          </p>
        </div>
      </div>
      <div className=" center text-center max-md:flex-col">
        <span className="text-black sm:text-2xl border p-2 rounded-full"><MdCall/></span>
        <div>
          <h4 className="text-black font-semibold mb-2">Contact</h4>
          <p className="text-black ">+673 3331001</p>
        </div>
      </div>
    </div>
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


