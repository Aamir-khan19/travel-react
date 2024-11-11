import React from 'react'
import Select from 'react-select';

function TourDestination({destinationOptions, selectedDestinations, setSelectedDestinations}) {

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
    <label className="block text-gray-700 mb-2">
    Tour Destination
    <Select
    styles={customStyles}
      isMulti
      options={destinationOptions}
      value={selectedDestinations}
      onChange={(e)=>setSelectedDestinations(e)}
      className="mt-1"
      placeholder="Select Destinations"
    />
  </label>
  )
}

export default TourDestination
