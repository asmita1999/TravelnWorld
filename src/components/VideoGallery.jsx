import React from 'react';

import vid1 from '../assets/videos/hero.mp4';
import vid2 from '../assets/videos/contactUs.mp4';
import vid3 from '../assets/videos/hero.mp4';
import vid4 from '../assets/videos/contactUs.mp4';

const videos = [
  { id: 1, src: vid1 },
  { id: 2, src: vid2 },
  { id: 3, src: vid3 },
  { id: 4, src: vid4 },
];

function VideoGallery({ isOpen, setIsOpen }) {
  return (
    <>
      {/* ▶️ Preview Video */}
      <div
        className="w-[200px] h-[150px] border rounded-md overflow-hidden shadow-sm cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <video
          src={videos[0].src}
          className="w-full h-full object-cover"
          muted
          loop
          autoPlay
          playsInline
        />
      </div>

      {/* 🔥 Popup Video Gallery */}
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

            {/* 🎥 Heading */}
            <h2 className="text-xl font-semibold mb-6 text-center">Video Gallery</h2>

            {/* Videos Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {videos.map(({ id, src }) => (
                <video
                  key={id}
                  src={src}
                  controls
                  className="w-full h-[200px] rounded shadow object-cover"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default VideoGallery;
