
import React, { useEffect, useState } from 'react';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";


import slide1 from "../../assets/gallery/HariRayaCelebration2023/HariRaya_1.jpg";
import slide2 from "../../assets/gallery/HariRayaCelebration2023/HariRaya_2.jpg";
import slide3 from "../../assets/gallery/HariRayaCelebration2023/HariRaya_3.jpg";
import slide4 from "../../assets/gallery/HariRayaCelebration2023/HariRaya_4.jpg";
import slide5 from "../../assets/gallery/HariRayaCelebration2023/HariRaya_5.jpg";
import slide7 from "../../assets/gallery/HariRayaCelebration2023/HariRaya_7.jpg";
import slide8 from "../../assets/gallery/HariRayaCelebration2023/HariRaya_8.jpg";
import slide9 from "../../assets/gallery/HariRayaCelebration2023/HariRaya_9.jpg";

export const HariRayaCelebrati = () => {
    useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  // Array of images you provided
  const images = [slide1, slide8, slide3, slide4, slide5, slide2, slide7, slide2, slide9];

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  // Function to open modal with the selected image index
  const openModal = (index) => {
    setSelectedImageIndex(index);
  };

  // Function to close modal
  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  // Function to show the next image
  const nextImage = () => {
    setSelectedImageIndex((prevIndex) => 
      (prevIndex + 1) % images.length
    );
  };

  // Function to show the previous image
  const prevImage = () => {
    setSelectedImageIndex((prevIndex) => 
      (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
        <section>
      {/* Gallery Grid */}
      <div className="p-2  center flex-col">
        <h2 className='text-[18px] mb-4'>HARI RAYA CELEBRATION 2023</h2>
       <div className=' border rounded-md border-[#4C79DA] max-w-lg w-full max-h-[350px] h-full overflow-hidden'>
       <div className='p-2 rounded-md border-t-4 border-[#5138DF] grid max-[450px]:grid-cols-2  grid-cols-3 gap-2   '>
       {images.map((image, index) => (
           <div 
           key={index}
           className={"center max-w-[300px] w-full max-h-[80px] h-full"}
         >
            <img
            src={image}
            alt={`Image ${index + 1}`}
            className="cursor-pointer rounded shadow-lg object-cover min-w-[120px] w-full h-full"
            onClick={() => openModal(index)}
          /></div>
          
        ))}
        </div>
       </div>
      </div>

      {/* Modal */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-[#848282] border bg-opacity-95 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded shadow-lg  ">
            <button
              className="absolute top-2 right-24 text-white text-[50px]"
              onClick={closeModal}
            >
              &times; {/* Close icon */}
            </button>
            <button
              className="absolute top-1/2 left-20 transform -translate-y-1/2 text-white text-[40px]"
              onClick={prevImage}
            >
              <FaChevronLeft />
            </button>
            <img
              src={images[selectedImageIndex]}
              alt="Selected"
              className="rounded  w-full max-w-[850px] h-full"
            />
            <button
              className="absolute top-1/2 right-20 transform -translate-y-1/2 text-white text-[40px]"
              onClick={nextImage}
            >
              <FaChevronRight />
            </button>
         
          </div>
        </div>
      )}
    </section>
  );
};