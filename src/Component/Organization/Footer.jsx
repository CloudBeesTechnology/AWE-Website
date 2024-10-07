import React, { useState, useEffect } from "react";
import image from "../../assets/footer/facebook.webp";
import image1 from "../../assets/footer/Instagram.webp";
import image2 from "../../assets/footer/linkedin1.png";
import leftArrow from "../../assets/machines/leftarrow.png";
import rightArrow from "../../assets/machines/rightarrow.png";
import { FooterData } from "./FooterData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import 'swiper/css/pagination';
import { FaFacebookSquare,FaInstagramSquare,FaLinkedin} from "react-icons/fa";

import { Link } from "react-router-dom";

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
    <section className="space-y-12 bg-[#c1c1c3] mt-20">
      <div className="max-w-screen-2xl w-[95%] mx-auto ">
        <article className="flex justify-center items-center gap-3 py-10 text-[#303030] text-[16px] font-medium">
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
                  <div className="max-w-[200px] h-[100px] border ">
                    <img
                      className="object-cover w-[200px] h-full "
                      src={val.img}
                      alt={`${index} not found`}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>

        <div className="center flex-col my-5 ">
          <h2 className="text-[18px] font-semibold center mb-4 relative">FOLLOW & SHARE <span className="border bottom-0 border-[#727171] absolute w-[70px]"></span></h2>
          <div className="center gap-5 text-lg font-semibold flex-wrap">
            <Link
            to="https://www.facebook.com/profile.php?id=100093301044365&mibextid=LQQJ4d"
            target="_blank"             
            className="center gap-2"

            >
              <img
                      className="object-cover w-[40px] h-full "
                      src={image}
                      alt={`not found`}
                    />
              {/* <FaFacebookSquare className="text-[blue] text-[30px]"/> */}
              <span className="center border-b text-[12px] border-[blue] font-light">Facebook</span>

            </Link>
            <Link
            to="https://www.instagram.com/awe_adininworks?igsh=MTZnZWthYzg1cGNrZA%3D%3D&utm_source=qr"
            target="_blank"
            className="center gap-2"
            >
               <img
                      className="object-cover w-[40px] h-full "
                      src={image1}
                      alt={`not found`}
                    />
              {/* <FaInstagramSquare className=" text-[orange] text-[30px]"/> */}
              <span className="center border-b border-[orange] text-[12px] font-light">Instagram</span>
            </Link>
            <Link
            to="https://www.linkedin.com/company/adinin-works-&-engineering-sdn-bhd/"
            target="_blank"
            className="center gap-2"

            >
              <img
                      className="object-cover w-[40px] h-full "
                      src={image2}
                      alt={`not found`}
                    />
              {/* <FaLinkedin className=" text-[blue] text-[30px]"/> */}
              <span className="center border-b border-[blue] text-[12px] font-light">LinkedIn</span>
            </Link>
          </div>
        </div>
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
