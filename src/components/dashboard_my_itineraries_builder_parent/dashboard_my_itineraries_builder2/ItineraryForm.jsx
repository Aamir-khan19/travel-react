import React, { useState } from 'react';
import ItineraryVisibility from './itinerary_form/ItineraryVisibility';
import ItineraryType from './itinerary_form/ItineraryType';
import ItineraryDuration from './itinerary_form/ItineraryDuration';
import TourDestination from './itinerary_form/TourDestination';
import ItineraryTheme from './itinerary_form/ItineraryTheme';
import { useDispatch, useSelector } from 'react-redux';
import { setItineraryForm } from '../../../features/itinerary/itinerarySlice';

const ItineraryForm = () => {
  const dispatch = useDispatch();
  const itineraryForm = useSelector(state => state.itineraries.itineraryForm);
  

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">Itinerary Details</h2>
      <p className="text-sm text-gray-600 mb-4">Enter the details of your itinerary.</p>
      
      <label className="block text-gray-700 mb-2">
        Title
        <input
          type="text"
          value={itineraryForm?.title}
          onChange={(e) => dispatch(setItineraryForm({title: e.target.value}))}
          placeholder="Enter itinerary title"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
        />
      </label>

     
     <ItineraryVisibility />
     

    <ItineraryType />

     
    <ItineraryDuration />
   

    <TourDestination />

    <ItineraryTheme />

      <div className="flex space-x-2 mt-6">
        <button className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200">Preview</button>
        <button className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600">Draft</button>
        <button className="px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-800">Publish</button>
      </div>
    </div>
  );
};

export default ItineraryForm;
