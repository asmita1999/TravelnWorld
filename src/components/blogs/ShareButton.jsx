import React from 'react';
import { FiShare2 } from 'react-icons/fi';
import { FaPrint } from 'react-icons/fa';

function ShareButton({ title, text, url }) {

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url,
        });
        console.log("Shared successfully!");
      } catch (error) {
        console.log("Sharing failed:", error);
      }
    } else {
      // Fallback: Copy to clipboard
      try {
        await navigator.clipboard.writeText(url);
        alert("Share not supported on this device. Link copied to clipboard.");
      } catch (err) {
        alert("Unable to copy the link.");
      }
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex space-x-4">
      {/* Share button */}
      <button
        onClick={handleShare}
        className="text-blue-800 hover:text-orange-500 text-xl cursor-pointer"
        title="Share this post"
        aria-label="Share this post"
      >
        <FiShare2 />
      </button>

      {/* Print button */}
      <button
        onClick={handlePrint}
        className="text-blue-800 hover:text-orange-500 text-xl cursor-pointer"
        title="Print this post"
        aria-label="Print this post"
      >
        <FaPrint />
      </button>
    </div>
  );
}

export default ShareButton;