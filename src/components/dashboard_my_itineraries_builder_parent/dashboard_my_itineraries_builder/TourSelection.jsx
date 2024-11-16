import React, { useState } from 'react';
import Select from 'react-select';
import destinationOptions from '../destinationOptions';
import durationOptions from "../durationOptions";
import { useDispatch } from 'react-redux';
import { setItineraryForm } from '../../../features/itinerary/itinerarySlice';

const TourSelection = () => {
  const dispatch = useDispatch();

  console.log("TourSelection.jsx destinationOptions ", destinationOptions, durationOptions);


  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#7C3AED' : provided.backgroundColor, // Purple background when selected
      color: state.isSelected ? 'white' : 'black',                             // White text when selected
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: '#7C3AED', // Purple background for selected items
      color: 'white',
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: 'white',
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: 'white',
      '&:hover': { backgroundColor: '#5B21B6' }, // Darker purple on hover
    }),
  };

  return (
    <div className="flex flex-col md:flex-row gap-4">

      <div className="w-full md:w-1/2">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tour-destination">
          Tour Destination <span className=' text-red-500'>*</span>
        </label>
        <Select
        onChange={(e)=>dispatch(setItineraryForm({selectedDestination: e}))}
          id="tour-destination"
          options={destinationOptions}
          styles={customStyles}
          placeholder="Select Destination"
          className="rounded-md border-gray-300 shadow-sm"
          classNamePrefix="select"
        />
      </div>

      <div className="w-full md:w-1/2">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="itinerary-duration">
          Itinerary Duration<span className=' text-red-500'>*</span>
        </label>
        <Select
        onChange={(e)=>{dispatch(setItineraryForm({duration: e}))}}
          id="itinerary-duration"
          options={durationOptions}
          placeholder="Select Duration"
          className="rounded-md border-gray-300 shadow-sm"
          classNamePrefix="select"
        />
      </div>
    </div>
  );
};

export default TourSelection;
