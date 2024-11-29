import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setItineraryForm } from '../../../../../features/itinerary/itinerarySlice';

function ItineraryVisibility() {
  const dispatch = useDispatch();
  
  const itineraryForm = useSelector(state => state.itineraries.itineraryForm);

  console.log("itineraryVisibility.jsx ", itineraryForm?.visibility);

  return (
    <label className="block text-gray-700 mb-2">
        Itinerary Visibility
        <select
          value={itineraryForm?.visibility}
          onChange={(e) => dispatch(setItineraryForm({visibility: e.target.value})) }
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
        >
          <option value="public">Public</option>
          <option value="private">Private</option>
        </select>
      </label>
  )
}

export default ItineraryVisibility
