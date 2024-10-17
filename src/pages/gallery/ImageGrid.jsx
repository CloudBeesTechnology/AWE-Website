import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

export const ImageGrid = ({ images, title, color }) => {
    const location = useLocation();
    // const { images, title, color } = location.state || { images: [], title: "Image title", color: "#F93131" };

    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const openModal = (index) => {
        setSelectedImageIndex(index);
    };

    const closeModal = () => {
        setSelectedImageIndex(null);
    };

    const nextImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const getImageSize = (image) => {
        const img = new Image();
        img.src = image;
        return new Promise((resolve) => {
            img.onload = () => {
                resolve({ width: img.width, height: img.height });
            };
        });
    };

    const [imageSizes, setImageSizes] = useState(Array(images.length).fill(null));

    React.useEffect(() => {
        Promise.all(images.map(getImageSize)).then(setImageSizes);
    }, [images]);

    if (images.length === 0) {
        return <p>No images to display.</p>;
    }

    useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, []);

    return (
        <section>
            <header>
                <h1 className="px-12 mt-4 uppercase text-2xl font-semibold" style={{ color }}>{title}</h1>
            </header>
            <div className="px-12 p-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">

                {images.map((image, index) => (
                    <div key={index} className="relative cursor-pointer" onClick={() => openModal(index)}>
                        <img
                            src={image}
                            alt={`Image ${index + 1}`}
                            className="rounded-md object-cover w-full h-56 transition-opacity duration-300 ease-in-out hover:opacity-90"
                        />
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedImageIndex !== null && (
                <div className="fixed inset-0 bg-[#848282] bg-opacity-95 flex items-center justify-center z-50">
                    <div className="relative sm:relative md:static lg:static max-w-auto mx-auto">
                        <button
                            className="absolute top-4 right-4 text-white text-[40px] md:text-[50px]"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                        <button
                            className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-[40px] md:text-[50px]"
                            onClick={prevImage}
                        >
                            <FaChevronLeft />
                        </button>

                        <div className="flex justify-center">
                            {images.map((img, index) => {
                                const isWider = imageSizes[index]?.width > imageSizes[index]?.height;
                                return (
                                    <img
                                        key={index}
                                        src={img}
                                        alt={`Image ${index + 1}`}
                                        className={`max-h-[570px] ${isWider ? 'w-auto lg:w-[900px] md:w-[500px] sm:w-[600px]' : 'w-auto'} rounded mx-2 ${index === selectedImageIndex ? 'block' : 'hidden'}`}
                                    />
                                );
                            })}
                        </div>

                        <button
                            className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-[40px] md:text-[50px]"
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

// // import React, { useState } from 'react';
// // import { TiTickOutline } from "react-icons/ti";
// // import { Link } from 'react-router-dom';
// // import slide1 from "../../assets/home/Events/25 Million Safe Man-Hours Without Lost Time Injury (LTI) Copy.jpeg";
// // import slide2 from "../../assets/home/Events/Celebrating Hari Raya 2024.jpg";
// // import slide3 from "../../assets/home/Events/Happy 78th Birthday to His Majesty Sultan of Brunei.JPG";
// // import slide4 from "../../assets/home/Events/Happy Chinese New Year 2024.jpg";
// // import slide5 from "../../assets/home/Events/Head Office HLP 2024.JPG";
// // import slide6 from "../../assets/home/Events/The 40th National Day Celebration of Negara Brunei Darussalam.png";


// // export const HomeNewEvent = () => {
// //   const events = [
// //     { name: '25 Million Safe Man-Hours Without Lost Time Injury (LTI)', image: slide1 },
// //     { name: 'Celebrating Hari Raya 2024', image: slide2 },
// //     { name: 'Happy 78th Birthday to His Majesty Sultan of Brunei', image: slide3 },
// //     { name: 'Happy Chinese New Year 2024', image: slide4 },
// //     { name: 'Head Office HLP 2024', image: slide5 },
// //     { name: 'The 40th National Day Celebration of Negara Brunei Darussalam.jpg', image: slide6 },
  
// //   ];

// //   const [selectedEvent, setSelectedEvent] = useState(events[0]); // Default to the first event

// //   const handleEventClick = (event) => {
// //     setSelectedEvent(event);
// //   };

// //   return ( 
// // <div className="screen-size mx-auto sm:my-20 my-14">
// //   <h2 className="mb-12 text-black sm:my-10 mb-5 text-[20px] text-center sm:text-[34px] font-semibold relative">
// //     <span className='sm:absolute sm:w-[200px] sm:h-4 sm:top-11 sm:border-b-4 border-dark_red'></span>
// //     NEWS & EVENTS
// //   </h2>

// //   <div className='flex flex-col sm:flex-row items-center justify-evenly w-full gap-2 lg:gap-10 my-2 lg:my-10'>
// //     {/* Left Image Section */}
// //     <div className="flex justify-center w-full sm:w-[450px] lg:w-[600px] h-[300px] sm:h-[490px] overflow-hidden">
// //       <img
// //         src={selectedEvent.image}
// //         alt={selectedEvent.name}
// //         className="rounded-md w-full h-full object-fit"
// //       />
// //     </div>

// //     {/* Right Event List Section */}
// //     <div className="bg-white shadow shadow-dark_red px-6 py-6 rounded-lg border w-full sm:w-[380px] h-[320px] flex flex-col">
// //       <ul className="space-y-4 flex-grow items-center justify-center">
// //         {events.map((event, index) => (
// //           <li key={index} className="text-[#50A5EB] underline flex items-center space-x-2 cursor-pointer" onClick={() => handleEventClick(event)}>
// //             <span className="text-xl text-dark_red font-bold"><TiTickOutline /></span>
// //             <span className="text-sm hover:text-dark_red transition">{event.name}</span>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   </div>
// // </div>

// //   );
// // };

// import React, { useState } from 'react';
// import { TiTickOutline } from "react-icons/ti";
// import slide1 from "../../assets/home/Events/25 Million Safe Man-Hours Without Lost Time Injury (LTI) Copy.jpeg";
// import slide2 from "../../assets/home/Events/Celebrating Hari Raya 2024.jpg";
// import slide3 from "../../assets/home/Events/Happy 78th Birthday to His Majesty Sultan of Brunei.JPG";
// import slide4 from "../../assets/home/Events/Happy Chinese New Year 2024.jpg";
// import slide5 from "../../assets/home/Events/Head Office HLP 2024.JPG";
// import slide6 from "../../assets/home/Events/The 40th National Day Celebration of Negara Brunei Darussalam.png";

// export const HomeNewEvent = () => {
//   const events = [
//     { name: '25 Million Safe Man-Hours Without Lost Time Injury (LTI)', image: slide1 },
//     { name: 'Celebrating Hari Raya 2024', image: slide2 },
//     { name: 'Happy 78th Birthday to His Majesty Sultan of Brunei', image: slide3 },
//     { name: 'Happy Chinese New Year 2024', image: slide4 },
//     { name: 'Head Office HLP 2024', image: slide5 },
//     { name: 'The 40th National Day Celebration of Negara Brunei Darussalam', image: slide6 },
//   ];

//   const [selectedEvent, setSelectedEvent] = useState(events[0]); // Default to the first event
//   const [activeIndex, setActiveIndex] = useState(0); // Track active index

//   const handleEventClick = (event, index) => {
//     setSelectedEvent(event);
//     setActiveIndex(index); // Update active index
//   };

   
//   const navigateToImageGrid = () => {
//     navigate("/images");
//   };

//   return (
//     <div className="screen-size mx-auto sm:my-20 my-14 ">
//       <h2 className="mb-12 text-black sm:my-10 mb-5 text-[20px] text-center sm:text-[34px] font-semibold relative">
//         <span className='sm:absolute sm:w-[200px] sm:h-4 sm:top-11 sm:border-b-4 border-dark_red'></span>
//         NEWS & EVENTS
//       </h2>

//       <div className='flex flex-col sm:flex-row items-center justify-evenly w-full gap-2 lg:gap-10 my-2 lg:my-10'>
//         {/* Left Image Section */}
//         <div className="flex justify-center w-full sm:w-[450px] lg:w-[600px] h-[300px] sm:h-[490px] overflow-hidden">
//           <img
//             src={selectedEvent.image}
//             alt={selectedEvent.name}
//             className="rounded-md w-full h-full object-fit"
//           />
//         </div>

//         {/* Right Event List Section */}
//         <div className="flex justify-evenly gap-5 items-center bg-white shadow shadow-dark_red px-6 py-6 rounded-lg border w-full sm:w-[380px] h-[400px] flex flex-col">
//           <ul className="space-y-4  ">
//             {events.map((event, index) => (
//               <li
//                 key={index}
//                 className={`flex gap-2 cursor-pointer ${activeIndex === index ? 'text-dark_red font-bold' : 'text-[#50A5EB]'}`}
//                 onClick={() => handleEventClick(event, index)}
//               >
//                 <span className="text-xl"><TiTickOutline /></span>
//                 <span className={`text-sm transition ${activeIndex === index ? 'hover:text-dark_red' : 'hover:text-dark_red'}`}>{event.name}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// //need some chnages if i hover the links on right the image have to come in left and if click the image it have to route based on link category


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { TiTickOutline } from "react-icons/ti";
// import slide1 from "../../assets/home/Events/25 Million Safe Man-Hours Without Lost Time Injury (LTI) Copy.jpeg";
// import slide2 from "../../assets/home/Events/Celebrating Hari Raya 2024.jpg";
// import slide3 from "../../assets/home/Events/Happy 78th Birthday to His Majesty Sultan of Brunei.JPG";
// import slide4 from "../../assets/home/Events/Happy Chinese New Year 2024.jpg";
// import slide5 from "../../assets/home/Events/Head Office HLP 2024.JPG";
// import slide6 from "../../assets/home/Events/The 40th National Day Celebration of Negara Brunei Darussalam.png";

// export const HomeNewEvent = () => {
//   const events = [
//     { name: '25 Million Safe Man-Hours Without Lost Time Injury (LTI)', image: slide1, link: '/gallery' },
//     { name: 'Celebrating Hari Raya 2024', image: slide2, link: '/gallery' },
//     { name: 'Happy 78th Birthday to His Majesty Sultan of Brunei', image: slide3, link: '/gallery' },
//     { name: 'Happy Chinese New Year 2024', image: slide4, link: '/gallery' },
//     { name: 'Head Office HLP 2024', image: slide5, link: '/gallery' },
//     { name: 'The 40th National Day Celebration of Negara Brunei Darussalam', image: slide6, link: '/gallery' },
//   ];

//   const [selectedEvent, setSelectedEvent] = useState(events[0]);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const navigate = useNavigate();

//   const handleEventHover = (event, index) => {
//     setSelectedEvent(event);
//     setActiveIndex(index);
//   };

//   const handleImageClick = () => {
//     navigate("/");
//   };

//   return (
//     <div className="screen-size mx-auto sm:my-20 my-14">
//       <h2 className="mb-12 text-black sm:my-10 mb-5 text-[20px] text-center sm:text-[34px] font-semibold relative">
//         <span className='sm:absolute sm:w-[200px] sm:h-4 sm:top-11 sm:border-b-4 border-dark_red'></span>
//         NEWS & EVENTS
//       </h2>

//       <div className='flex flex-col sm:flex-row items-center justify-evenly w-full gap-2 lg:gap-10 my-2 lg:my-10'>
//         {/* Left Image Section */}
//         <div className="flex justify-center w-full sm:w-[450px] lg:w-[600px] h-[300px] sm:h-[490px] overflow-hidden cursor-pointer" >
//           <img
//             src={selectedEvent.image}
//             alt={selectedEvent.name}
//             className="rounded-md w-full h-full object-fit"
//           />
//         </div>

//         {/* Right Event List Section */}
//         <div className="flex justify-evenly gap-5 items-center bg-white shadow shadow-dark_red px-6 py-6 rounded-lg border w-full sm:w-[380px] h-[400px] flex flex-col">
//           <ul className="space-y-4">
//             {events.map((event, index) => (
//               <li
//                 key={index}
//                 className={`flex gap-2 cursor-pointer ${activeIndex === index ? 'text-dark_red font-bold' : 'text-[#50A5EB]'}`}
//                 onMouseEnter={() => handleEventHover(event, index)}
//               >
//                 <span className="text-xl"><TiTickOutline /></span>
//                 <span onClick={handleImageClick} className={`text-sm transition ${activeIndex === index ? 'hover:text-dark_red' : 'hover:text-dark_red'}`}>{event.name}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };
