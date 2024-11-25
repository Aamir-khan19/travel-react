import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import visibilityOptions from "../../dashboard_my_itineraries_builder_parent/visibilityOptions";
import { setItineraryForm } from '../../../features/itinerary/itinerarySlice';

function ItineraryVisibility() {
  const dispatch = useDispatch();
  
  const itineraryForm = useSelector(state => state.itineraries.itineraryForm);

  const userItineraries=  useSelector(state => state.itineraries.userItineraries);

  console.log("userItineraries itineraryVisibility.jsx ", userItineraries);

  console.log("ItineraryVisibility.jsx", itineraryForm);
  return (
    <label className="block text-gray-700 mb-2">
        Itinerary Visibility
        <select
          value={itineraryForm?.visibility}
          onChange={(e) => dispatch(setItineraryForm({visibility: e.target.value})) }
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
        >
          {visibilityOptions.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>
  )
}

export default ItineraryVisibility
