import React from 'react'
import bg from "../../assets/image capture/gallery.png";
import image1 from "../../assets/gallery/gallery1.png";
import image2 from "../../assets/gallery/gallery2.png";
import image3 from "../../assets/gallery/gallery3.png";
import image4 from "../../assets/gallery/gallery4.png";
import { CommonBanner } from '../../Component/Organization/CommonBanner';

export const Gallery = () => {
  return (
    <section>
            <CommonBanner background={bg} title="Gallery" />
    <div className="scree-size container mx-auto p-4 my-20">
    <div className="center flex-col gap-4">
      
   <div className='center gap-5'>
       {/* First Image */}
       <div className="relative">
        <img
        src={image1} // Replace with actual path
          alt="Image 1"
          className="w-full h-auto object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Second Image */}
      <div className="relative">
        <img
        src={image2}
          alt="Image 2"
          className="w-full h-auto object-cover rounded-lg shadow-md"
        />
      </div>
   </div>

    <div className='center gap-5'>
          {/* Third Image */}
      <div className="relative">
        <img
          src={image3}
          alt="Image 3"
          className="w-full h-auto object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Fourth Image */}
      <div className="relative">
        <img
          src={image4}
          alt="Image 4"
          className="w-full h-auto object-cover rounded-lg shadow-md"
        />
      </div>
    </div>

    </div>
  </div> </section>
   )
}



