import React, { useState } from "react";
import { Bookmark, Share2, Edit3 } from "lucide-react";

const Header = ({ travelItem }) => {
  const [saved, setSaved] = useState(false);

  return (
    <header className="mb-6 border rounded-md p-5 shadow-sm relative max-w-full">
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-2xl">👍</span>
          <h1 className="font-bold text-xl sm:text-2xl truncate">{travelItem.name}</h1>
          <div className="flex flex-wrap gap-1 max-w-full">
            {travelItem.categories.map((cat, i) => (
              <span key={i} className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-md text-xs whitespace-nowrap">
                {cat}
              </span>
            ))}
          </div>
          <button
            onClick={() => setSaved(!saved)}
            className={`ml-2 border rounded p-2 transition flex-shrink-0 ${
              saved ? "bg-yellow-400 text-white" : "hover:bg-gray-100"
            }`}
            title="Save"
          >
            <Bookmark size={18} className={saved ? "fill-white" : ""} fill={saved ? "white" : "none"} />
          </button>
        </div>

        {/* Ratings & Badges */}
        <div className="flex flex-wrap items-center gap-1 text-xs sm:text-sm">
          <div className="bg-green-600 text-white rounded-md px-2 py-0.5 font-semibold flex items-center gap-1 whitespace-nowrap">
            {travelItem.rating} ★ <span className="text-white/80 font-normal">(Ratings)</span>
          </div>
          <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-md font-medium whitespace-nowrap flex items-center gap-1">
            🏆 Trust
          </span>
          <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-md font-medium whitespace-nowrap flex items-center gap-1">
            ✔ Verified
          </span>
          <span className="bg-gray-100 text-black px-2 py-0.5 rounded-md font-medium whitespace-nowrap flex items-center gap-1">
            ✅ Claimed
          </span>
        </div>

        {/* Address & Open Time */}
        <p className="text-xs sm:text-sm text-gray-700">
          · Open 24 Hrs · {travelItem.yearsInBusiness} Years in Business
        </p>

        {/* Services */}
        <div className="flex flex-wrap gap-3 text-xs sm:text-sm font-semibold text-gray-700">
          {travelItem.services.map((service, i) => (
            <span key={i}>{service}</span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-2">
          <button className="bg-green-600 text-white px-4 py-1.5 rounded font-semibold flex items-center gap-1 whitespace-nowrap">
            📞 {travelItem.phone}
          </button>
          <button className="bg-blue-600 text-white px-4 py-1.5 rounded font-semibold whitespace-nowrap">
            Enquire Now
          </button>
          <button className="border border-green-600 text-green-600 px-4 py-1.5 rounded font-semibold whitespace-nowrap">
            WhatsApp
          </button>
          <button className="border px-3 py-1.5 rounded hover:bg-gray-100 flex items-center gap-2">
            <Share2 size={16} />
          </button>
          <button className="border px-3 py-1.5 rounded hover:bg-gray-100 flex items-center gap-2">
            <Edit3 size={16} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
