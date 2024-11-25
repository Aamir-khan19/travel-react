import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { setPriceRange } from "../../../../../features/itinerary/itinerarySlice";
import { HiChevronLeft } from "react-icons/hi";

const PriceComponent = ({setCurrentComponent}) => {
  const dispatch = useDispatch();
  const { currency, minPrice, maxPrice } = useSelector((state) => state.itineraries.priceRange);

  const handleCurrencyChange = (e) => {
    dispatch(setPriceRange({ currency: e.target.value }));
  };

  const handleMinPriceChange = (e) => {
    dispatch(setPriceRange({ minPrice: e.target.value }));
  };

  const handleMaxPriceChange = (e) => {
    dispatch(setPriceRange({ maxPrice: e.target.value }));
  };


  const handleBack = function(){
    setCurrentComponent(4)
    }

  return (
  <>
  
 

    <div className="p-6 mb-5 bg-white shadow-md rounded-lg max-w-md mx-auto">
      <h2 className="text-xl font-bold text-gray-700 mb-4">Set Price Range</h2>

      {/* Currency Selector */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-2">Currency</label>
        <select
          value={currency}
          onChange={handleCurrencyChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="₹">Rupee (₹)</option>
          <option value="$">Dollar ($)</option>
        </select>
      </div>

      {/* Minimum Price Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-2">Minimum Price</label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
            {currency}
          </span>
          <input
            type="number"
            value={minPrice}
            onChange={handleMinPriceChange}
            placeholder="Enter minimum price"
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Maximum Price Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-2">Maximum Price</label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
            {currency}
          </span>
          <input
            type="number"
            value={maxPrice}
            onChange={handleMaxPriceChange}
            placeholder="Enter maximum price"
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Display Price Range */}
      <div className="mt-6">
        <p className="text-sm text-gray-600">
          Selected Price Range:{" "}
          <span className="font-bold">
            {currency}
            {minPrice || 0} - {currency}
            {maxPrice || 0}
          </span>
        </p>
      </div>
    </div>


    <div className=' mt-10 flex justify-start'>
      <button onClick={handleBack} className="flex items-center text-blue-600 font-semibold underline hover:text-blue-800 mb-4">
      <HiChevronLeft className="mr-1" /> Back
    </button>
    
      </div>
    </>
  );
};

export default PriceComponent;
