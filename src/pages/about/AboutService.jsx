import React from "react";
import { CommonBanner } from "../../Component/Organization/CommonBanner";
import bg from "../../assets/about/aboutUS.jpg";
// import image1 from "../../assets/about/image4.png";
// import image2 from "../../assets/about/image5.png";
import { HomeMS } from "../home/HomeMS";
import { useEffect } from "react";



export const AboutService = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>

      <section>
        <CommonBanner background={bg} title="Our Service" />
        <div className="screen-size bg-white pt-16 px-2 lg:px-10 ">
          {/* Title Section */}
          <div className=" flex-col max-sm:text-justify sm:mb-12 mb-10">
            <h2 className="text-center text-[28px] font-semibold bg-[#FEF116] w-[250px] p-3">What we do...</h2>
            <p className=" text-[20px] mt-10">
              Adinin Works & Engineering Sdn. Bhd. (AWE) has extended its operation
              and expertise into EPC Project execution, inclusive of offshore
              platforms and onshore plant construction.
            </p>
          </div>

        

          {/* Image Section */}
          {/* <div className=" flex justify-center gap-4 max-w-6xl mx-auto pt-5">
        <img
          src={image1}
          alt="Image 1"
          className="w-1/2  rounded-lg shadow-md"
        />
        <img
          src={image2}
          alt="Image 2"
          className="w-1/2  rounded-lg shadow-md"
        />
      </div> */}
        </div>
      </section>
      <HomeMS />
    </>
  );
};


