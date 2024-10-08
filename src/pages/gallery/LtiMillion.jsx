import React, { useEffect, useState } from 'react';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";


// Sample image imports (replace with your actual image imports)
import slide1 from "../../assets/gallery/workers/image1.jpg";
import slide2 from "../../assets/gallery/workers/image2.jpg";
import slide3 from "../../assets/gallery/workers/image3.jpg";
import slide4 from "../../assets/gallery/workers/image4.jpg";
import slide5 from "../../assets/gallery/workers/image5.jpg";
import slide6 from "../../assets/gallery/workers/image6.jpg";
import slide7 from "../../assets/gallery/workers/image7.jpg";
import slide8 from "../../assets/gallery/workers/image8.jpg";
import slide9 from "../../assets/gallery/workers/image9.jpg";
import slide10 from "../../assets/gallery/workers/image10.jpg";


export const LtiMillion = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  // Array of images you provided
  const images = [slide3,slide1, slide2,slide6, slide4, slide5,slide10,slide7, slide9,slide8,];

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
        <h2 className='text-[18px] mb-4'>25 MILLION HOUR WITHOUT LTI</h2>
       <div className=' border rounded-md border-[#f7c8c8]  max-w-lg w-full max-h-[275px] h-full overflow-hidden '>
      <div className='p-2 rounded-md border-t-4 border-[#F93131] grid max-[450px]:grid-cols-2  grid-cols-3 gap-2   '>
        {images.map((image, index) => (
           <div 
           key={index}
           className={`center  ${index === 3  || index === 6  ? "md:col-span-2  max-h-[80px] h-full object-center " : "max-w-[300px]  w-full max-h-[80px] h-full"}`}
         >
            <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="cursor-pointer rounded shadow-lg object-cover min-w-[120px] w-full h-full"
            onClick={() => openModal(index)}
          />
          </div>
        ))}
        </div>
       </div>
      </div>

      {/* Modal */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-[#848282] border bg-opacity-95 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded shadow-lg ">
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
              className="rounded w-full max-w-[600px]"
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
