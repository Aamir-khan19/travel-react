import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setItineraryForm } from '../../../../../features/itinerary/itinerarySlice';

function ItineraryType() {
const dispatch = useDispatch();

const itineraryForm = useSelector(state => state.itineraries.itineraryForm);

console.log("itineraryForm.jsx itineararyForm", itineraryForm?.type);
  return (
    <label className="block text-gray-700 mb-2">
        Itinerary Type
        <select
          value={itineraryForm?.type}
          onChange={(e) => dispatch(setItineraryForm({type: e.target.value}))}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
        >
          <option value="flexible">Flexible</option>
          <option value="fixed">Fixed</option>
        </select>
      </label>
  )
}

export default ItineraryType
