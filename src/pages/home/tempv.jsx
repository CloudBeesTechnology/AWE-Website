import React, { useState } from 'react';
import { TiTickOutline } from "react-icons/ti";
import { Link } from 'react-router-dom';
import image from "../../assets/home/homeImg-1.jpg";
import slide1 from "../../assets/gallery/workers/image1.jpg";
import slide2 from "../../assets/gallery/workers/image2.jpg";
import slide3 from "../../assets/gallery/workers/image3.jpg";
import slide4 from "../../assets/gallery/workers/image4.jpg";
import slide5 from "../../assets/gallery/workers/image5.jpg";
import slide6 from "../../assets/gallery/workers/image6.jpg";
import slide7 from "../../assets/gallery/workers/image7.jpg";
import slide8 from "../../assets/gallery/workers/image8.jpg";

export const HomeNewEvent = () => {
  const events = [
    { name: 'Hari Raya Celebration Event 2023', image: slide1 },
    { name: 'The 39th National Day Celebration of Negara Brunei Darussalam', image: slide2 },
    { name: 'GONG XI FA CAI 2023', image: slide3 },
    { name: 'Hari Raya Celebration Event 2023', image: slide4 },
    { name: 'The 39th National Day Celebration of Negara Brunei Darussalam', image: slide5 },
    { name: 'GONG XI FA CAI 2023', image: slide6 },
    { name: 'Hari Raya Celebration Event 2023', image: slide7 },
    { name: 'The 39th National Day Celebration of Negara Brunei Darussalam', image: slide8 },
  ];

  const [selectedEvent, setSelectedEvent] = useState(events[0]); // Default to the first event

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  return ( 
    <div className="screen-size mx-auto sm:my-20 my-14">
      <h2 className="text-dark_red sm:my-10 mb-5 text-[20px] text-center sm:text-[34px] font-semibold relative">
        <span className='sm:absolute sm:w-[200px] sm:h-4 sm:top-11 sm:border-b-4 border-dark_red'></span>
        NEWS & EVENTS
      </h2>

      <div className='flex items-center justify-evenly max-md:flex-col w-full gap-10 my-10'>
        {/* Left Image Section */}
        <div>
          <img
            src={selectedEvent.image} 
            alt={selectedEvent.name}
            className="w-[500px] h-auto object-cover"
          />
        </div>

        {/* Right Event List Section */}
        <div className="bg-white shadow shadow-dark_red p-6 rounded-lg border">
          <ul className="space-y-4 mb-5">
            {events.map((event, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span className="text-dark_red font-bold"><TiTickOutline/></span>
                <span 
                  onClick={() => handleEventClick(event)} 
                  className="cursor-pointer hover:text-dark_red transition">
                  {event.name}
                </span>
              </li>
            ))}
          </ul>
          <div className='center'>
            <Link to="/gallery" className='primary_btn1'>View More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};


<section className="flex flex-col space-y-12 bg-[#313038] mt-20">
  <div className="px-4 sm:px-52 flex justify-between flex-row gap-12 mt-12"> {/* Changed from px-52 to px-4 for mobile */}
    <div className="text-white text-center">
      <img src={image34} className="w-20 h-14 mx-auto mb-4" alt="logo" />
      <h1 className="text-[20px] font-bold font-poppins">
        The professional
        <span className="block">contractor of choice</span>
      </h1>
    </div>
    <div className="flex-shrink-0"> {/* Added flex-shrink-0 to prevent shrinking */}
      <h1 className="text-white text-[20px] font-bold">Quick Links</h1>
      <div className="border-b-4 border-light_yellow w-[80px] mt-2"></div>
      <ul className="text-white py-2">
        <li className="py-2">
          <Link to="/about" className="text-white">
            About us
          </Link>
        </li>
        <li className="py-2">
          <Link to="/services" className="text-white">
            Services
          </Link>
        </li>
        <li className="py-2">
          <Link to="/gallery" className="text-white">
            Gallery
          </Link>
        </li>
      </ul>
    </div>
    <div className="text-center flex-shrink-0"> {/* Added flex-shrink-0 to prevent shrinking */}
      <h1 className="text-white text-[20px] font-bold">Social Media</h1>
      <div className="ml-6 border-b-4 border-light_yellow w-[120px] mt-2"></div>
      <div className="flex flex-row gap-6 mt-8">
        <Link
          to="https://www.facebook.com/profile.php?id=100093301044365&mibextid=LQQJ4d"
          target="_blank"
          className="center gap-2 bg-light_yellow rounded-full p-2"
        >
          <img
            className="object-cover w-[26px] h-auto"
            src={image}
            alt={`not found`}
          />
        </Link>
        <Link
          to="https://www.instagram.com/awe_adininworks?igsh=MTZnZWthYzg1cGNrZA%3D%3D&utm_source=qr"
          target="_blank"
          className="center gap-2 bg-light_yellow rounded-full p-2"
        >
          <img
            className="object-cover w-[26px] h-auto "
            src={image1}
            alt={`not found`}
          />
        </Link>
        <Link
          to="https://www.linkedin.com/company/adinin-works-&-engineering-sdn-bhd/"
          target="_blank"
          className="center gap-2 bg-light_yellow rounded-full p-2"
        >
          <img
            className="object-cover w-[26px] h-auto"
            src={image2}
            alt={`not found`}
          />
        </Link>
      </div>
    </div>
    <div className="flex-shrink-0"> {/* Added flex-shrink-0 to prevent shrinking */}
      <h1 className="text-white text-[20px] font-bold">Contact information</h1>
      <div className="border-b-4 border-light_yellow w-[94px] mt-2"></div>
      <address className="text-white mt-6">
        F118, 1st Floor, Komplek Harapan, <br/>
        Lot 3038, Jalan Setia Di-Raja,<br/>
        Kuala Belait KA3131,<br/>
        Brunei Darussalam<br/>
        Fax: +673 3334543
      </address>
    </div>
  </div>
</section>
//gallery trash

import React, { useEffect } from "react";
import bg from "../../assets/image capture/gallery.png";
import { CommonBanner } from "../../Component/Organization/CommonBanner";
import { HariRayaCelebrati } from "./HariRayaCelebrati";
import { HisMajesty77 } from "./HisMajesty77";
import { HisMajesty78 } from "./HisMajesty78";
import { HLP } from "./HLP";
import { LtiMillion } from "./LtiMillion";
import { Chairman } from "./Chairman";
import { useNavigate } from 'react-router-dom';


import { workersSlides, chairmanSlides, hariRayaSlides, hisMajesty77Slides, hlpSlides, hisMajesty78Slides } from "./ImageContainer";

export const Gallery = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);



  const navigateToImageGrid = (path) => {
    navigate(path);
  };

  return (
    <section className="">
      <CommonBanner background={bg} title="Gallery" />
      <div className="px-2  lg:px-4 md:px-12 sm:px-4 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 my-16">
        <div className="p-2 border">
          <LtiMillion
            images={workersSlides}
            onClick={() => navigateToImageGrid("/images/lti")}
            className="h-64"
          />
        </div>
        <div className="p-2">
          <HLP
            images={hlpSlides}
            onClick={() => navigateToImageGrid("/images/hlp")}
            className="h-64"
          />
        </div>
        <div className="p-2">
          <HariRayaCelebrati
            images={hariRayaSlides}
            onClick={() => navigateToImageGrid("/images/hari-raya")}
            className="h-64"
          />
        </div>
        <div className="p-2">
          <HisMajesty77
            images={hisMajesty77Slides}
            onClick={() => navigateToImageGrid("/images/his-majesty-77")}
            className="h-64"
          />
        </div>
        <div className="p-2">
          <HisMajesty78
            images={hisMajesty78Slides}
            onClick={() => navigateToImageGrid("/images/his-majesty-78")}
            className="h-64"
          />
        </div>
        <div className="p-2">
          <Chairman
            images={chairmanSlides}
            onClick={() => navigateToImageGrid("/images/chairman")}
            className="h-64"
          />
        </div>
      </div>
    </section>
  );
}













  //   const navigateToImageGrid = (images, title, color) => {
  //     navigate("/images", { state: { images, title, color } });
  //   };

  //   return (
  //     <section className="">
  //       <CommonBanner background={bg} title="Gallery" />
  //       <div className="px-2 lg:px-24 md:px-12 sm:px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 my-16">

  //         <div className="p-2">
  //           <LtiMillion
  //             images={workersSlides}
  //             onClick={() => navigateToImageGrid(workersSlides, "25 Million Hour Without LTI", "#F93131"  )}
  //             className="h-64" 
  //           />
  //         </div>

  //         <div className="p-2">
  //           <Chairman
  //             images={chairmanSlides}
  //             onClick={() => navigateToImageGrid(chairmanSlides, "Chairman Gallery", "#53FB5E")}
  //             className="h-64"
  //           />
  //         </div>

  //         <div className="p-2">
  //           <HariRayaCelebrati
  //             images={hariRayaSlides}
  //             onClick={() => navigateToImageGrid(hariRayaSlides, "Hari Raya Celebration", "#4C79DA")}
  //             className="h-64"
  //           />
  //         </div>

  //         <div className="p-2">
  //           <HisMajesty77
  //             images={hisMajesty77Slides}
  //             onClick={() => navigateToImageGrid(hisMajesty77Slides, "His Majesty 77", "#F148E5")}
  //             className="h-64"
  //           />
  //         </div>

  //         <div className="p-2">
  //           <HLP
  //             images={hlpSlides}
  //             onClick={() => navigateToImageGrid(hlpSlides, "HLP Gallery", "#C9C900")}
  //             className="h-64"
  //           />
  //         </div>

  //         <div className="p-2">
  //           <HisMajesty78
  //             images={hisMajesty78Slides}
  //             onClick={() => navigateToImageGrid(hisMajesty78Slides, "His Majesty 78", "#F36B21")}
  //             className="h-64"
  //           />
  //         </div>

  //       </div>
  //     </section>
  //   );
  // };