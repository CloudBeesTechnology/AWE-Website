import React from 'react';

export const HLP = ({ images = [], onClick }) => {
  // Use the first image from the images array or fallback to a placeholder
  const imageSrc = images.length > 0 ? images[0] : ''; 

  return (
    <section className="p-2 center flex-col" onClick={onClick} style={{ cursor: 'pointer' }}>
      <h2 className='text-[18px] mb-4'>HLP 2024</h2>
      <div className='border rounded-md border-[#C5D955] max-w-lg w-full max-h-[275px] h-full overflow-hidden'>
        <div className='p-2 rounded-md border-t-4 border-[#C9C900] flex justify-center items-center h-full'>
          {imageSrc && (
            <img
              src={imageSrc}
              alt="HLP Achievement"
              className="cursor-pointer rounded shadow-lg object-cover min-w-[120px] w-full h-[275px] pb-4"
            />
          )}
        </div>
      </div>
    </section>
  );
};
