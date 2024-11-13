import React from 'react';
import durationOptions from "../../../durationOptions";
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { setItineraryForm } from '../../../../../features/itinerary/itinerarySlice';

function ItineraryDuration() {
  const dispatch = useDispatch();
  const itineraryForm = useSelector(state => state.itineraries.itineraryForm);


  console.log("ItineraryDuration.jsx itineraryForm ", itineraryForm);

  return (
    <label className="block text-gray-700 mb-2">
      Itinerary Duration
      <Select
        value={durationOptions.find(option => option == itineraryForm?.duration)}
        onChange={(selectedOption) => dispatch(setItineraryForm({ duration: selectedOption }))}
        options={durationOptions}
        placeholder="Select Duration"
        className="rounded-md border-gray-300 shadow-sm"
        classNamePrefix="select"
        onMenuOpen={() => {}}
      />
    </label>
  );
}

export default ItineraryDuration;
