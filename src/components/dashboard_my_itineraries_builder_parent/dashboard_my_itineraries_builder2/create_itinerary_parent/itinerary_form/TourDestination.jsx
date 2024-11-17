import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { setItineraryForm } from '../../../../../features/itinerary/itinerarySlice';
import destinationOptions from '../../../destinationOptions';

function TourDestination() {
  const dispatch = useDispatch();
  const itineraryForm = useSelector(state => state.itineraries.itineraryForm);


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

      console.log("TourDestinations.jsx destination", itineraryForm?.selectedDestinations)

  return (
    <label className="block text-gray-700 mb-2">
    Tour Destination
    <Select
    styles={customStyles}
      options={destinationOptions}
      value={itineraryForm?.selectedDestination}
      onChange={(e)=>dispatch(setItineraryForm({selectedDestination: e}))}
      className="mt-1"
      placeholder="Select Destinations"
    />
  </label>
  )
}

export default TourDestination
