import React from 'react';
import image1 from "../../assets/contact/contactimg1.png";
import image2 from "../../assets/contact/contactimg2.png";
import bg from "../../assets/image capture/contact.png";
import { CommonBanner } from '../../Component/Organization/CommonBanner';


export const ContactSection = () => {
  return (
    <section>
            <CommonBanner background={bg} title="Contact Us" />
    <div className="screen-size flex flex-col items-center justify-center sm:py-20 py-16">
      <div className="text-center mb-8 space-y-2">
        <h1 className="text-3xl font-bold">Get in touch with us</h1>
        <p className="">We would like to know more about the needs of your business.</p>
      </div>

      <div className="flex space-x-6">
        {/* Left Image Section */}
        <div className="w-1/2">
          <img
            src={image2}  // Replace with the actual path to your image
            alt="Office"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Right Map Section */}
        <div className="w-1/2">
          <img
        src={image1} // Replace with the actual path to your map image
            alt="Map"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </div></section>
  );
};


