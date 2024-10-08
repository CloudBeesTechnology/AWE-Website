import React, { useEffect, useState } from 'react';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

// Sample image imports (replace with your actual image imports)
import slide1 from "../../assets/gallery/CHAIRMAN/img1.jpg";
import slide2 from "../../assets/gallery/CHAIRMAN/img2.jpg";
import slide3 from "../../assets/gallery/CHAIRMAN/img3.jpg";
import slide4 from "../../assets/gallery/CHAIRMAN/img4.jpg";
import slide5 from "../../assets/gallery/CHAIRMAN/img5.jpg";
import slide6 from "../../assets/gallery/CHAIRMAN/img6.jpg";
import slide7 from "../../assets/gallery/CHAIRMAN/img7.jpg";
import slide8 from "../../assets/gallery/CHAIRMAN/img8.jpg";
import slide9 from "../../assets/gallery/CHAIRMAN/img9.jpg";
import slide10 from "../../assets/gallery/CHAIRMAN/img10.jpg";
import slide11 from "../../assets/gallery/CHAIRMAN/img11.jpg";
import slide12 from "../../assets/gallery/CHAIRMAN/img12.jpg";
import slide13 from "../../assets/gallery/CHAIRMAN/img13.jpg";
import slide14 from "../../assets/gallery/CHAIRMAN/img14.jpg";
import slide15 from "../../assets/gallery/CHAIRMAN/img15.jpg";
import slide16 from "../../assets/gallery/CHAIRMAN/img16.jpg";
import slide17 from "../../assets/gallery/CHAIRMAN/img17.jpg";
import slide18 from "../../assets/gallery/CHAIRMAN/img18.jpg";
import slide19 from "../../assets/gallery/CHAIRMAN/img19.jpg";



export const Chairman = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  // Array of images you provided
  const images = [slide1, slide2 , slide3, slide4, slide5, slide6,slide7,slide8,slide9,slide10,slide11,slide12,slide13,slide14,slide15,slide16,slide17,slide18,slide19];

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
        <h2 className='text-[18px] mb-4'>CHAIRMAN 90TH BIRTHDAY 2022</h2>
        <div className=' border rounded-md border-[#A2EA94]  max-w-md w-full max-h-[275px] h-full overflow-hidden '>
      <div className='p-2 rounded-md border-t-4 border-[#53FB5E] grid max-[450px]:grid-cols-2  grid-cols-3 gap-2   '>
        {images.map((image, index) => (
           <div 
           key={index}
           className={`center  ${ index === 3  ? "md:col-span-2 md:row-span-2 sm:max-w-[250px] max-h-[165px] h-full object-center " : "sm:max-w-[120px] w-full max-h-[80px] h-full"}`}
         >
            <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="cursor-pointer rounded shadow-lg object-cover sm:min-w-[120px] w-full h-full"
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
              className="rounded w-full max-w-[850px] h-full"
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
