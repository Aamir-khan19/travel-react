import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setHotelDetails } from "../../../features/itinerary/itinerarySlice";
import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi2";

const HotelDetails = ({setCurrentComponent}) => {
  const hotelDetails = useSelector((state) => state.itineraries.hotelDetails);
  const dispatch = useDispatch();

  const handleChange = (index, field, value) => {
    dispatch(setHotelDetails({ index, field, value }));
  };


  const handleBack = function(){
    setCurrentComponent(3)
    }
  
    const handleNext = function(){
    setCurrentComponent(5)
    }


  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Hotel Details</h2>
      {hotelDetails?.map((hotel, index) => (
        <div
          key={index}
          className="border border-gray-300 p-4 rounded-lg mb-4 bg-white"
        >
          <h3 className="text-lg font-semibold text-gray-700">
            {hotel.type} Hotel
          </h3>
          <div className="mt-2">
            <label className="block text-sm font-medium text-gray-700">
              Hotel Name
            </label>
            <input
              type="text"
              className="w-full mt-1 p-2 border rounded-lg"
              placeholder="Enter hotel name"
              value={hotel.name}
              onChange={(e) =>
                handleChange(index, "name", e.target.value)
              }
            />
          </div>
          <div className="mt-2">
            <label className="block text-sm font-medium text-gray-700">
              Room Type
            </label>
            <input
              type="text"
              className="w-full mt-1 p-2 border rounded-lg"
              placeholder="Enter room type"
              value={hotel.roomType}
              onChange={(e) =>
                handleChange(index, "roomType", e.target.value)
              }
            />
          </div>
          <div className="mt-2">
            <label className="block text-sm font-medium text-gray-700">
              Price (per night)
            </label>
            <input
              type="number"
              className="w-full mt-1 p-2 border rounded-lg"
              placeholder="Enter price"
              value={hotel.price}
              onChange={(e) =>
                handleChange(index, "price", e.target.value)
              }
            />
          </div>


          <div className="mt-2">
            <label className="block text-sm font-medium text-gray-700">
              Discount
            </label>
            <input
              type="number"
              className="w-full mt-1 p-2 border rounded-lg"
              placeholder="Enter discount"
              value={hotel.discount}
              onChange={(e) =>
                handleChange(index, "discount", e.target.value)
              }
            />
          </div>

          {
            hotel?.price && hotel?.discount && 
            <div className="block text-sm font-medium text-gray-700 mt-2" >
              Discounted price: {hotel?.price - (hotel?.price*(hotel?.discount/100))}
            </div>
          }


        </div>
      ))}
      


      <div className=' mt-10 flex justify-between'>
      <button onClick={handleBack} className="flex items-center text-blue-600 font-semibold underline hover:text-blue-800 mb-4">
      <HiChevronLeft className="mr-1" /> Back
    </button>
    

      {/* <button onClick={handleNext} className="flex items-center text-blue-600 font-semibold underline hover:text-blue-800 mb-4">
      Next <HiChevronRight className="ml-1" />
    </button> */}

    </div>


    </div>
  );
};

export default HotelDetails;
