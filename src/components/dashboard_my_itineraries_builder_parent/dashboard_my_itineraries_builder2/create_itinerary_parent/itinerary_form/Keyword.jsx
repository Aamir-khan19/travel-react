import React from 'react'
import { setItineraryForm } from '../../../../../features/itinerary/itinerarySlice'
import { useDispatch, useSelector } from 'react-redux'

function Keyword() {
    const dispatch = useDispatch();
    const itineraryForm = useSelector(state => state.itineraries.itineraryForm);
    
  return (
    <label className="block text-gray-700 mb-2">
    Keyword
    <input
      type="text"
      value={itineraryForm?.keyword}
      onChange={(e) => dispatch(setItineraryForm({keyword: e.target.value}))}
      placeholder="Enter Keyword"
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
    />
  </label>
  )
}

export default Keyword
