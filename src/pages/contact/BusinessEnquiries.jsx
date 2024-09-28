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
      <div className="center gap-5 p-2 mb-6 flex-wrap">
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
          <p>enquiries@adininworks.com</p>
        </div>
      </div>

      {/* Office Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2 w-full">
       <div className='flex flex-col gap-5'>

         {/* Head Office */}
         <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2 flex items-center">
            <span role="img" aria-label="Location" className="mr-2 text-dark_red text-[30px]"><PiMapPinAreaLight /></span>
            Head Office:
          </h3>
          <p>F217-F222, Kompleks Harapan Lot 3038, Jalan Setia Di-Raja, Kuala Belait KA 3131</p>
          <p>Tel: +673 3331001</p>
          <p>Fax: +673 3334543 / 3342047</p>
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
        <div className='bg-white p-6 rounded-lg shadow-md flex flex-wrap'>
        <div className="">
          <h2 className="text-xl font-bold mb-2 flex ">
            <span role="img" aria-label="Location" className="mr-2 text-dark_red text-[30px]"><PiMapPinAreaLight /></span>
            Registered Office:
          </h2>
          <h3 className="text-[20px] font-semibold mt-5 mb-2 flex ">
             (Seria-Workshop)
          </h3>
          <p>G26, Jalan Tengah, Lorong Tiga Timor, Seria KB 1733</p>
          <p>Tel: +673 3223031 / 3224054 / 3222440</p>
          <p>Fax: +673 3223693</p>
        </div>

        {/* Sungai Bera-Workshop */}
        <div className=" max-sm:mt-5">
          <h3 className="text-[20px] font-semibold mb-2 flex items-center">
            (Sungai Bera-Workshop)
          </h3>
          <p>Lot 55, 56, 57 & 63, Tapak Perindustrian Sungai Bera, Seria, Belait District, Brunei Darussalam</p>
        </div>
        </div>
      

      
      </div>
    </div>
  )
}
