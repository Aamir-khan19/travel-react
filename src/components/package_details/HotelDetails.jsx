import React from "react";
import { useSelector } from "react-redux";

const HotelDetails = () => {
  const hotels = useSelector((state) => state.public.particularItinerary?.hotel_details);

  if (!hotels || hotels.length === 0) return null;

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Hotel Details</h3>
      <ul className="space-y-4">
        {hotels.map((hotel, index) => (
          <li
            key={index}
            className="p-4 bg-white border rounded-lg shadow-sm hover:shadow-md transition duration-300"
          >
            <p className="text-lg font-semibold text-blue-600">Type: {hotel.type}</p>
            {/* <p className="text-gray-700">
              <span className="font-medium">Name:</span> {hotel.name}
            </p> */}
            <p className="text-gray-700">
              <span className="font-medium">Price:</span> ₹{hotel.price}
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Discount:</span> {hotel.discount}%
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HotelDetails;
