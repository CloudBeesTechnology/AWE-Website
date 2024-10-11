import React from 'react'
import { FaPhoneVolume } from "react-icons/fa6";
import { FaBlenderPhone } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { PiMapPinAreaLight } from "react-icons/pi";

export const BusinessEnquiries = () => {
  return (
    <div className="screen-size flex flex-col items-center  w-full justify-center ">
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-6 max-sm:text-center">Business Enquiries</h2>
      
      {/* Top contact info */}
      <div className='center flex-col w-full  sm:p-2 '>
      <div className="flex justify-center items-center w-full gap-7 sm:gap-24 p-2 mb-6 flex-wrap ">
        <div className="flex items-center space-x-2 bg-white p-4 rounded-md shadow-md">
          <span role="img" aria-label="Phone" className="text-dark_red"><FaPhoneVolume/></span>
          <p>+673 3331001</p>
        </div>
        <div className="flex items-center space-x-2 bg-white p-4 rounded-md shadow-md">
          <span role="img" aria-label="Phone" className="text-dark_red"><FaBlenderPhone/></span>
          <p>673 3334543 </p>
        </div>
        <div className="flex items-center space-x-2 bg-white p-4 rounded-md shadow-md">
          <span role="img" aria-label="Email" className="text-dark_red"><FaMessage/></span>
          <p>awe@adininworks.com</p>
        </div>
      </div>

      {/* Office Details */}
      <div className=" justify-between flex items-center w-full gap-4 flex-wrap sm:p-2  ">
       {/* <div className='flex flex-col gap-5 border w-full sm:w-[350px]'> */}
       <div className='bg-[#FFFDE7] p-6 rounded-lg shadow-md flex  w-full sm:w-[350px]  sm:h-[200px] h-full'>
        <div className="">
          <h2 className="text-xl font-bold mb-2 flex ">
            <span role="img" aria-label="Location" className="mr-2 text-dark_red text-[30px]"><PiMapPinAreaLight /></span>
            Sungai Bera Workshop:
          </h2>
     

        {/* Sungai Bera-Workshop */}
        <div className=" max-sm:mt-5 mt-2">
          <p className='mt-5 '>Lot 55, 56, 57 & 63, Tapak Perindustrian Sungai Bera, Seria, Belait District, Brunei Darussalam.</p>
        </div>   </div>
        </div>
         {/* Head Office */}
         <div className="bg-[#FFF8E1] p-6 rounded-lg shadow-md w-full sm:w-[350px]     sm:h-[200px] h-full">
          <h3 className="text-xl font-bold mb-2 flex items-center">
            <span role="img" aria-label="Location" className="mr-2 mb-1 text-dark_red text-[30px]"><PiMapPinAreaLight /></span>
            Head Office:
          </h3>
          <p>F118 1st Floor, Komplek Harapan <br/> Lot 3038, Jalan Setia Di-Raja, Kuala Belait KA 3131.</p>
          <p>Tel: +673 3331001</p>
          <p>Fax: +673 3334543</p>
        </div>

  {/* Postal Address */}
  <div className="bg-[#FFF3E0] p-6 rounded-lg shadow-md w-full sm:w-[350px]  sm:h-[200px] h-full">
          <h3 className="text-xl font-bold mb-2 flex items-center">
            <span role="img" aria-label="Location" className="mr-2 mb-2 text-dark_red text-[30px]"><PiMapPinAreaLight /></span>
            Postal Address:
          </h3>
          <p>P.O. Box 78, Kuala Belait KA 1189, Brunei Darussalam</p>
        </div>
       {/* </div> */}
        {/* Registered Office */}
       
      

      
      </div>
      </div>

      <div className="flex flex-col justify-evenly items-center w-full max-[900px]:flex-col gap-5">

  {/* Right Map Section */}
  <div className="w-full  flex items-center mt-20">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.0923023672653!2d114.19749617413386!3d4.577441895397145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3218ab891ae36e25%3A0xc6202b85ab025a0!2sADININ%20WORKS%20%26%20ENGINEERING%20SDN%20BHD%20(OFFICIAL)!5e0!3m2!1sen!2sin!4v1728113031914!5m2!1sen!2sin"
      className="w-full h-full  rounded-lg shadow-md "
      style={{ height: '400px' }}
      loading="lazy"
    ></iframe>
  </div>
</div>
    </div>
  )
}
