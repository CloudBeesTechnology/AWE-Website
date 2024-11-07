// import React from 'react'
// import { FaPhoneVolume } from "react-icons/fa6";
// import { FaBlenderPhone } from "react-icons/fa";
// import { FaMessage } from "react-icons/fa6";
// import { PiMapPinAreaLight } from "react-icons/pi";

// export const BusinessEnquiries = () => {
//   return (
//     <div className="screen-size flex flex-col items-center justify-center sm:px-10">
//       {/* Heading */}
//       <h2 className="text-[30px] text-[#303030] font-semibold mb-16">Business Enquiries</h2>

//       {/* Top contact info */}
//       <div className='border border-[#E2D82D] center flex-col p-2 lg:p-12 sm:p-5'>
//         <div className="center gap-4  lg:gap-64 p-2 mb-6 flex-col lg:flex-row">
//           <div className="flex items-center gap-6space-x-2 bg-white p-4">
//             <span role="img" aria-label="Phone" className="text-dark_red"><FaPhoneVolume /></span>
//             <p>+673 3331001</p>
//           </div>
//           <div className="flex items-center space-x-2 bg-white p-4">
//             <span role="img" aria-label="Phone" className="text-dark_red"><FaBlenderPhone /></span>
//             <p>673 3334543 / 3342047 </p>
//           </div>
//           <div className="flex items-center space-x-2 bg-white p-4">
//             <span role="img" aria-label="Email" className="text-dark_red"><FaMessage /></span>
//             <p>+enquiries@adininworks.com</p>
//           </div>
//         </div>

//         {/* Office Details */}
//         <div className="">
//           <div className='flex flex-col lg:flex-row gap-6 w-full'>
//             {/* Registered Office */}
//             <div className='w-[411px] h-[267px] bg-white p-6 rounded-lg shadow-md flex w-full sm:w-[350px]'>
//               <div className="">
//                 <h2 className="text-xl font-bold mb-2 flex ">
//                   <span role="img" aria-label="Location" className="mr-2 text-dark_red text-[30px]"><PiMapPinAreaLight /></span>
//                   Registered Office:
//                 </h2>
//                 {/* Sungai Bera-Workshop */}
//                 <div className=" max-sm:mt-5 mt-2">
//                   <p className='mt-5 '><strong>(Sungai Bera-Workshop) </strong>
//                     Lot 55, 56, 57 & 63 Tapak Perindustrain Sungai Bera, Seria, Belait District, Brunei Darussalam.</p>
//                 </div>
//               </div>
//             </div>
//             {/* Head Office */}
//             <div className="w-[411px] h-[267px] bg-white p-6 rounded-lg shadow-md">
//               <h3 className="text-xl font-bold mb-2 flex items-center">
//                 <span role="img" aria-label="Location" className="mr-2 text-dark_red text-[30px]"><PiMapPinAreaLight /></span>
//                 Head Office:
//               </h3>
//               <p>F118 1st Floor, Komplek Harapan <br /> Lot 3038, Jalan Setia Di-Raja,<br /> Kuala Belait KA 3131.</p>
//               <p>Tel: +673 3331001</p>
//               <p>Fax: +673 3334543</p>
//             </div>
//             {/* Postal Address */}
//             <div className="w-[411px] h-[267px] bg-white p-6 rounded-lg shadow-md">
//               <h3 className="text-xl font-bold mb-2 flex items-center">
//                 <span role="img" aria-label="Location" className="mr-2 text-dark_red text-[30px]"><PiMapPinAreaLight /></span>
//                 Postal Address:
//               </h3>
//               <p>P.O. Box 78, Kuala Belait KA 1189, Brunei Darussalam</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaBlenderPhone } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { PiMapPinAreaLight } from "react-icons/pi";

export const BusinessEnquiries = () => {
  return (
    <div className="screen-size flex flex-col items-center justify-center pt-16 sm:px-10">
      {/* Heading */}
      <h2 className="text-[30px] max-sm:text-[20px] text-[#303030] font-semibold max-sm:mb-4 mb-8">
        Business Enquiries
      </h2>

      {/* Contact Info & Office Details */}
      <div className="border border-[#E2D82D] center flex-col p-4 lg:p-12 sm:p-5">
        {/* Top contact info */}
        <div className="flex flex-col md:flex-row sm:gap-6 lg:gap-56 mb-6">
          <div className=" bg-white p-6  rounded-lg flex items-center">
            <span
              role="img"
              aria-label="Phone"
              className="text-dark_red text-[30px] max-sm:text-[16px]"
            >
              <FaPhoneVolume />
            </span>
            <p className="ml-4 text-[18px] max-sm:text-[16px]">+673 3331001</p>
          </div>
          <div className=" bg-white p-6 rounded-lg flex items-center">
            <span
              role="img"
              aria-label="Phone"
              className="text-dark_red text-[30px] max-sm:text-[16px]"
            >
              <FaBlenderPhone />
            </span>
            <p className="ml-4 text-[18px] max-sm:text-[16px]">673 3334543</p>
          </div>
          <div className=" bg-white p-6 rounded-lg flex items-center">
            <span
              role="img"
              aria-label="Email"
              className="text-dark_red text-[30px] max-sm:text-[16px]"
            >
              <FaMessage />
            </span>
            <p className="ml-4 text-[18px] max-sm:text-[16px]">awe@adininworks.com</p>
          </div>
        </div>

        {/* Office Details */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Registered Office */}
          <div className="flex flex-col items-center justify-center w-full sm:w-[411px] h-[200px] max-sm:h-auto bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl  max-sm:text-[16px] font-bold mb-2 flex items-center justify-center">
              <span
                role="img"
                aria-label="Location"
                className="mr-2 text-dark_red text-[30px]"
              >
                <PiMapPinAreaLight />
              </span>
              Head Office:
            </h3>
            <div className="max-sm:mt-5 text-[18px] max-sm:text-[14px]">
              <p>
                F118 1st Floor, Komplek Harapan <br />
                Lot 3038, Jalan Setia Di-Raja, <br />
                Kuala Belait, Brunei Darussalam, KA 3131
              </p>
            </div>
          </div>

          {/* Head Office */}
          <div className="flex flex-col items-center justify-center w-full sm:w-[411px] h-[200px]  max-sm:h-auto bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl max-sm:text-[16px] font-bold mb-2 flex items-center justify-center">
              <span
                role="img"
                aria-label="Location"
                className="mr-2 text-dark_red text-[30px]"
              >
                <PiMapPinAreaLight />
              </span>
              Sungai Bera Workshop:
            </h3>
            <div className="max-sm:mt-5 text-[18px] max-sm:text-[14px]">
              <p>
                Lot 55, 56, 57 & 63, <br />
                Tapak Perindustrian Sungai Bera, Seria, <br />
                Kuala Belait, Brunei Darussalam.
              </p>
            </div>
          </div>

          {/* Postal Address */}
          <div className="flex flex-col items-center justify-center w-full sm:w-[411px] h-[200px] max-sm:h-auto bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl  max-sm:text-[16px] font-bold mb-2 flex items-center justify-center">
              <span
                role="img"
                aria-label="Location"
                className="mr-2 text-dark_red text-[30px]"
              >
                <PiMapPinAreaLight />
              </span>
              Postal Address:
            </h3>
            <div className="max-sm:mt-5 text-[18px] max-sm:text-[14px]">
              <p>
                P.O. Box 78, Kuala Belait KA 1189, <br />
                Brunei Darussalam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
