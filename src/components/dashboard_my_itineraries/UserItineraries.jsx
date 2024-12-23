import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import conf from '../../../conf/conf';
import { itinerariesDestroyAsync } from '../../features/itinerary/itinerarySlice';
import { useNavigate } from 'react-router-dom';

function UserItineraries() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userItineraries = useSelector((state) => state.itineraries.userItineraries);

  console.log("DashboardMyItineraries.jsx itineraries", userItineraries);


  const handleItineraryDelete = function(itinearary_id){
    if(!confirm("Are you sure you want to delete this itinerary")){
   
      return;
    }

  dispatch(itinerariesDestroyAsync(itinearary_id))
  }

  const handleUpdateItinerary = function(itinearary_id){
   navigate(`/dashboard-update-itinerary/${itinearary_id}`);
  }
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        My Itineraries
      </h2>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {userItineraries.map((itinerary) => (
          <div
            key={itinerary?.id}
            className="border rounded-lg shadow-md overflow-hidden bg-white hover:shadow-lg transition duration-300"
          >
            {/* Card Header */}
            <div className="relative p-2">
              <img
                src={`${conf.laravelBaseUrl}/${itinerary.destination_thumbnail}`}
                alt={itinerary?.title}
                className="w-full aspect-video object-contain"
              />
              <span className="absolute bottom-4 right-4 bg-black text-white text-xs sm:text-sm font-medium px-3 py-1 rounded">
                {itinerary?.duration?.label}
              </span>
            </div>

            {/* Card Body */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {itinerary?.title}
              </h3>
              <p className="text-sm text-gray-700 mt-1">
                From ₹ {itinerary?.pricing}
              </p>
              <p className="text-sm text-gray-700 mt-1">
                {itinerary?.selected_destination.label}
              </p>

              {/* Icons */}
              <div className="flex items-center gap-3 text-sm text-gray-700 mt-3">
                <span className="flex items-center">
                  ✈️ Flights
                </span>
                <span className="flex items-center">
                  🎢 Activities
                </span>
                <span className="flex items-center">
                  🏨 Hotels
                </span>
                <span className="flex items-center">
                  🚗 Transfers
                </span>
              </div>

              {/* Info */}
              <div className="text-sm text-gray-700 mt-4 space-y-1">
                <p>
                  <span className="font-medium">ID:</span> {itinerary?.id}
                </p>
               
                <p>
                  <span className="font-medium">Visibility:</span>{' '}
                  <b>{itinerary.itinerary_visibility}</b>
                </p>
                <p>
                  <span className="font-medium">Last Update:</span>{' '}
                  {itinerary.updated_at}
                </p>
              </div>

              {/* Actions */}
              <div className="mt-4 flex gap-3">
                <button onClick={()=>handleUpdateItinerary(itinerary?.id)} className="px-4 py-2 w-full bg-blue-500 text-white text-sm font-medium rounded shadow hover:bg-blue-600 transition">
                  Edit ✏️
                </button>
                <button onClick={()=>handleItineraryDelete(itinerary?.id)} className="px-4 py-2 w-full bg-red-500 text-white text-sm font-medium rounded shadow hover:bg-red-600 transition">
                  Archive 🗑️
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserItineraries;
