import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setItineraryForm } from '../../../../../features/itinerary/itinerarySlice';

function MetaDescription() {
    const dispatch = useDispatch();
  const itineraryForm = useSelector(state => state.itineraries.itineraryForm);

  return (
    <label className="block text-gray-700 mb-2">
    Meta Description
    {/* <input
      type="text"
    
    /> */}

    <textarea
      value={itineraryForm?.metaDescription}
      onChange={(e) => dispatch(setItineraryForm({metaDescription: e.target.value}))}
      placeholder="Enter meta description"
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
    name="meta_title"></textarea>


  </label>
  )
}

export default MetaDescription
