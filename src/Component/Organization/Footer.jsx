import React, { useState, useEffect } from "react";
import machines from "../../assets/machines/machines.jpg";
import leftArrow from "../../assets/machines/leftarrow.png";
import rightArrow from "../../assets/machines/rightarrow.png";
import { FooterData } from "./FooterData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import 'swiper/css/pagination';

export const Footer = () => {
  // const [showSearchBox, setShowSearchBox] = useState(true); // Add the state for search box visibility

  // useEffect(() => {
  //   // Add event listener for scroll
  //   const handleScroll = () => {
  //     setShowSearchBox(false); // Now it won't throw an error!
  //   };
  //   window.addEventListener("scroll", handleScroll);

  //   // Cleanup function
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <section className="space-y-12">
      <div className="max-w-screen-2xl w-[95%] mx-auto">
        <article className="flex justify-center items-center gap-3 my-10 text-[#303030] text-[16px] font-medium">
          <p className="text-center px-7">
            <span className="relative">
              <img
                className="max-w-[30px] absolute top-0 -left-9 w-full"
                src={leftArrow}
                alt="left arrow not found"
              />
              Being
            </span>{" "}
            one of the country's most professional and successful mechanical
            contractors having the capacity to carry out major
            <span className="relative pl-1">
              projects.
              <img
                className="max-w-[30px] w-full absolute top-0 -right-10"
                src={rightArrow}
                alt="right arrow not found"
              />
            </span>
          </p>
        </article>
        
        <Swiper
          className="w-full"
          modules={[Pagination, Autoplay]}
          spaceBetween={5}
          slidesPerView={7}
          loop={true}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          speed={1500}
        >
          <div className="center overflow-hidden">
            {FooterData.map((val, index) => (
              <SwiperSlide key={index}>
                <div className="center">
                  <div className="max-w-[200px] h-[100px]">
                    <img
                      className="object-cover max-sm:w-full max-sm:h-full"
                      src={val.img}
                      alt={`${index} not found`}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
      
      <div className="bg-[#303030] text-[16px] text-white">
        <div className="flex justify-between items-center flex-wrap gap-3 max-sm:justify-center text-center max-w-screen-2xl w-[95%] mx-auto p-2">
          <article className="space-x-3">
            <span>Terms & Conditions</span>
            <span>|</span>
            <span>Privacy Policy</span>
          </article>
          <article>
            <p>Copyright © 2024 Adinin Works & Engineering. All rights reserved.</p>
          </article>
        </div>
      </div>
    </section>
  );
};
