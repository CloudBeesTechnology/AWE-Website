import React from 'react';
import { CommonBanner } from '../../Component/Organization/CommonBanner';
import bg from "../../assets/applyJob/applyJob-1.jpeg";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { CareerData } from './CareerData';

export const CareerSection = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <section>
            <CommonBanner background={bg}  title="Apply Job" />
    <div className="flex flex-col  center   p-4 sm:p-10 space-y-6 md:space-y-0 md:space-x-10 my-10">
      {/* Career Section */}
      <div className=" mb-10">
        <h2 className="text-3xl font-bold">CAREER</h2>
        <p className="mt-4 text-lg max-sm:text-justify">
          It sounds like you're looking for information on career requirements.
          Could you specify which career or industry you're interested in?
          Different careers have varying requirements, such as specific
          educational backgrounds, skills, certifications, or experience. Let me
          know more details, and I can provide tailored information!
        </p>
      </div>

      {/* Employment Application Form */}

      {/* <div className="flex-1 center flex-col ">
        <h3 className="font-bold text-lg mb-7"><span></span>JOB VACANCIES</h3>
        <div className="space-y-4 p-2 rounded-md shadow-md sm:w-[300px] border-2 border-[red]">
<div className='flex justify-evenly items-center'>

            <img 
              src={icon} 
              alt="Welder" 
              className="object-cover w-20"
            />
<p className="font-bold text-lg mb-4">Welding </p>

  </div>          
  <h4 className="font-semibold">Description</h4>
          <p className=" text-[12px] font-medium ">Communicating effectively with clients, stakeholders, and project managers, both verbally and in writing.</p>
<div className=' flex-wrap flex justify-between items-center gap-2'><p className='border py-1 px-2 text-[12px]'>Experience 0-1</p> <p className='border py-1 px-4 text-[12px]'>LPA</p> <p className='border py-1 px-3 text-[12px]'>Full Time</p></div>
          <p>
            <div className='center mt-5'>
            <Link to="/addCandidates" className="bg-[#FEF116] text-black center font-bold py-1 px-4 rounded">
             APPLY JOB
            </Link>
            </div>
          </p>
        </div>
      </div> */}

<div className="space-y-4 ">
      {/* Title and description section */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold mb-4">Available Job Listings</h1>
        <p className="">Explore the latest job opportunities and find your next career move!</p>
      </div>

    <div className='flex max-[742px]:justify-center justify-between items-center flex-wrap gap-7 p-2 gap-y-10'>
    {/* {CareerData.map((job) => (
        <div key={job.id} className=" gap-7 space-y-4 p-2 rounded-md shadow-md sm:w-[300px] sm:h-[300px]  border-2 border-[red]">
          <div className='flex justify-evenly items-center '>
            <img 
              src={job.icon} 
              alt={job.title} 
              className="object-cover w-16 h-16 text-[red] "
            />
            <p className="font-bold text-lg  ">{job.title}</p>
          </div>          
          <h4 className="font-semibold">Description</h4>
          <p className="text-[12px] font-medium h-[60px]">{job.description}</p>
          <div className='flex-wrap flex justify-between items-center gap-2'>
            <p className='border py-1 px-2 text-[12px]  '>{job.experience}</p>
            <p className='border py-1 px-4 text-[12px]'>{job.lpa}</p>
            <p className='border py-1 px-3 text-[12px]'>{job.type}</p>
          </div>
          <div className='center py-2'>
            <Link to="/addCandidates" className="bg-[#FEF116] text-black center font-bold py-1 px-4 rounded">
              APPLY JOB
            </Link>
          </div>
        </div>
      ))} */}
      {CareerData.map((job, index) => (
  <div key={`${job.id}-${index}`} className="gap-7 space-y-4 p-2 rounded-md shadow-md sm:w-[300px] sm:h-[300px] border-2 border-[red]">
    <div className='flex justify-evenly items-center '>
      <img 
        src={job.icon} 
        alt={job.title} 
        className="object-cover w-16 h-16 text-[red]"
      />
      <p className="font-bold text-lg">{job.title}</p>
    </div>          
    <h4 className="font-semibold">Description</h4>
    <p className="text-[12px] font-medium h-[60px]">{job.description}</p>
    <div className='flex-wrap flex justify-between items-center gap-2'>
      <p className='border py-1 px-2 text-[12px]'>{job.experience}</p>
      <p className='border py-1 px-4 text-[12px]'>{job.lpa}</p>
      <p className='border py-1 px-3 text-[12px]'>{job.type}</p>
    </div>
    <div className='center py-2'>
      <Link to="/addCandidates" className="bg-[#FEF116] text-black center font-bold py-1 px-4 rounded">
        APPLY JOB
      </Link>
    </div>
  </div>
))}
    </div>
    </div>
    </div>
    </section>
  );
};




// import React, { useEffect } from 'react';
// import { CommonBanner } from '../../Component/Organization/CommonBanner';
// import bg from "../../assets/applyJob/applyJob-1.jpeg";
// import { Link } from 'react-router-dom';
// import { CareerData } from './CareerData';

// export const CareerSection = () => {
//   useEffect(() => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   }, []);

//   return (
//     <section>
//       <CommonBanner background={bg} title="Apply Job" />
//       <div className="flex flex-col items-center p-4 sm:p-10 space-y-6 md:space-y-0 md:space-x-10 my-10">
//         {/* Career Section */}
//         <div className="mb-10 px-0 lg:px-24">
//           <h2 className="text-[24px] text-[#303030] font-semibold">CAREER</h2>
//           <p className="mt-4 text-lg max-sm:text-justify">
//             Fast movement, unlimited challenges and excitement to explore. This is the right track for you. Having been established since 1980, Adinin Works & Engineering Sdn. Bhd. is a leading EPC: Oil and Gas Sector in Brunei Darussalam. We are now opening career opportunities in many challenging areas and eagerly await any qualified and energetic candidates who have a strong intention to join and share experiences with us. We are offering a competitive salary package with other welfare and fringe benefits, a dramatic career path, overseas training, and an international professional working environment. Your submitted CVs/Applications would be kept confidential in our recruitment database.
//           </p>
//         </div>

//         <div className="text-start">
//           {/* Title and description section */}
//           <div className="text-start mb-6">
//             <h2 className="text-[24px] text-[#303030] font-semibold">CAREER OPPORTUNITIES</h2>
//           </div>

//           <div className='flex flex-wrap justify-center items-start gap-7 p-2'>
//             {CareerData.map((job, index) => (
//               <div key={`${job.id}-${index}`} className="flex flex-col justify-between space-y-4 px-6 py-4 rounded-md shadow-[0_4px_10px_rgba(0,0,0,0.3)] w-full sm:w-[300px] h-[290px]">
//                 <div className='flex items-center'>
//                   <img
//                     src={job.icon}
//                     alt={job.title}
//                     className="object-cover w-[33px] h-[24px] mr-4"
//                   />
//                   <p className="font-bold text-lg">{job.title}</p>
//                 </div>
//                 <div className='grid grid-cols-3 gap-2 w-full'>
//                   <p className='border py-1 px-2 text-[12px]'>{job.experience}</p>
//                   <p className='border py-1 px-4 text-[12px]'>{job.lpa}</p>
//                   <p className='border py-1 px-3 text-[12px]'>{job.type}</p>
//                 </div>

//                 <h4 className="font-semibold">Description</h4>
//                 <p className="text-[12px] font-medium h-[60px]">{job.description}</p>
//                 <div className='flex justify-center py-2 w-full'>
//                   <Link to="/addCandidates" className="bg-[#FEF116] text-[12px] text-black font-bold py-1 px-4 rounded">
//                     APPLY JOB
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };



