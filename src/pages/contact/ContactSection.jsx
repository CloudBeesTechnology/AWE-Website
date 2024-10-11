import React from 'react';
// import image1 from "../../assets/contact/contactimg1.png";
import image2 from "../../assets/contact/image17.png";
import bg from "../../assets/image capture/contact.png";
import { CommonBanner } from '../../Component/Organization/CommonBanner';
import { BusinessHours } from './BusinessHours';


export const ContactSection = () => {
  return (
    <section>
            <CommonBanner background={bg} title="Contact Us" />
    <div className="screen-size flex flex-col items-center justify-center sm:py-20 py-16 ">
      <div className="text-center mb-8 space-y-2">
        <h1 className="text-3xl font-bold">Get in touch with us</h1>
        <p className="">We would like to know more about the needs of your business.</p>
      </div>

      <div className="flex justify-center items-center w-full [@media(max-width:1100px)]:flex-col  gap-5">
  {/* Left Image Section */}
  <div className=" w-full flex items-center h-full  p-2 ">
    <img
      src={image2} 
      alt="Office"
      className="w-full h-full rounded-lg shadow-md max-md:object-cover"
      style={{ height: '400px' }} 
    />
  </div>


       <div className=' w-full center'>
       <BusinessHours/>
       </div>

  {/* Right Map Section
  <div className="w-full  flex items-center">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.0923023672653!2d114.19749617413386!3d4.577441895397145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3218ab891ae36e25%3A0xc6202b85ab025a0!2sADININ%20WORKS%20%26%20ENGINEERING%20SDN%20BHD%20(OFFICIAL)!5e0!3m2!1sen!2sin!4v1728113031914!5m2!1sen!2sin"
      className="w-full h-full  rounded-lg shadow-md "
      style={{ height: '400px' }}
      loading="lazy"
    ></iframe>
  </div> */}
</div>

    </div>
    </section>
  );
};


