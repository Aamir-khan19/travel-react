import React from "react";
import { useSelector } from "react-redux";

function Itinerary() {
  const days_information = useSelector(
    (state) => state.public.particularItinerary?.days_information
  );

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-6">Itinerary</h1>
      <div className="space-y-4">
        {days_information?.map((dayInfo, index) => (
          <div
            key={index}
            className="p-4 bg-white shadow-md rounded-lg border-l-4 border-blue-500"
          >
            <h2 className="text-xl font-semibold mb-2 text-blue-600">
              Day {dayInfo.day}: {dayInfo.locationName}
            </h2>
            <p className="text-gray-700">{dayInfo.locationDetail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Itinerary;
