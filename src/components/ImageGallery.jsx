import React from 'react';

import img1 from '../assets/images/topBannerAds/image1.jpg';
import img2 from '../assets/images/topBannerAds/image2.jpg';
import img3 from '../assets/images/topBannerAds/image3.jpg';
import img4 from '../assets/images/topBannerAds/image4.jpg';
import img5 from '../assets/images/topBannerAds/image5.jpg';
import img6 from '../assets/images/topBannerAds/image6.jpg';
import img7 from '../assets/images/topBannerAds/image7.jpg';
import img8 from '../assets/images/topBannerAds/image8.jpg';

function ImageGallery({ isOpen, setIsOpen }) {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];

  return (
    <>
      {/* ▶️ Thumbnail Preview */}
      <div
        className="w-[200px] h-[150px] border rounded-md overflow-hidden shadow-sm cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <img
          src={images[0]}
          alt="Preview"
          className="w-full h-full object-cover"
        />
      </div>

      {/* 🔥 Popup Gallery */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center px-2">
          <div className="bg-white rounded-md p-4 w-full max-w-6xl max-h-[90vh] overflow-y-auto relative">
            {/* ❌ Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-6 text-gray-600 hover:text-black text-3xl font-bold"
            >
              &times;
            </button>

            {/* 🖼️ Heading */}
            <h2 className="text-xl font-semibold mb-6 text-center">Gallery</h2>

            {/* 📷 Grid of Images */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Image ${index + 1}`}
                  className="w-full h-[200px] object-cover rounded shadow"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ImageGallery;
