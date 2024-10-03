
import React from 'react';
import image from "../../assets/home/homeImg-1.jpg"
import { TiTickOutline } from "react-icons/ti";


export const HomeNewEvent  = () => {
  const events = [
    'Hari Raya Celebration Event 2023',
    'The 39th National Day Celebration of Negara Brunei Darussalam',
    'GONG XI FA CAI 2023',
    'Hari Raya Celebration Event 2023',
    'The 39th National Day Celebration of Negara Brunei Darussalam',
    'GONG XI FA CAI 2023',
    'Hari Raya Celebration Event 2023',
    'The 39th National Day Celebration of Negara Brunei Darussalam',
    'GONG XI FA CAI 2023',
  ];

  return ( 
    <div className=" screen-size mx-auto sm:my-20 my-14">
      {/* Main Content */}
        {/* Left Image Section */}
        <h2 className="text-dark_red sm:my-10 mb-5 text-[20px] text-center sm:text-[34px] font-semibold relative"><span className=' sm:absolute sm:w-[200px] sm:h-4 sm:top-11  sm:border-b-4 border-dark_red '></span>
        NEWS & EVENTS</h2>
       <div className='flex  items-center justify-evenly max-md:flex-col w-full  gap-10 my-10 '>
       <div >
          <img
            src={image} // Replace with your image URL
            alt="Event"
            className="w-[500px]  h-auto object-cover"
          />
        </div>

        {/* Right Event List Section */}
        <div className="bg-white shadow shadow-dark_red  p-6 rounded-lg">
          <ul className="space-y-4">
            {events.map((event, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span className="text-dark_red font-bold"><TiTickOutline/></span>
                <span>{event}</span>
              </li>
            ))}
          </ul>
        </div>
       </div>
       
   
        </div>
  );
};


