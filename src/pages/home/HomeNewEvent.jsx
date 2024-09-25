
import React from 'react';
import image from "../../assets/home/homeImg-1.png"
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
    <div className=" screen-size mx-auto flex  items-center justify-between max-md:flex-col w-full  gap-10">
      {/* Main Content */}
        {/* Left Image Section */}
       <div></div>
          <div >
          <img
            src={image} // Replace with your image URL
            alt="Event"
            className="w-[500px] h-auto object-cover"
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
  );
};


