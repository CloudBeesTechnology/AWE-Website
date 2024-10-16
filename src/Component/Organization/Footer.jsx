import React, { useState, useEffect } from "react";
import image from "../../assets/footer/fbNew.png";
import image1 from "../../assets/footer/instaNew.png";
import image2 from "../../assets/footer/linkedinNew.png";
import leftArrow from "../../assets/machines/leftarrow.png";
import rightArrow from "../../assets/machines/rightarrow.png";
import { FooterData } from "./FooterData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import image34 from "../../assets/logo/logo.png"
import "swiper/css";
import 'swiper/css/pagination';

export const Footer = () => {

  return (
    <>
      <article className="mt-24 flex justify-center items-center gap-3 text-[#303030] text-[16px] font-medium">
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
      <section className="flex flex-col space-y-12 bg-[#313038] mt-20">

        <section className="flex flex-col space-y-12 bg-[#313038]">
          <div className="px-4 lg:px-36 flex flex-col lg:flex-row  justify-center lg:justify-between gap-12 mt-12">

            {/* Logo Section */}
            <div className="text-white text-center">
              <img src={image34} className="w-[90px] h-24 mx-auto mb-4" alt="logo" />
              <h1 className=" capitalize italic text-[12px] font-semibold lg:text-[20px] lg:font-bold">
                The professional
                <span className="block">contractor of choice</span>
              </h1>
            </div>

            {/* Quick Links Section */}
            <div className="text-center lg:text-start">
              <h1 className="text-white text-[12px] font-semibold lg:text-[20px] lg:font-bold">Quick Links</h1>
              <div className="flex justify-center lg:justify-start">
                <div className="border-b-4 border-light_yellow w-[80px] mt-2"></div>
              </div>
              <ul className="text-[10px] lg:text-[18px] font-lg  text-white py-2">
                <li className="py-2">
                  <Link to="/about" className="text-white">About us</Link>
                </li>
                <li className="py-2">
                  <Link to="/OurService" className="text-white">Services</Link>
                </li>
                <li className="py-2">
                  <Link to="/gallery" className="text-white">Gallery</Link>
                </li>
              </ul>
            </div>

            {/* Social Media Section */}
            <div className="text-center">
              <h1 className="text-white text-[12px] font-semibold lg:text-[20px] lg:font-bold">Social Media</h1>
              <div className="flex justify-center">
                <div className="border-b-4 border-light_yellow w-[80px] lg:w-[120px] mt-2"></div>
              </div>
              <div className="flex justify-center gap-6 mt-8">
                <Link to="https://www.facebook.com/profile.php?id=100093301044365&mibextid=LQQJ4d" target="_blank" className="center gap-2 ">
                  <img className="object-cover w-[18px] lg:w-[46px] h-auto" src={image} alt={`not found`} />
                </Link>
                <Link to="https://www.instagram.com/awe_adininworks?igsh=MTZnZWthYzg1cGNrZA%3D%3D&utm_source=qr" target="_blank" className="center gap-2">
                  <img className="object-cover w-[18px] lg:w-[46px] h-auto" src={image1} alt={`not found`} />
                </Link>
                <Link to="https://www.linkedin.com/company/adinin-works-&-engineering-sdn-bhd/" target="_blank" className="center gap-2">
                  <img className="object-cover w-[18px] lg:w-[46px] h-auto" src={image2} alt={`not found`} />
                </Link>
              </div>
            </div>

            {/* Contact Information Section */}
            <div className="text-center lg:text-start">
              <h1 className="text-[12px] font-semibold lg:text-[20px] lg:font-bold text-white">Contact information</h1>
              <div className="flex justify-center lg:justify-start">
                <div className="border-b-4 border-light_yellow w-[80px] lg:w-[94px]  mt-2"></div>
              </div>
              <address className="text-[10px] lg:text-[18px] font-lg text-white mt-6">
                F118, 1st Floor, Komplek Harapan, <br />
                Lot 3038, Jalan Setia Di-Raja,<br />
                Kuala Belait KA3131,<br />
                Brunei Darussalam<br />
                Tel: +673 3331001<br />
                Fax: +673 3334543
              </address>
            </div>
          </div>
        </section>

        <div className="bottom max-w-screen-2xl w-[95%] mx-auto ">
          <Swiper
            className="w-full"
            modules={[Pagination, Autoplay]}
            spaceBetween={5}
            slidesPerView={6}
            loop={true}
            autoplay={{ delay: 1000, disableOnInteraction: false }}
            speed={1500}
          >
            <div className="center overflow-hidden">
              {FooterData.map((val, index) => (
                <SwiperSlide key={index}>
                  <div className="center">
                    <div className="max-w-[180px] h-[170px] border ">
                      <img
                        className="object-cover w-[180px] h-full "
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

        <div className="border-t border-light_yellow text-[16px] text-white">
          <div className="flex justify-between items-center flex-wrap gap-3 max-sm:justify-center text-center max-w-screen-2xl w-[95%] mx-auto p-2">
            <article className="space-x-3">
              <span>Terms & Conditions</span>
              <span>|</span>
              <span>Privacy Policy</span>
            </article>
            <article>
              <p>Copyright ©  2024 Adinin Works & Engineering Sdn Bhd</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};
