import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setItineraryForm } from '../../../../../features/itinerary/itinerarySlice';

function MetaTitle() {
    const dispatch = useDispatch();
  const itineraryForm = useSelector(state => state.itineraries.itineraryForm);

  return (
    <label className="block text-gray-700 mb-2">
    Meta Title
    <input
      type="text"
      value={itineraryForm?.metaTitle}
      onChange={(e) => dispatch(setItineraryForm({metaTitle: e.target.value}))}
      placeholder="Enter meta title"
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
    />
  </label>
  )
}

export default MetaTitle
