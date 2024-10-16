import React from "react";
import bg from "../../assets/about/ServicesNew.jpg";
import { CommonBanner } from "../../Component/Organization/CommonBanner";
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
        <CommonBanner background={bg} title="Our Services" />
        <div className="screen-size bg-white pt-16 px-2 lg:px-10 ">
          {/* Title Section */}
          <div className=" flex-col max-sm:text-justify sm:mb-12 mb-10">
            <h2 className="text-center text-[28px] font-semibold bg-[#FEF116] w-[250px] p-3">What we do...</h2>
            <p className=" text-[20px] mt-10">
              Adinin Works & Engineering Sdn Bhd (AWE) has extended its operation
              and expertise into EPC Project execution, inclusive of offshore
              platforms and onshore plant construction.
            </p>
          </div>
        </div>
      </section>
      <HomeMS />
    </>
  );
};


