import React from 'react'
import { FaPhoneVolume } from "react-icons/fa6";
import { FaBlenderPhone } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { PiMapPinAreaLight } from "react-icons/pi";

export const BusinessEnquiries = () => {
  return (
    <div className="screen-size flex flex-col items-center justify-center   sm:px-10 ">
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-6">Business Enquiries</h2>
      
      {/* Top contact info */}
      <div className='center flex-col bg-contact  p-2 sm:p-5'>
      <div className="center gap-3 p-2 mb-6 flex-wrap ">
        <div className="flex items-center space-x-2 bg-white p-4 rounded-md shadow-md">
          <span role="img" aria-label="Phone" className="text-dark_red"><FaPhoneVolume/></span>
          <p>+673 3331001</p>
        </div>
        <div className="flex items-center space-x-2 bg-white p-4 rounded-md shadow-md">
          <span role="img" aria-label="Phone" className="text-dark_red"><FaBlenderPhone/></span>
          <p>673 3334543 / 3342047</p>
        </div>
        <div className="flex items-center space-x-2 bg-white p-4 rounded-md shadow-md">
          <span role="img" aria-label="Email" className="text-dark_red"><FaMessage/></span>
          <p>awe@adininworks.com</p>
        </div>
      </div>

      {/* Office Details */}
      <div className="flex  justify-evenly items-center flex-wrap w-full gap-4 p-2 ">
       <div className='flex flex-col gap-5 border w-full sm:w-[350px]'>

         {/* Head Office */}
         <div className="bg-white p-6 rounded-lg shadow-md ">
          <h3 className="text-xl font-bold mb-2 flex items-center">
            <span role="img" aria-label="Location" className="mr-2 text-dark_red text-[30px]"><PiMapPinAreaLight /></span>
            Head Office:
          </h3>
          <p>F118 1st Floor, Kompleks Harapan Lot 3038, Jalan Setia Di-Raja, Kuala Belait KA 3131</p>
          <p>Tel: +673 3331001</p>
          <p>Fax: +673 3334543</p>
        </div>

  {/* Postal Address */}
  <div className="bg-white p-6 rounded-lg shadow-md ">
          <h3 className="text-xl font-bold mb-2 flex items-center">
            <span role="img" aria-label="Location" className="mr-2 text-dark_red text-[30px]"><PiMapPinAreaLight /></span>
            Postal Address:
          </h3>
          <p>P.O. Box 78, Kuala Belait KA 1189, Brunei Darussalam</p>
        </div>
       </div>
        {/* Registered Office */}
        <div className='bg-white p-6 rounded-lg shadow-md flex border w-full sm:w-[350px]'>
        <div className="">
          <h2 className="text-xl font-bold mb-2 flex ">
            <span role="img" aria-label="Location" className="mr-2 text-dark_red text-[30px]"><PiMapPinAreaLight /></span>
            Registered Office:
          </h2>
     

        {/* Sungai Bera-Workshop */}
        <div className=" max-sm:mt-5 mt-5">
          <h3 className="text-[20px] font-semibold mb-2 flex items-center">
            (Sungai Bera - Workshop)
          </h3>
          <p className='mt-5 '>Lot 55, 56, 57 & 63, Tapak Perindustrian Sungai Bera, Seria, Belait District, Brunei Darussalam.</p>
        </div>   </div>
        </div>
      

      
      </div>
      </div>
    </div>
  )
}
