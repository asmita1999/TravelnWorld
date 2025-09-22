import React, { useState } from 'react';
import ImageGallery from '../ImageGallery'; 
import VideoGallery from '../VideoGallery';

function Gallery({ travelItem }) {
  const [isImageGalleryOpen, setIsImageGalleryOpen] = useState(false);
  const [isVideoGalleryOpen, setIsVideoGalleryOpen] = useState(false);

  return (
    <section id="photos">
      <h2 className="font-semibold text-lg mb-4">Photos</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        {/* Image gallery + caption */}
        <div className="flex flex-col items-center">
          <div className="w-[200px]"> 
            <ImageGallery 
              travelItem={travelItem} 
              isOpen={isImageGalleryOpen} 
              setIsOpen={setIsImageGalleryOpen} 
            />
          </div>
          <p 
            className="mt-2 text-center font-medium cursor-pointer text-blue-600 hover:underline"
            onClick={() => setIsImageGalleryOpen(true)}
          >
            See All Images 
          </p>
        </div>

        {/* Video gallery + caption */}
        <div className="flex flex-col items-center">
          <div className="w-[200px]">
            <VideoGallery 
              travelItem={travelItem}
              isOpen={isVideoGalleryOpen}
              setIsOpen={setIsVideoGalleryOpen}
            />
          </div>
          <p 
            className="mt-2 text-center font-medium cursor-pointer text-blue-600 hover:underline"
            onClick={() => setIsVideoGalleryOpen(true)}
          >
            All Videos
          </p>
        </div>
      </div>

      {/* Upload Button */}
      <div className="mt-4">
        <button className="bg-blue-600 text-white px-5 py-2 rounded font-semibold">
          Upload Photos
        </button>
      </div>
    </section>
  );
}

export default Gallery;
