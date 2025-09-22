import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function VerifyTour({travelItem}) {
  const navigate = useNavigate();
  const { id } = useParams(); // Get dynamic ID from the URL

  const handleViewAll = () => {
    navigate(`/verified-transport-details/${id}/packages`);
  };  
  return (
     <section id="packages">
            <div className="flex justify-between items-center mb-4">
                <h2 className="font-semibold text-xl">Tour Packages</h2>
                <button 
                    onClick={handleViewAll}
                    className="text-blue-600 text-md font-medium underline">View All
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {travelItem.tourPackages.slice(0, 3).map((pkg, i) => (
                    <div key={i} className="border rounded-md p-4 shadow-sm">
                    <h3 className="font-bold text-base mb-1">Packages For {pkg.destination}</h3>
                    <p className="text-gray-600 text-sm mb-2">{pkg.description}</p>
                    <p className="font-semibold text-sm mb-2">{pkg.price} onwards</p>
                    <div className="flex flex-col gap-1">
                        <button className="text-blue-600 text-sm font-medium underline w-fit">View Details</button>
                        <button className="border border-blue-600 text-blue-600 text-sm font-semibold py-1 rounded hover:bg-blue-50 w-full">
                        Enquire Now
                        </button>
                    </div>
                    </div>
                ))}
            </div>

        </section>
  )
}

export default VerifyTour