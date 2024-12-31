import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { setItineraryDetails } from "../../../features/itinerary/itinerarySlice";

const PriceComponent = ({setCurrentComponent}) => {
  const dispatch = useDispatch();
  const itineraryDetails = useSelector((state) => state.itineraries.itineraryDetails);


    const handleBack = function(){
      setCurrentComponent(4)
      }

      const handleNext = function(){
        setCurrentComponent(6)
        }


  return (
  <>
    <div className=' mt-10 md:w-[80%] md:mx-auto'>

     <label htmlFor="pricing" className=" text-gray-700">Starting Price Of Package (1 Person Adult)</label>
   
   <input
   id="pricing"
   value={itineraryDetails?.pricing}
   onChange={(e)=> dispatch(setItineraryDetails({pricing: e.target.value}))}
   type="text"
   className=" mb-10 mt-2 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
   placeholder="Enter Pricing"
   />
      

      <div className=' mt-10 flex justify-between'>
      <button onClick={handleBack} className="flex items-center text-blue-600 font-semibold underline hover:text-blue-800 mb-4">
      <HiChevronLeft className="mr-1" /> Back
    </button>
    

      <button onClick={handleNext} className="flex items-center text-blue-600 font-semibold underline hover:text-blue-800 mb-4">
      Next <HiChevronRight className="ml-1" />
    </button>
      </div>
    
      </div>
    </>
  );
};

export default PriceComponent;
