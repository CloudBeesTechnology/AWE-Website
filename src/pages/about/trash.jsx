// // // // import React from 'react';
// // // // import bg from "../../assets/about/aboutUS.jpg";
// // // // // import image from "../../assets/about/image9.png";
// // // // import { CommonBanner } from '../../Component/Organization/CommonBanner';
// // // // import { useEffect } from 'react';

// // // // export const AboutOurMission = () => {

// // // //   useEffect(() => {
// // // //     window.scrollTo({
// // // //       top: 0,
// // // //       behavior: "smooth",
// // // //     });
// // // //   }, []);

// // // //   return (
// // // //     <section>
// // // //       <CommonBanner background={bg} title="Our Mission & Vision" />
// // // //       <div className="screen-size bg-white pt-16 pb-12 px-2 lg:px-32">
// // // //         {/* Title */}
// // // <div className="mb-8">
// // //   <h2 className="text-[28px] font-semibold bg-[#FEF116] text-center w-[220px] p-3">
// // //     Our Mission...
// // //   </h2>
// // // </div>

// // // //         {/* Content Section */}
// // // //         <div className="lg:flex lg:flex-col lg:items-start">
// // // //           {/* Text Content */}
// // // //           <div className="lg:w-full">
// // // //             <ul className="space-y-8 ">
// // // //               <li>
// // // //                 <div className="flex items-start gap-2">
// // // //                   <span className="text-dark_red ">⦿</span>
// // // //                   <div>
// // // //                     <p>To proactively engage our customers to seek better ways to serve their business needs.</p>
// // // //                   </div>
// // // //                 </div>
// // // //               </li>
// // // //               <li>
// // // //                 <div className="flex items-start gap-2">
// // // //                   <span className="text-dark_red ">⦿</span>
// // // //                   <div>
// // // //                     <p>To create an environment for employees to realize their full potential.</p>
// // // //                   </div>
// // // //                 </div>
// // // //               </li>
// // // //               <li>
// // // //                 <div className="flex items-start gap-2">
// // // //                   <span className="text-dark_red ">⦿</span>
// // // //                   <div>
// // // //                     <p>To build long term relationships with business partners, suppliers, and financiers.</p>
// // // //                   </div>
// // // //                 </div>
// // // //               </li>
// // // //             </ul>
// // // //           </div>

// // // //           {/* Image Section */}
// // // //           {/* <div className="mt-10 lg:w-full">
// // // //           <img 
// // // //             src={image}
// // // //             alt="Mission Image" 
// // // //             className="rounded-lg shadow-lg object-cover w-full h-48 lg:h-64"
// // // //           />
// // // //         </div> */}
// // // //         </div>

// // // //         <div className="mb-8 mt-16">
// // // //           <h2 className="text-[28px] font-semibold bg-[#FEF116] text-center w-[220px] p-3">
// // // //             Our Vision...
// // // //           </h2>
// // // //         </div>

// // // //         {/* Content Section */}
// // // //         <div className="lg:flex lg:justify-between lg:gap-12">
// // // //           {/* Text Content */}
// // // //           <div className="lg:w-2/3">
// // // //             <h3 className="sm:text-[30px] text-[24px] font-medium mb-4 max-sm:text-center">
// // // //               To be the professional contractor of choice
// // // //             </h3>

// // // //             <ul className="space-y-8 ">
// // // //               <li>
// // // //                 <div className="flex items-start gap-2">
// // // //                   <span className="text-dark_red ">⦿</span>
// // // //                   <div>
// // // //                     <p className="font-medium text-[20px] mb-2">TO OUR CUSTOMERS</p>
// // // //                     <p className='ml-8'>We deliver consistent services and excellent solutions.</p>
// // // //                   </div>
// // // //                 </div>
// // // //               </li>
// // // //               <li>
// // // //                 <div className="flex items-start gap-2">
// // // //                   <span className="text-dark_red">⦿</span>
// // // //                   <div>
// // // //                     <p className="font-medium text-[20px] mb-2">TO OUR EMPLOYEES</p>
// // // //                     <p className='ml-8'>We are an environment where employees feel secure to release their aspirations.</p>
// // // //                   </div>
// // // //                 </div>
// // // //               </li>
// // // //               <li>
// // // //                 <div className="flex items-start gap-2">
// // // //                   <span className="text-dark_red">⦿</span>
// // // //                   <div>
// // // //                     <p className="font-medium text-[20px] mb-2">TO OUR INVESTORS</p>
// // // //                     <p className='ml-8'>We achieve attractive shareholder returns.</p>
// // // //                   </div>
// // // //                 </div>
// // // //               </li>
// // // //               <li>
// // // //                 <div className="flex items-start gap-2">
// // // //                   <span className="text-dark_red">⦿</span>
// // // //                   <div>
// // // //                     <p className="font-medium text-[20px] mb-2">TO OUR FINANCIERS</p>
// // // //                     <p className='ml-8'>We are a growing, well-managed, and diversified business entity.</p>
// // // //                   </div>
// // // //                 </div>
// // // //               </li>
// // // //               <li>
// // // //                 <div className="flex items-start gap-2">
// // // //                   <span className="text-dark_red">⦿</span>
// // // //                   <div>
// // // //                     <p className="font-medium text-[20px] mb-2">TO OUR SUPPLIERS</p>
// // // //                     <p className='ml-8'>We honor our commitment and we are a vehicle for their long-term growth.</p>
// // // //                   </div>
// // // //                 </div>
// // // //               </li>
// // // //               <li>
// // // //                 <div className="flex items-start gap-2">
// // // //                   <span className="text-dark_red">⦿</span>
// // // //                   <div>
// // // //                     <p className="font-medium text-[20px] mb-2">TO OUR BUSINESS PARTNERS</p>
// // // //                     <p className='text-[16px] ml-8'>We are trustworthy to our partners to achieve their business goals.</p>
// // // //                   </div>
// // // //                 </div>
// // // //               </li>
// // // //             </ul>
// // // //           </div>
// // // //         </div>

// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };



// // import React from 'react';
// // import bg from "../../assets/about/aboutUS.jpg";
// // // import image from "../../assets/about/image9.png";
// // import { CommonBanner } from '../../Component/Organization/CommonBanner';
// // import { useEffect } from 'react';
// // import roadMap from "../../assets/newModel/roadMap.png"

// // export const AboutOurMission = () => {

// //   useEffect(() => {
// //     window.scrollTo({
// //       top: 0,
// //       behavior: "smooth",
// //     });
// //   }, []);

// //   return (
// //     <section>
// //       <CommonBanner background={bg} title="Our Mission & Vision" />


// //       <div className='mt-12 border border-[#E2D82D] h-[100vh] w-full bg-road-map bg-cover bg-center'>
// //         <div className="mb-8">
// //           <div className='mt-36 sm:ml-12 lg:ml-72 h-[100px] w-full'>
// //             <h2 className="text-[28px] font-semibold text-[#2a4255]">
// //               Our Mission...
// //             </h2>
// //             <p>  
// //               To proactively engage our customers to seek better ways to serve their business needs. <br />
// //               To create an environment for employees to realize their full potential.<br />
// //               To build long term relationships with business partners, suppliers, and financiers.
// //             </p>
// //           </div>
// //         </div>

// //       </div>
// //     </section>
// //   );
// // };

// // //  this need to responsive i used margin left and margin top to make this text match my backround image but insted use position property which is necessary and the image and text have to be responsive
// import React, { useEffect } from 'react';
// import bg from "../../assets/about/aboutUS.jpg";
// import { CommonBanner } from '../../Component/Organization/CommonBanner';

// export const AboutOurMission = () => {
//   useEffect(() => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   }, []);

//   return (
//     <section>
//       <CommonBanner background={bg} title="Our Mission & Vision" />
//       <>
//         <div className="relative h-screen w-full bg-road-map bg-cover bg-center">
//           <div className="absolute top-36 left-12 lg:left-72 h-[100px] w-full ">
//             <h2 className="text-lg lg:text-3xl font-semibold text-[#2a4255] mb-0 lg:mb-4">
//               Our Mission...
//             </h2>
//             <p className="sm:text-xs lg:text-lg  text-[#2a4255] leading-relaxed">
//               To proactively engage our customers to seek better ways to serve their business needs.
//               <br />
//               To create an environment for employees to realize their full potential.
//               <br />
//               To build long-term relationships with business partners, suppliers, and financiers.
//             </p>
//           </div>
//           <div>
//             <div className="absolute top-54 left-12 lg:left-72 h-[100px] w-full ">
//               <h2 className="text-lg lg:text-3xl font-semibold text-[#2a4255] mb-0 lg:mb-4">
//                 Our Vision...
//               </h2>
//               <h3>To be the professional contractor of choice
//               </h3>
//             </div>
//           </div>

//         </div>
//       </>
//     </section>
//   );
// };
import React, { useEffect } from 'react';
import bg from "../../assets/about/aboutUS.jpg";
import { CommonBanner } from '../../Component/Organization/CommonBanner';

export const AboutOurMission = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <section className=' overflow-x-hidden  '>
      <CommonBanner background={bg} title="Our Mission & Vision" />
      <div className="relative h-screen w-full bg-road-map bg-cover bg-center">
        {/* Mission Section */}
        <div className="absolute top-[130px] left-12 lg:left-72">
          <h2 className="relative bottom-24 text-lg lg:text-2xl bg-[#fef116] w-[180px] font-semibold text-[] mb-0 lg:mb-2">
            Our Mission...
          </h2>
          <div className='relative right-16 flex flex-row gap-12'>
            <div className='flex items-center border w-[300px] h-[140px] py-4 px-6 rounded-full'>
              <div className='flex  justify-center'>
                <p className='text-white p-2 rounded-full h-7 w-14 bg-customBlue flex items-center justify-center'>
                  1
                </p>
                <p className="sm:text-xs lg:text-sm text-[#2a4255] leading-relaxed ml-2">
                  To proactively engage our customers to seek better ways to serve their business needs.
                </p>
              </div>
            </div>
            <div className='flex items-center border w-[300px] h-[140px] py-4 px-6 rounded-full'>
              <div className='flex  justify-center'>
                <p className='text-black p-2 rounded-full h-7 w-14 bg-yellow flex items-center justify-center'>
                  2
                </p>
                <p className="sm:text-xs lg:text-sm text-[#2a4255] leading-relaxed ml-2">
                  To create an environment for employees to realize their full potential.
                </p>
              </div>
            </div>
            <div className='flex items-center border w-[300px] h-[140px] py-4 px-6 rounded-full'>
              <div className='flex i justify-center'>
                <p className='text-white p-2 rounded-full h-7 w-14 bg-dark_red flex items-center justify-center'>
                  3
                </p>
                <p className="sm:text-xs lg:text-sm text-[#2a4255] leading-relaxed ml-2">
                  To build long term relationships with business partners, suppliers, and financiers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="relative top-[410px] left-12 lg:left-72">
          <h2 className="text-lg lg:text-2xl font-semibold bg-[#fef116] w-[180px] mb-0 lg:mb-2">
            Our Vision...
          </h2>
          <div className='relative right-16 flex flex-row gap-12'>
            <div className='flex items-center border w-[300px] h-[140px] py-4 px-6 rounded-full'>
              <div className=''>
                <h2 className='text-center  font-bold p-2'>TO OUR CUSTOMERS</h2>
                <div className='flex justify-center'>
                  <p className='text-black p-2 rounded-full h-7 w-10 bg-light_yellow flex items-center justify-center'>
                    1
                  </p>
                  <p className="sm:text-xs lg:text-sm text-[#2a4255] leading-relaxed ml-2">
                    We deliver consistent services and excellent solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className='flex items-center border w-[300px] h-[140px] py-4 px-6 rounded-full'>
              <div className=''>
                <h2 className='text-center p-2 font-bold'>TO OUR EMPLOYEES</h2>
                <div className='flex justify-center'>
                  <p className='text-white p-2 rounded-full h-7 w-10 bg-dark_red flex items-center justify-center'>
                    2
                  </p>
                  <p className="sm:text-xs lg:text-sm text-[#2a4255] leading-relaxed ml-2">
                    We are an environment where employees feel secure to release their aspirations.
                  </p>
                </div>
              </div>
            </div>
            <div className='flex items-center border w-[300px] h-[140px] py-4 px-6 rounded-full'>
              <div className=''>
                <h2 className='text-center p-2 font-bold'>TO OUR INVESTORS</h2>
                <div className='flex justify-center'>
                  <p className='text-white p-2 rounded-full h-7 w-10 bg-customBlue flex items-center justify-center'>
                    3
                  </p>
                  <p className="sm:text-xs lg:text-sm text-[#2a4255] leading-relaxed ml-2">
                    We achieve attractive shareholder returns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative top-[520px] left-12 lg:left-72">
          <div className='relative right-16 flex flex-row gap-12'>
            <div className='flex items-center border w-[300px] h-[140px] py-4 px-6 rounded-full'>
              <div className=''>
                <h2 className='text-center p-2 font-bold'>TO OUR FINANCIERS</h2>
                <div className='flex justify-center'>
                  <p className='text-black p-2 rounded-full h-7 w-10 bg-yellow flex items-center justify-center'>
                    4
                  </p>
                  <p className="sm:text-xs lg:text-sm text-[#2a4255] leading-relaxed ml-2">
                    We are a growing, well-managed, and diversified business entity.
                  </p>
                </div>
              </div>
            </div>
            <div className='flex items-center border w-[300px] h-[140px] py-4 px-6 rounded-full'>
              <div className=''>
                <h2 className='text-center p-2 font-bold'>TO OUR SUPPLIERS</h2>
                <div className='flex justify-center'>
                  <p className='text-white p-2 rounded-full h-7 w-10 bg-customBlue flex items-center justify-center'>
                    5
                  </p>
                  <p className="sm:text-xs lg:text-sm text-[#2a4255] leading-relaxed ml-2">
                    We honor our commitment and we are a vehicle for their long-term growth.
                  </p>
                </div>
              </div>
            </div>
            <div className='flex items-center border w-[300px] h-[140px] py-4 px-6 rounded-full'>
              <div className=''>
                <h2 className='text-center p-2 font-bold'>TO OUR BUSINESS PARTNERS</h2>
                <div className='flex justify-center'>
                  <p className='text-white p-2 rounded-full h-7 w-10 bg-dark_red flex items-center justify-center'>
                    6
                  </p>
                  <p className="sm:text-xs lg:text-sm text-[#2a4255] leading-relaxed ml-2">
                    We are trustworthy to our partners to achieve their business goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
