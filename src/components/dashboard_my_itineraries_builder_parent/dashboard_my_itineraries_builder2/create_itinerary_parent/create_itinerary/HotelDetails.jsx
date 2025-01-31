import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setHotelDetails } from "../../../../../features/itinerary/itinerarySlice";
import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi2";

const HotelDetails = ({setCurrentComponent}) => {
    const dispatch = useDispatch();   
    const hotelDetails = useSelector((state) => state.itineraries.hotelDetails);

    const [hotelType, setHotelType] = useState("Super Deluxe");
    const [hotelDetailIndex, setHotelDetailIndex] = useState(0);
    
    const [roomType, setRoomType] = useState("");
    const [price, setPrice] = useState("");
    const [discount, setDiscount] = useState("");
  
    const handleRoomTypeChange = (e) => {
      setRoomType(e.target.value);
      dispatch(setHotelDetails({type: hotelType, name: e.target.name,  value: e.target.value}));
    };

    const handlePriceChange = (e)=>{
      setPrice(e.target.value);
      dispatch(setHotelDetails({type: hotelType, name: e.target.name,  value: e.target.value}));
    }

    const handleDiscountChange = (e)=>{
      setDiscount(e.target.value);
      dispatch(setHotelDetails({type: hotelType, name: e.target.name,  value: e.target.value}));
    }
  
  
    const handleBack = function(){
      setCurrentComponent(5)
      }


      useEffect(()=>{
      const newHotelDetailIndex = hotelDetails.findIndex((ele)=> ele?.type  == hotelType);  
      const hotelDetail = hotelDetails.find((ele)=> ele?.type == hotelType);

      setHotelDetailIndex(newHotelDetailIndex);

      setRoomType(hotelDetail?.roomType);
      setPrice(hotelDetail?.price);
      setDiscount(hotelDetail?.discount);
      }, [hotelType])

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Hotel Details</h2>

      {/* Hotel Type Dropdown */}
      <label
        htmlFor="hotelType"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Select Hotel Type:
      </label>
      <select
        id="hotelType"
        name="hotelType"
        value={hotelType}
        onChange={(e)=>setHotelType(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 mb-4"
      >
        <option value="Super Deluxe">Super Deluxe</option>
        <option value="Deluxe">Deluxe</option>
        <option value="Standard">Standard</option>
      </select>

      {/* Editable Room Details */}
      <div className="space-y-4">
        {/* Room Type Input */}
        <div>
          <label
            htmlFor="roomType"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Room Type:
          </label>
          <input
            type="text"
            id="roomType"
            name="roomType"
            value={roomType}
            onChange={(e)=> handleRoomTypeChange(e)}
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Price Input */}
        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Price ($):
          </label>
          <input
            type="text"
            id="price"
            name="price"
            value={price}
              onChange={(e)=> handlePriceChange(e)}
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Discount Input */}
        <div>
          <label
            htmlFor="discount"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Discount (%):
          </label>
          <input
            type="number"
            id="discount"
            name="discount"
            value={discount}
              onChange={(e)=> handleDiscountChange(e)}
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>


        {
            hotelDetails[hotelDetailIndex]?.price && hotelDetails[hotelDetailIndex]?.discount && 
            <div className="block text-sm font-medium text-gray-700 mt-2" >
              Discounted price: {(hotelDetails[hotelDetailIndex]?.price) - ((hotelDetails[hotelDetailIndex]?.price)*((hotelDetails[hotelDetailIndex]?.discount)/100))}
            </div>
          }

      </div>




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
